import { Button, Col, DatePicker, Form, Input, Radio, Row, Select, Table } from "antd"
import Typography from "antd/es/typography/Typography"
import { useState } from "react";
import { api } from "../../utils/api";
import moment from "moment";

const Create = ()=> {
    const [form] = Form.useForm();
    
    const dateFormat = 'DD-MM-YYYY';
    const [itemAge, setItemAge] = useState(null);
    const CanculeAge = (date) => {
        
        if (!date) return null;
        const birthDate = new Date(date);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
        setItemAge(age);
       
    }
    const  onFinish = (values) => {
        let body = {
            
                name: values.name,
                surname: values.surname,
                middlename: values.middlename,
                birthDate: moment(values.birthDate).format("YYYY-MM-DD"),
                age: itemAge,
                phone: values.phone,
                ambul_number: values.ambul_number,
                gender:values.gender,
                address: values.address,
            

        }
        console.log('====================================');
        console.log(body, "body");
        console.log('====================================');
        api
            .post("/patient/create", body)
            .then((res) => {
                console.log(res, "res");
            }
            )

        };
  return (
    <>
    <Typography>
            <h3>Для создания документа необходимо сначала добавить клиента</h3>
          </Typography>
          <Typography>
            <h5>Создать клиента</h5>
          </Typography>
      <Row gutter={24}>
        <Col span={24}>
            <Form 
            name="basic" 
            layout="horizontal" 
            size="large" 
            onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Row gutter={24}>
                        <Col span={12}>
                        <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Пожалуйста введите имя' }]}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            
                            name="surname"
                            rules={[{ required: true, message: 'Пожалуйста введите фамилию' }]}
                        >
                            <Input placeholder="Фамилия" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            
                            name="middlename"
                            rules={[{ required: true, message: 'Пожалуйста введите отчество' }]}
                        >
                            <Input placeholder="Отчество" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            
                            name="birthDate"
                            rules={[{ required: true, message: 'Пожалуйста введите дату рождения' }]}
                        >
                            <DatePicker onChange={(e)=>CanculeAge(e)} format={dateFormat} style={{ width: '100%' }}  placeholder="Дата рождения" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            disabled
                            label=""
                            name="age"
                            rules={[{  message: 'Пожалуйста введите дату рождения' }]}
                        >
                            <Input disabled initialValues={itemAge} />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label=""
                            name="phone"
                            rules={[{ required: true, message: 'Пожалуйста введите номер телефона' }]}
                        >
                            <Input placeholder="Номер телефона" />
                        </Form.Item>    
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label=""
                            name="ambul_number"
                            rules={[{ required: true, message: 'Пожалуйста введите № амбул. карты' }]}
                        >
                            <Input placeholder="№ амбул. карты" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item
                            label="Пол"
                            name="gender"
                            >
                                <Radio.Group>
                                    <Radio value="1"> Женщина </Radio>
                                    <Radio value="0"> Мужской </Radio>
                                </Radio.Group>
                        </Form.Item>    
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            label=""
                            name="address"
                            rules={[{ required: true, message: 'Пожалуйста введите адрес' }]}
                        >
                            <Input placeholder="Адрес" />
                        </Form.Item>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Form.Item >
          <Button htmlType="submit" type="primary">
          Добавить клиента
          </Button>
          <Button htmlType="button" type="primary" style={{ margin: '0 8px' }} >
          Добавить клиента и документ
          </Button>
        </Form.Item>
            </Form>
        </Col>
      </Row>
    </>
  )
}
export default Create