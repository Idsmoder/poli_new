import { Button, Col, Form, Radio, Row, Typography } from "antd"
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import { useEffect } from "react";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Tab4 = ({patient, onChanges,info,setInfo}) => {
    const [form] = Form.useForm();
    const params = useParams();

    const onFinish = (values) => {
        let body = {
            nurse_doc_id: params.id,
            tab: 4,
            alcohol: values.alcohol,
            smoking: values.smoking,
            gb: values.gb,
            ibs: values.ibs,
            sd: values.sd,
            ssz: values.ssz,
        }
        api
            .post("/doc/create", body)
            .then((res) => {
                if (res.status==200) {
                    setInfo(body);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Данные успешно сохранены',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(() => {
                        onChanges("5");
                    }, 2000);
                }
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
    }
    const nextClick = () => {
        onChanges('5');
    }
    const backClick = () => {
        onChanges('3');
    }
    useEffect (() => {
        form.setFieldsValue(info);
    },[info])
    
    return (
        <>
            <Typography.Title level={5}>Вредные привычки и наследственность</Typography.Title>
            <Form
                form={form}
                size=""
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            name="alcohol"
                            label="1. Употребление алкоголя"
                        >
                            <Radio.Group   >
                                <Radio value="1">да</Radio>
                                <Radio value="2">Нет</Radio>
                                <Radio value="3">иногда</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="smoking"
                            label="Курение (отметить)"
                            >
                            <Radio.Group Label="Курение" value={patient.smoking}>
                                <Radio value="1">да</Radio>
                                <Radio value="2">Нет</Radio>
                                <Radio value="3">курил в прошлом</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Typography.Title level={5}>Наследственность отягощена или не отягощена :</Typography.Title>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="gb"
                            label="Гипертоническая болезнь"
                        >
                            <Radio.Group  value={patient.gb}>
                                <Radio value="1">нет</Radio>
                                <Radio value="2">Отец</Radio>
                                <Radio value="3">Мать</Radio>
                                <Radio value="4">Отец и мать</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="ibs"
                            label="Ишемическая болезнь сердца"
                        >
                            <Radio.Group  value={patient.ibs}>
                                <Radio value="1">нет</Radio>
                                <Radio value="2">Отец</Radio>
                                <Radio value="3">Мать</Radio>
                                <Radio value="4">Отец и мать</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="sd"
                            label="Сахарный диабет"
                        >
                            <Radio.Group  value={patient.sd}>
                                <Radio value="1">нет</Radio>
                                <Radio value="2">Отец</Radio>
                                <Radio value="3">Мать</Radio>
                                <Radio value="4">Отец и мать</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="ssz"
                            label="Ранняя смерть от ССЗ до 50 лет родителей"
                        >
                            <Radio.Group  value={patient.ssz}>
                                <Radio value="1">нет</Radio>
                                <Radio value="2">Отец</Radio>
                                <Radio value="3">Мать</Radio>
                                <Radio value="4">Отец и мать</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>

                    
                    <Col span={8}>
                        <Form.Item
                            >
                            <Button type="primary" onClick={backClick} >Предыдущий</Button>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            >
                            <Button type="primary" htmlType="submit">Сохранить</Button>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            >
                            <Button type="primary" onClick={nextClick}  >Следующий</Button>
                        </Form.Item>
                    </Col>
                    
                
                </Row>
            </Form>
        </>

    )}
    export default Tab4