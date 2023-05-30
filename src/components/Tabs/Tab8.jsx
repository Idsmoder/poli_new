import { Button, Col, Form, Input, Row, Select, Typography } from "antd"

const Tab8  = ({patient,onChanges,info,setInfo}) =>{
    const [form] = Form.useForm()
    const nextClick = () => {
        onChanges('9');
    }
    const backClick = () => {
        onChanges('7');
    }
    return (<>
        <Typography.Title level={5}>8. Определение толерантности к физической нагрузке</Typography.Title>
        <Form
            onValuesChange={onChanges}
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
                <Col span={12} ><Form.Item   label="Характер трудовой деятельности" name="natureWork" ><Select><Option>test</Option></Select>  </Form.Item></Col>
                <Col span={12} ><Form.Item   label="Массовый тест определения физического состояния " name="massTest" ><Input/></Form.Item></Col>
                <Col span={8} ><Form.Item label="Занятие физическими упражнениями" name="physicalExercise" ><Select><Option>Test</Option></Select></Form.Item></Col>
                <Col span={8} ><Form.Item label="Частота пульса, уд/мин"  name="pulseRate" ><Input/></Form.Item></Col>
                <Col span={8} ><Form.Item label="Жалобы" name="complaints"  ><Select><Option>TYest</Option></Select></Form.Item></Col>
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