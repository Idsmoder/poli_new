import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import Swal from "sweetalert2";

const Tab5 = ({patient,onChanges,info,setInfo}) => {
    const [form] = Form.useForm();
    const params = useParams();
    const onFinish = (values) => {
        let body = {
            nurse_doc_id: params.id,
            tab: 5,
            
            height: values.height,
            bodyMass: values.bodyMass,
            waistCircumference: values.waistCircumference,
            hipCircumference: values.hipCircumference,
            waistHipRatio: values.waistHipRatio,
            imt: values.imt,
            presenceDegreeImt: values.presenceDegreeImt,
            adiposeTissue: values.adiposeTissue,
            internalFat: values.internalFat,
            muscleMass: values.muscleMass,
            bodyType: values.bodyType,
            bone: values.bone,
            exchangeRate: values.exchangeRate,
            metabolicAge: values.metabolicAge,
            waterInBody: values.waterInBody,
        }
        api
            .post("/doc/create", body)
            .then((res) => {
                if (res.status===200) {
                    setInfo(body);
                    Swal.fire({
                        title: 'Успешно!',
                        text: 'Данные успешно сохранены',
                        icon: 'success',
                    })
                    setTimeout(() => {
                        onChanges("6");
                    }, 2000);
                }
            }
            )
            .catch((err) => {
                Swal.fire({
                    title: 'Ошибка!',
                    text: 'Что-то пошло не так',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })

    }

    const nextClick = () => {
        onChanges('6');
    }
    const backClick = () => {
        onChanges('4');
    }
    const onCanculate = (e) => {
        
        if (e.target.id == 'tab5_waistCircumference' || e.target.id == 'tab5_hipCircumference') {
            let waistCircumference = form.getFieldValue('waistCircumference');
            let hipCircumference = form.getFieldValue('hipCircumference');
            let calc = (waistCircumference / hipCircumference).toFixed(2);
            form.setFieldsValue({
                waistHipRatio: calc
            })
        }
        if (e.target.id == 'tab5_height' || e.target.id == 'tab5_bodyMass') {
            let height = form.getFieldValue('height');
            let bodyMass = form.getFieldValue('bodyMass');
            let calc = (bodyMass / (height * height)).toFixed(2);
            form.setFieldsValue({
                imt: calc,
                presenceDegreeImt:calc
            })
        }
       
    }
    useEffect(() => {
        form.setFieldsValue({
            height: info?.height,
            bodyMass: info?.bodyMass,
            waistCircumference: info?.waistCircumference,
            hipCircumference: info?.hipCircumference,
            waistHipRatio: info?.waistHipRatio,
            imt: info?.imt,
            presenceDegreeImt: info?.presenceDegreeImt,
            adiposeTissue: info?.adiposeTissue,
            internalFat: info?.internalFat,
            muscleMass: info?.muscleMass,
            bodyType: info?.bodyType,
            bone: info?.bone,
            exchangeRate: info?.exchangeRate,
            metabolicAge: info?.metabolicAge,
            waterInBody: info?.waterInBody,
        })
    }, [info])
    
    return (
        <>
            <Typography.Title level={5}>Антропометрические данные и данные Tanita</Typography.Title>
            <Form
                name="tab5"
                layout="vertical"
                onFinish={onFinish}
                form={form}
                >
                    <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            name="height"
                            label="Рост. (M) "
                            rules={[{ required: true, message: 'Введите рост мм'   }]}
                        >
                            <Input placeholder="Рост мм" onChange={onCanculate} suffix="M" />
                        </Form.Item>    
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        colon={true}
                            name="bodyMass"
                            label="Масса тела (кг.)"
                            rules={[{ required: true, message: 'Введите массу тела' }]}
                        >
                            <Input placeholder="Масса тела" onChange={onCanculate} suffix="кг" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="waistCircumference"
                            label="Окружность талии"
                            rules={[{ required: true, message: 'Введите окружность талии' }]}
                        >
                            <Input placeholder="Окружность талии" onChange={onCanculate} suffix="см" />
                        </Form.Item>    
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="hipCircumference"
                            label="Окружность бедер"
                            rules={[{ required: true, message: 'Введите окружность бедер' }]}
                        >
                            <Input placeholder="Окружность бедер" onChange={onCanculate} suffix="см" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="waistHipRatio"
                            label="Соотношение окружность талии/окружность бедер "
                            rules={[{ required: true, message: 'Введите соотношение окружность талии/окружность бедер' }]}
                        >
                            <Input placeholder="Соотношение окружность талии/окружность бедер" disabled   />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="imt"
                            label="Индекс массы тела "
                            rules={[{ required: true, message: 'Введите индекс массы тела' }]}
                        >
                            <Input placeholder="Индекс массы тела" disabled />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="presenceDegreeImt"
                            label="Наличие и степень ожирения по ИМТ (расчетный)"
                            rules={[{ required: true, message: 'Введите Наличие и степень ожирения по ИМТ (расчетный)' }]}
                        >
                            <Input placeholder="Наличие и степень ожирения по ИМТ (расчетный)" disabled  />
                        </Form.Item>    
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="adiposeTissue"
                            label="Жировая ткань"
                            rules={[{ required: true, message: 'Введите жировую ткань' }]}
                        >
                            <Input placeholder="Жировая ткань" suffix="%" />
                        </Form.Item>    
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="internalFat"
                            label="Внутренняя жировая ткань"
                            rules={[{ required: true, message: 'Введите внутреннюю жировую ткань' }]}
                        >
                            <Input placeholder="Внутренняя жировая ткань" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="muscleMass"
                            label="Масса мышц"
                            rules={[{ required: true, message: 'Введите массу мышц' }]}
                        >
                            <Input placeholder="Масса мышц" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="bodyType"
                            label="Тип телосложения"
                            rules={[{ required: true, message: 'Введите тип телосложения' }]}
                        >
                            <Input placeholder="Тип телосложения" />
                        </Form.Item>    
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="bone"
                            label="Костная ткань"
                            rules={[{ required: true, message: 'Введите костную ткань' }]}
                        >
                            <Input placeholder="Костная ткань" />
                        </Form.Item>    
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="exchangeRate"
                            label="Скорость обмена"
                            rules={[{ required: true, message: 'Введите скорость обмена' }]}
                        >
                            <Input placeholder="Скорость обмена" />
                        </Form.Item>    
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="metabolicAge"
                            label="Метаболический возраст"
                            rules={[{ required: true, message: 'Введите метаболический возраст' }]}
                        >
                            <Input placeholder="Метаболический возраст" />
                        </Form.Item>    
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="waterInBody"
                            label="% воды в организме"
                            rules={[{ required: true, message: 'Введите % воды в организме' }]}
                        >
                            <Input placeholder="% воды в организме" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            >
                            <Button type="primary" onClick={backClick} htmlType="submit">Предыдущий</Button>
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
                            <Button type="primary" onClick={nextClick}  htmlType="submit">Следующий</Button>
                        </Form.Item>
                    </Col>
                    </Row>

                </Form>













                
                
                    
        </>
    );
    }
    export default Tab5;