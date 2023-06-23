import { Button, Col, Form, Input, Row, Select, Typography } from "antd"
import { useEffect } from "react"

const Tab8  = ({patient,onChanges,info,setInfo ,info6}) =>{
    const [form] = Form.useForm()
    useEffect(() => {
        console.log(info6,"info6");
        form.setFieldValue('pulseRate',info6?.chcc);
    }, [info6])
    const nextClick = () => {
        onChanges('9');
    }
    const backClick = () => {
        onChanges('7');
    }
    const onValueChanges = (e) => {
        setInfo({ ...info, ...e });
    };
    return (<>
        <Typography.Title level={5}>8. Определение толерантности к физической нагрузке</Typography.Title>
        <Form
            onValuesChange={onValueChanges}
            name="tab8"
            layout="vertical"
            form={form}
            
        >
            <Row gutter={24}>
                <Col span={12} ><Form.Item name="tshx" label="ТШХ" ><Input  /></Form.Item></Col>
                <Col span={12} ><Form.Item name="borgscale" label='Шкала Борга'><Input /></Form.Item></Col>
                <Col span={8} ><Form.Item name="rufierDixontest_p1" label="P1" ><Input/></Form.Item></Col>
                <Col span={8} ><Form.Item name="rufierDixontest_p2" label="P2" ><Input/></Form.Item></Col>
                <Col span={8} ><Form.Item name="rufierDixontest_p3" label="P3" ><Input/></Form.Item></Col>
                <Col span={12} ><Form.Item name="bem_sample" label="Для тренированных больных – ВЭМ проба" ><Input/></Form.Item></Col>
                <Col span={12}><Form.Item name="levelPhysicalFitness" label="Ступень физической подготовленности расчетная'" ><Input/></Form.Item></Col>
                <Col span={24} ><Typography.Title level={5} >Массовый тест определения физического состояния</Typography.Title></Col>
                <Col span={12} >
                    <Form.Item   label="Характер трудовой деятельности" name="natureWork" >
                        <Select>
                            <Option value="1" >Умственный труд</Option>
                            <Option value="3" >Физический труд</Option>
                        </Select>  
                    </Form.Item></Col>
                <Col span={12} >
                    <Form.Item   label="Занятие физическими упражнениями" name="physicalExercise" >
                        <Select>
                            <Option value="10" >≥3 раз в неделю в течение ≥30 мин</Option>
                            <Option value="5" > 3 раз  в неделю в течение ≥30 мин</Option>
                            <Option value="0" >Не занимается</Option>
                        </Select>
                    </Form.Item></Col>
                
                <Col span={8} >
                    <Form.Item label="Частота пульса, уд/мин"  name="pulseRate"  >
                        <Input  disabled />
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Жалобы" name="complaints"  >
                        <Select>
                            <Option value="0" >При наличии</Option>
                            <Option value="5" >При отсутствии</Option>
                        </Select>
                    </Form.Item></Col>
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
    </>)
}
export default  Tab8 