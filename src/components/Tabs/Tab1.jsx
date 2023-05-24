import { Button, Checkbox, Col, Form, Input, Radio, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Tab1 =({patient,onChanges,info,setInfo})=> {
    const params = useParams();
    
    const [form] = Form.useForm();
    const [heart, setHeart] = useState('');
    const onFinish = (values) => {
        let body = {
            nurse_doc_id: patient.id,
            tab: 1,
            ad: values.ad,
            ad_text: values.ad_text,
            complaints_shortness: values.complaints_shortness,
            dizziness: values.dizziness,
            general_state: values.general_state,
            headache: values.headache,
            heartbeat: heart ? 1 : 0,
            pain_heart: values.pain_heart,
        }
        api
            .post("/doc/create", body)
            .then((res) => {
                if (res.status==200) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Данные успешно сохранены',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setInfo(form.getFieldsValue());
                    setTimeout(() => {
                        onChanges("2");
                    }, 2000);
                }
            }
            )
    };
    const onChangeHeart = (e) => {
        setInfo({...info,heartbeat:e.target.checked ? 1 : 0})
        setHeart(e.target.checked);
    };
    
    const nextClick = () => {
        onChanges('2');
    }
    useEffect(() => {
        form.setFieldsValue(info)
        setHeart(info?.heartbeat ? '1':'0');
    }, [])
    const onValuChange = (e) => {
        setInfo({...info,...e})
    }
    return (
        <>
            <Typography.Title level={5}>Клиническая характеристика больного</Typography.Title>
            <Form
                form={form}
                size=""
                layout="vertical"
                onFinish={onFinish}
                onValuesChange={onValuChange}
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            
                            label="Общее состояние"
                            name="general_state"
                            >
                            <Radio.Group size=""  >
                                <Radio value="1">относительно удовлетворительное</Radio>
                                <Radio value="2">средней тяжести</Radio>
                                <Radio value="3">тяжелое</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="Жалобы одышка"
                            name="complaints_shortness"
                        >
                            <Radio.Group  >
                                <Radio value="1">легкая</Radio>
                                <Radio value="2">умеренная</Radio>
                                <Radio value="3">выраженная</Radio>
                                <Radio value="4">нет</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="Cердцебиение"
                            name="heartbeat"
                            >
                                <Checkbox onChange={onChangeHeart} checked={heart=='1' ? true:false} >Cердцебиение</Checkbox>
                        </Form.Item>
                        <Form.Item
                            label="Боли в области сердца"
                            name="headache"
                            >
                            <Radio.Group  >
                                <Radio value="1">при физической нагрузкее</Radio>
                                <Radio value="2">при психоэмоциональном перенапряжении</Radio>
                                <Radio value="3">не связанные с физической нагрузкой в положении покоя</Radio>
                                <Radio value="4">нет</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Row gutter={24}>
                            <Col span={12}>
                            <Form.Item
                                label="головные боли"
                                name="pain_heart"
                            >
                                <Radio.Group  >
                                    <Radio value="1">есть</Radio>
                                    <Radio value="2">нет</Radio>
                                </Radio.Group>
                            </Form.Item>    
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="головокружения"
                                name="dizziness"
                            >
                                <Radio.Group  >
                                    <Radio value="1">есть</Radio>
                                    <Radio value="2">нет</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        </Row>
                        <Form.Item
                            label="подъёмы АД"
                            name="ad"
                        >
                            <Radio.Group size="large" >
                                <Radio value="1">есть</Radio>
                                <Radio value="2">до 140/90 мм.рт.ст.</Radio>
                                <Radio value="3">до 160/100 мм.рт.ст.</Radio>
                                <Radio value="4">до 180/110 мм.рт.ст.</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item
                            label="дополнительные жалобы"
                            name="ad_text"
                            >
                            <Input.TextArea />
                        </Form.Item>
                        <Row gutter={24}>
                            <Col span={12}>
                            <Form.Item
                            >
                            <Button type="primary" htmlType="submit">Сохранить</Button>
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                            <Form.Item
                                >
                                <Button type="primary" onClick={nextClick} >Следующий</Button>
                            </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
            
              
        </>
    );
}
export default Tab1;