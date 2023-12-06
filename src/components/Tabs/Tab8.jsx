import { Button, Col, Form, Input, Row, Select, Typography } from "antd"
import { useEffect } from "react"
import {api} from "../../utils/api"
import { useParams } from "react-router-dom"

const Tab8  = ({patient,onChanges,info,setInfo ,info6}) =>{
    const params = useParams()
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldValue('pulseRate',info6?.chcc);
    }, [info6])
    useEffect(() => {
        form.setFieldsValue(info)
        const item = ((info?.rufierDixontest_p2 -70) + (info?.rufierDixontest_p3 - info?.rufierDixontest_p1))/10;
        form.setFieldValue('rufierDixon',item)
    }, [info])
    const nextClick = () => {
        onChanges('9');
    }
    const backClick = () => {
        onChanges('7');
    }
    const onValueChanges = (e) => {
        if (e.rufierDixontest_p1 || e.rufierDixontest_p2 || e.rufierDixontest_p3) {
        let p1 = form.getFieldValue('rufierDixontest_p1')
        let  p2 = form.getFieldValue('rufierDixontest_p2')
        let   p3 = form.getFieldValue('rufierDixontest_p3')
        let item = ((p2 -70) + (p3 - p1))/10;
        form.setFieldValue('rufierDixon',item)
        }  
        setInfo({ ...info, ...e });
    };
    const onFinish = (e) => {

        let body = {
            ...e,
            tab:8,
            nurse_doc_id: params.id,
        }
        api.post('doc/create',body).then(res => {
            console.log(res);
        }
        )

    }
    return (<>
        <Typography.Title level={5}>8. Определение толерантности к физической нагрузке</Typography.Title>
        <Form
            onValuesChange={onValueChanges}
            name="tab8"
            layout="vertical"
            form={form}
            onFinish={onFinish}
            
        >
            <Row gutter={24}>
                <Col xs={24} md={12} xl={12} ><Form.Item name="tshx" label="ТШХ" ><Input  /></Form.Item></Col>
                <Col xs={24} md={12} xl={12} ><Form.Item name="borgscale" label='Шкала Борга'><Input /></Form.Item></Col>
                <Col xs={24} md={12} xl={12}><Form.Item name="rufierDixontest_p1" label="P1" ><Input/></Form.Item></Col>
                <Col xs={24} md={12} xl={12} ><Form.Item name="rufierDixontest_p2" label="P2" ><Input/></Form.Item></Col>
                <Col xs={24} md={12} xl={12} ><Form.Item name="rufierDixontest_p3" label="P3" ><Input/></Form.Item></Col>
                <Col xs={24} md={12} xl={12} ><Form.Item name="rufierDixon" label="Проба Руфье-Диксона" ><Input disabled /></Form.Item></Col>
                <Col xs={24} md={12} xl={12} ><Form.Item name="bem_sample" label="Для тренированных больных – ВЭМ проба" ><Input/></Form.Item></Col>
                <Col xs={24} md={12} xl={12} ><Typography.Title level={5} >Массовый тест определения физического состояния Е.А.Пирогова и соавт., 1984</Typography.Title></Col>
                <Col xs={24} md={12} xl={12} >
                    <Form.Item   label="Характер трудовой деятельности" name="natureWork" >
                        <Select>
                            <Option value="1" >Умственный труд</Option>
                            <Option value="3" >Физический труд</Option>
                        </Select>  
                    </Form.Item></Col>
                <Col xs={24} md={12} xl={12} >
                    <Form.Item   label="Занятие физическими упражнениями" name="physicalExercise" >
                        <Select>
                            <Option value="10" >≥3 раз в неделю в течение ≥30 мин</Option>
                            <Option value="5" > 3 раз  в неделю в течение ≥30 мин</Option>
                            <Option value="0" >Не занимается</Option>
                        </Select>
                    </Form.Item></Col>
                
                <Col xs={24} md={12} xl={12} >
                    <Form.Item label="Частота пульса, уд/мин"  name="pulseRate"  >
                        <Input  disabled />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12} xl={12} >
                    <Form.Item label="Жалобы" name="complaints"  >
                        <Select>
                            <Option value="0" >Есть</Option>
                            <Option value="5" >Нет</Option>
                        </Select>
                    </Form.Item></Col>
                <Col xs={24} md={8} xl={8} >
                    <Form.Item>
                        <Button style={{width:'100%'}} type="primary" onClick={backClick} >Предыдущий</Button>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8} xl={8}>
                    <Form.Item>
                        <Button style={{width:'100%'}} type="primary" htmlType="submit">Сохранить</Button>
                    </Form.Item>
                </Col>
                <Col xs={24} md={8} xl={8}>
                    <Form.Item>
                        <Button style={{width:'100%'}} type="primary" onClick={nextClick}  >Следующий</Button>
                    </Form.Item>
                </Col>
            </Row>
            
        </Form>
    </>)
}
export default  Tab8 