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
                

            </Form>

        </>
    );
    }
export default Tab11;