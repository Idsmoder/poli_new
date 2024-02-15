import { Button, Col, Form, Input, Radio, Row, Slider, Typography } from "antd";
import { useEffect, useState } from "react";
import {api} from "../../utils/api"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const Tab10 = ({patient,onChanges,info,setInfo}) => {
    const [stre,setStre] = useState(0);
    const [gradee,setGrade] = useState(0);
    const [form] = Form.useForm()
    const params = useParams();
    useEffect(() => {
        form.setFieldsValue(info);
    }, [info])

    useEffect(() => {
        let stress1 = form.getFieldValue('stress1');        
        let stress2 = form.getFieldValue('stress2');
        let stress3 = form.getFieldValue('stress3');
        let stress4 = form.getFieldValue('stress4');
        let stress5 = form.getFieldValue('stress5');
        let stress6 = form.getFieldValue('stress6');
        let stress7 = form.getFieldValue('stress7');
        let stress = ((+stress1 + +stress2 + +stress3 + +stress4 + +stress5 + +stress6 + +stress7)/7).toFixed(2);
        form.setFieldValue('stressLevel',stress);
        let mobility = form.getFieldValue('mobility');
        let personalCare = form.getFieldValue('personalCare');
        let dailyActivities = form.getFieldValue('dailyActivities');
        let painDiscomfort = form.getFieldValue('painDiscomfort');
        let anxietyDepression = form.getFieldValue('anxietyDepression');
        let item = ((+mobility + +personalCare + +dailyActivities + +painDiscomfort + +anxietyDepression)).toFixed(2);
        form.setFieldValue('totalGrade',item);
        setStre(stress);
        setGrade(item);

        }, [form.getFieldsValue()])
        useEffect(() => {
            setInfo({...info, stressLevel:stre, totalGrade:gradee});
        }, [stre,gradee])
    const changeValue = (e) => {
        console.log(e,"e");
        setInfo({...info, ...e});
    }
    
    const backClick = () => {
        onChanges('9');
    }
    const onFinish = (values) => {
        values.tab = 10;
        values.nurse_doc_id = params.id;

        api.post('doc/create',values)
        .then(res=>{
            if (res?.status==200) {

                Swal.mixin({
                    toast:true,
                    position: 'top-end',
                    timerProgressBar:true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                    
                }).fire({
                    icon: 'success',
                    title: 'Сохранено',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <>
            <Typography.Title level={4}>10. Вопросник на определение уровня стресса (Reeder L.)</Typography.Title>
            <Form
                name="tab10"
                layout="vertical"
                size={'default'}
                form={form}
                onFinish={onFinish}
                onValuesChange={changeValue}
            >
                <Typography.Title level={5}>Уровень стресса</Typography.Title>
                <Row >
                    <Col span={24} >
                        <Form.Item label="Пожалуй, я человек нервный" name="stress1">
                            <Radio.Group>
                                <Radio value='3' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='1' >Скорее не согласен</Radio>
                                <Radio value='0' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Я очень беспокоюсь о своей работе" name="stress2">
                            <Radio.Group>
                            <Radio value='3' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='1' >Скорее не согласен</Radio>
                                <Radio value='0' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Я часто ощущаю нервное напряжение" name="stress3">
                            <Radio.Group>
                            <Radio value='3' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='1' >Скорее не согласен</Radio>
                                <Radio value='0' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Моя повседневная деятельность вызывает большое напряжение" name="stress4">
                            <Radio.Group>
                            <Radio value='3' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='1' >Скорее не согласен</Radio>
                                <Radio value='0' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Общаясь с людьми, я часто ощущаю нервное напряжение" name="stress5">
                            <Radio.Group>
                            <Radio value='3' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='1' >Скорее не согласен</Radio>
                                <Radio value='0' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="К концу дня я совершенно истощен физически и психически" name="stress6">
                            <Radio.Group>
                            <Radio value='3' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='1' >Скорее не согласен</Radio>
                                <Radio value='0' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="В моей семье часто возникают напряженные отношения" name="stress7">
                            <Radio.Group>
                            <Radio value='3' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='1' >Скорее не согласен</Radio>
                                <Radio value='0' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item  label="Уровень стресса" name="stressLevel">
                            <Input disabled  />
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Typography.Title level={5}>ОПРОСНИК ПО ЗДОРОВЬЮ ВЕРСИЯ НА РУССКОМ ЯЗЫКЕ ДЛЯ РОССИИ (RUSSIAN VERSION FOR RUSSIA) EQ–-5D ПРОФИЛЬ ЗДОРОВЬЯ И ИНДЕКС НА ОСНОВЕ ВИЗУАЛЬНОЙ АНАЛОГОВОЙ ШКАЛЫ EQ–VAS</Typography.Title>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="А. ПОДВИЖНОСТЬ" name="mobility" >
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю трудностей при ходьбе </Radio>
                                <Radio value='2'>Я испытываю некоторые трудности при ходьбе</Radio>
                                <Radio value='3'>Я прикован (-а) к постели</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Б. УХОД ЗА СОБОЙ" name="personalCare">
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю трудностей при уходе за собой</Radio>
                                <Radio value='2'>Я испытываю некоторые трудности с мытьем или одеванием</Radio>
                                <Radio value='3'>Я не в состоянии сам (-а) мыться или одеваться</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="ПОВСЕДНЕВНАЯ ДЕЯТЕЛЬНОСТЬ" name="dailyActivities">
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю трудностей в моей привычной повседневной деятельности</Radio>
                                <Radio value='2'>Я испытываю некоторые трудности в моей привычной повседневной деятельности</Radio>
                                <Radio value='3'>Я не в состоянии заниматься своей привычной повседневной деятельностью</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Г. БОЛЬ/ДИСКОМФОРТ" name="painDiscomfort" >
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю боли или дискомфорта</Radio>
                                <Radio value='2'>Я испытываю умеренную боль или дискомфорт</Radio>
                                <Radio value='3'>Я испытываю крайне сильную боль или дискомфорт</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Д. ТРЕВОГА/ДЕПРЕССИЯ" name="anxietyDepression" >
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю тревоги или депрессии</Radio>
                                <Radio value='2'>Я испытываю умеренную тревогу или депрессию</Radio>
                                <Radio value='3'>Я испытываю крайне сильную тревогу или депрессию</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="" name="totalGrade" >
                            <Input disabled />
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Наихудшее состояние здоровья, которое можно себе представить Мы хотели бы узнать, как Вы оцениваете состояние своего здоровья на СЕГОДНЯШНИЙ ДЕНЬ. 
∙ Перед Вами шкала от 0 до 100. 
∙ 100 означает наилучшее состояние здоровья, которое вы можете представить. 0 – наихудшее состояние здоровья, которое вы можете представить. 
∙ Поставьте крестик “X” на шкале в том месте, которое, по Вашему мнению, соответствует состоянию Вашего здоровья СЕГОДНЯ. 
∙ Теперь впишите отмеченное
" name="eqvas" >
                            <Slider initialValues={0} 
                                marks={{
                                    0: '0',
                                20: '20',
                                40: '40',
                                60: '60',
                                80: '80',
                                100: '100',
                                }}
                            />
                        </Form.Item>
                    </Col>
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


                    

                </Row>
                </Form>
    
        </>
    )
   
    }
    export default Tab10;