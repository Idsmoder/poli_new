import {Button, Col, Form, Input, Modal, Row, Table} from "antd";
import {api} from "../../utils/api.js";
import {useEffect} from "react";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import InputMask from "react-input-mask";

const  AddModal = ({visible, setVisible,editItem}) => {
    const [form] = Form.useForm();

    const  AddUsers = () => {
       const  values = form.getFieldsValue();
       const phone = values.phone.replace(/\+|\(|\)|\s|-/g, "");

       if (editItem){
           const data = {
                user_id:editItem?.key,
               name: values?.name,
               email: values?.email,
               password: values?.password,
               phone: phone
           }
           api.post('/user/update', data).then((res) => {
               if (res.status === 200) {
                   setVisible(false);
               }
           }).catch((err) => {
               Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err?.response?.data?.message,
                    })
                  })


       }else{
           const data = {
               name: values?.name,
               email: values?.email,
               password: values?.password,
               phone: phone
           }
           api.post('/user/create', data).then((res) => {
               if (res.status === 200) {
                   setVisible(false);
               }
           });
       }


    }
    useEffect(() => {
        if(editItem){
            form.setFieldsValue({
                name:editItem?.name,
                email:editItem?.email,
                phone:editItem?.phone
            })
        }
    }, [editItem]);

    return(
        <Modal
            open={visible}
            onCancel={() => setVisible(false)}
            title={'Добавить пользователя'}
            footer={
                [
                    <Button onClick={()=>setVisible(false)}>Отмена</Button>,
                    <Button type={"primary"} onClick={AddUsers}>Добавить</Button>
                ]
            }

        >
            <Row>
                <Col span={20}>
                    <Form
                        form={form}
                        layout={'vertical'}
                    >
                        <Form.Item
                            name={'name'}
                            label={'ФИО'}
                            rules={[{ required: true, message: 'Пожалуйста, введите ФИО!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={'email'}
                            label={'Email'}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name={'phone'}
                            label={'Телефон'}
                            rules={[{ required: true, message: 'Пожалуйста, введите свой номер телефона!' }]}
                        >
                            <InputMask mask="+\9\98 (99) 999-99-99" maskChar=" ">
                                {(inputProps) => <Input {...inputProps} type="tel" placeholder="Номер телефон" />}
                            </InputMask>
                        </Form.Item>
                        <Form.Item
                            name={'password'}
                            label={'Пароль'}
                            rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
                        >
                            <Input/>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </Modal>

    )
}
export default AddModal;