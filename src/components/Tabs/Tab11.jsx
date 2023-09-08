import { Col, Form, Input, Row, Typography } from "antd";

const Tab11 = () => {
    const [form] = Form.useForm();
    const changeValue = () => {
        console.log("changeValue");
    }
    const onFinish = (values) => {
        console.log("onFinish");
    }
    
    return (
        <>
            <Typography.Title level={5} >11. Расчетные показатели:</Typography.Title>
            <Form
                size="default"
                layout="vertical"
                onFinish={onFinish}
                form={form}
                onValuesChange={changeValue}

            >
                <Row gutter={24}>
                    <Col span={24}><Typography.Title level={5}>Индекс адаптационного потенциала ССС Р.М. Баевского расчетный</Typography.Title></Col>
                    <Col span={12}>
                        <Form.Item label="Группа риска"><Input/></Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Факторы риска"><Input/></Form.Item>
                    </Col>
                </Row>

            </Form>

        </>
    );
    }
export default Tab11;