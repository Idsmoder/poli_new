import { Button, Col, Form, Input, Radio, Row, Slider, Typography } from "antd";

const Tab10 = ({patient,onChanges,info,setInfo}) => {
    const changeValue = (e) => {
        setInfo({...info, ...e});
    }
    const nextClick = () => {
        onChanges('11');
    }
    const backClick = () => {
        onChanges('9');
    }
    return (
        <>
            <Typography.Title level={4}>10. Оценка качеств жизни и уровня стресса</Typography.Title>
            <Form
                name="tab10"
                layout="vertical"
                size={'default'}
            >
                <Typography.Title level={5}>Уровень стресса</Typography.Title>
                <Row >
                    <Col span={24} >
                        <Form.Item label="Пожалуй, я человек нервный">
                            <Radio.Group>
                                <Radio value='1' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='3' >Скорее не согласен</Radio>
                                <Radio value='4' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Я очень беспокоюсь о своей работе">
                            <Radio.Group>
                                <Radio value='1' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='3' >Скорее не согласен</Radio>
                                <Radio value='4' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Я часто ощущаю нервное напряжение">
                            <Radio.Group>
                                <Radio value='1' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='3' >Скорее не согласен</Radio>
                                <Radio value='4' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Моя повседневная деятельность вызывает большое напряжение">
                            <Radio.Group>
                                <Radio value='1' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='3' >Скорее не согласен</Radio>
                                <Radio value='4' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Общаясь с людьми, я часто ощущаю нервное напряжение">
                            <Radio.Group>
                                <Radio value='1' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='3' >Скорее не согласен</Radio>
                                <Radio value='4' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="К концу дня я совершенно истощен физически и психически">
                            <Radio.Group>
                                <Radio value='1' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='3' >Скорее не согласен</Radio>
                                <Radio value='4' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="В моей семье часто возникают напряженные отношения">
                            <Radio.Group>
                                <Radio value='1' >Да, согласен</Radio>
                                <Radio value='2'>Скорее согласен</Radio>
                                <Radio value='3' >Скорее не согласен</Radio>
                                <Radio value='4' >Нет, не согласен</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item  label="Уровень стресса">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Typography.Title level={5}>ОПРОСНИК ПО ЗДОРОВЬЮ ВЕРСИЯ НА РУССКОМ ЯЗЫКЕ ДЛЯ РОССИИ (RUSSIAN VERSION FOR RUSSIA) EQ–-5D ПРОФИЛЬ ЗДОРОВЬЯ И ИНДЕКС НА ОСНОВЕ ВИЗУАЛЬНОЙ АНАЛОГОВОЙ ШКАЛЫ EQ–VAS</Typography.Title>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="А. ПОДВИЖНОСТЬ">
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю трудностей при ходьбе </Radio>
                                <Radio value='2'>Я испытываю некоторые трудности при ходьбе</Radio>
                                <Radio value='3'>Я прикован (-а) к постели</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Б. УХОД ЗА СОБОЙ">
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю трудностей при уходе за собой</Radio>
                                <Radio value='2'>Я испытываю некоторые трудности с мытьем или одеванием</Radio>
                                <Radio value='3'>Я не в состоянии сам (-а) мыться или одеваться</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="ПОВСЕДНЕВНАЯ ДЕЯТЕЛЬНОСТЬ">
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю трудностей в моей привычной повседневной деятельности</Radio>
                                <Radio value='2'>Я испытываю некоторые трудности в моей привычной повседневной деятельности</Radio>
                                <Radio value='3'>Я не в состоянии заниматься своей привычной повседневной деятельностью</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Г. БОЛЬ/ДИСКОМФОРТ">
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю боли или дискомфорта</Radio>
                                <Radio value='2'>Я испытываю умеренную боль или дискомфорт</Radio>
                                <Radio value='3'>Я испытываю крайне сильную боль или дискомфорт</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Д. ТРЕВОГА/ДЕПРЕССИЯ">
                            <Radio.Group>
                                <Radio value='1' >Я не испытываю тревоги или депрессии</Radio>
                                <Radio value='2'>Я испытываю умеренную тревогу или депрессию</Radio>
                                <Radio value='3'>Я испытываю крайне сильную тревогу или депрессию</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item label="Индекс на основе визуальной аналоговой шкалы EQ–VAS">
                            <Slider defaultValue={0} 
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
    
        </>
    )
   
    }
    export default Tab10;