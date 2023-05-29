import { Button, Checkbox, Col, Form, Input, Radio, Row, Typography } from "antd"

const Tab9 = ({patient,onChanges,info,setInfo}) => {
    const [form] = Form.useForm()


    
    const changeValue = (e) => {
        setInfo({...info, ...e});
    }
    const nextClick = () => {
        onChanges('10');
    }
    const backClick = () => {
        onChanges('8');
    }

    return (
        <>
            <Typography.Title level={5}>9. Инструментальные методы исследования:</Typography.Title>
            <Form
                onValuesChange={changeValue}
                name="tab9"
                layout="vertical"
            >
                <Row gutter={24}>
                    <Col span={12} ><Form.Item label="Плетизмография (Ангиоскан-1)" name="ri" ><Input/></Form.Item></Col>
                    <Col span={12} ><Form.Item label="Индекс ригидности (скорость пульсовой волны) SI" name="si"  ><Input/></Form.Item></Col>
                    <Col span={12} ><Form.Item label="Биологический возраст сосудов, VA" name="va"  ><Input/></Form.Item></Col>
                    <Col span={4} ><Form.Item label="A" name="pvA" ><Checkbox/></Form.Item></Col>
                    <Col span={4} ><Form.Item label="B" name="pvB" ><Checkbox/></Form.Item></Col>
                    <Col span={4} ><Form.Item label="C" name="pvC" ><Checkbox/></Form.Item></Col>
                    <Col span={24} ><Typography.Title level={5} >Головокружения</Typography.Title></Col>
                    <Col span={12} >
                        <Form.Item
                            
                        >
                            <Radio.Group>
                                <Radio value="1" >синусовый</Radio>
                                <Radio value="2" >несинусовый</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item>
                            <Radio.Group>
                                <Radio value="1" >правильный</Radio>
                                <Radio value="2" >неправильный</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item
                            label="ЧСС"
                            name="heartRate"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item
                            label="Заключение"
                            name="conclusion"
                        >
                            <Input/>
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
    export default Tab9;