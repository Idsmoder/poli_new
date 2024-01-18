import { Button, Card, Col, DatePicker, Form, Input, Radio, Row, Select, Table } from "antd"
import Typography from "antd/es/typography/Typography"
import { useState } from "react";
import { api } from "../../utils/api";
import moment from "moment";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";


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
    const phone = values.phone.replace(/\+|\(|\)|\s|-/g, "");

        let body = {
                name: values.name,
                surname: values.surname,
                middlename: values.middlename,
                birthDate: values.birthDate,
                age: values.age,
                phone: phone,
                ambul_number: values.ambul_number,
                gender:values.gender,
                address: values.address,
        }
        
        api
            .post("/patient/create", body)
            .then((res) => {
                if (res.data.status=='success') {
                    toast.success("Успешно", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                      });
                }
                if (res.data.status=='error') {
                    const footer_button = `<a href="/doc/create/${res?.data?.data?.id}">Bemor sahifasiga o'tish</a>`;
                        Swal.fire({
                            icon: 'error',
                            title: 'Bunday bemor mavjud',
                            text: res?.data?.data?.surname + ' ' + res.data.data?.name + ' ' + res.data.data?.middlename + ' mavjud',
                            showConfirmButton: false,
                            footer: footer_button
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
    <Card  bordered={false} style={{ width: '100%', display:'flex',justifyContent:'space-between',alignItems:'center' }}>
    <Typography>
            <h3>Для создания документа необходимо сначала добавить клиента</h3>
          </Typography>
          <Typography>
            <h5>Создать клиента</h5>
          </Typography>
      <Row >
        <Col span={24}>
            <Form 
            name="basic" 
            layout="horizontal" 
            size="large" 
            onFinish={onFinish}
            form={form}
            validateTrigger="onBlur"
            onValuesChange={onValuChange}
            >
                <Row gutter={[24,8]}>
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
                            
                            rules={[{ required: true, message: 'Пожалуйста введите номер телефона',min:12 }]}
                        >
                            <InputMask mask="+\9\98 (99) 999-99-99" maskChar=" ">
                                {(inputProps) => <Input {...inputProps} type="tel" placeholder="Номер телефон" />}
                            </InputMask>
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
                    <Col span={24}>
                    <Form.Item >
                        <Button htmlType="submit" type="primary">
                            Добавить клиента
                        </Button>
                        <Button htmlType="button" type="primary" style={{ margin: '0 8px' }} >
                            Добавить клиента и документ
                        </Button>
                    </Form.Item>
                    </Col>
                </Row>
            </Col>
        </Row>

            </Form>
        </Col>
      </Row>
      </Card>
    </>
  )
}
export default Create