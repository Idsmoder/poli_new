import { Button, Col, DatePicker, Form, Input, Radio, Row, Select, Table } from "antd"
import Typography from "antd/es/typography/Typography"
import { useState } from "react";
import { api } from "../../utils/api";
import moment from "moment";
import { toast } from "react-toastify";

const Create = ()=> {
    const [form] = Form.useForm();
    
    const dateFormat = 'DD.MM.YYYY';
    const [itemAge, setItemAge] = useState(null);
    // const CanculeAge = (date) => {
        
    //     if (!date) return null;
    //     const birthDate = new Date(date);
    //     const today = new Date();
    //     let age = today.getFullYear() - birthDate.getFullYear();
    //     const m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
    //     setItemAge(age);
    //     form.setFieldValue('age',age);
       
    // }
    const  onFinish = (values) => {
        let body = {
                name: values.name,
                surname: values.surname,
                middlename: values.middlename,
                birthDate: values.birthDate,
                age: values.age,
                phone: values.phone,
                ambul_number: values.ambul_number,
                gender:values.gender,
                address: values.address,
        }
        api
            .post("/patient/create", body)
            .then((res) => {
                if (res.status=='success') {
                    toast.success("Успешно", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                      });
                }else{
                    console.log("error");
                    toast.error("Error",{
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                }
            }
            )
        };
        const onValuChange = (e) => {
            if (e.birthDate) {
                const today = new Date();
                const date = new Date(e.birthDate);
                const age = today.getFullYear() - date.getFullYear()
                form.setFieldValue('age',age);

            }
        }
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
            form={form}
            onValuesChange={onValuChange}
            >
                <Row gutter={24}>
                    <Col span={24}>
                        <Row gutter={24}>
                        <Col span={24}>
                        <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Пожалуйста введите имя' }]}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
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
                        >
                            <Input placeholder="Отчество" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            
                            name="birthDate"
                            rules={[{ required: true, message: 'Пожалуйста введите дату рождения' }]}
                        >
                            <DatePicker  format={dateFormat} style={{ width: '100%' }}  placeholder="Дата рождения" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            
                            label=""
                            name="age"
                        >
                            <Input disabled />
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
                                    <Radio value="0"> Женщина </Radio>
                                    <Radio value="1"> Мужской </Radio>
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