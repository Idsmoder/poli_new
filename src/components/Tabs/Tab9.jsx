import { Button, Checkbox, Col, Form, Input, Radio, Row, Typography } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"
import { api } from "../../utils/api"
import { useParams } from "react-router-dom"

const Tab9 = ({patient,onChanges,info,setInfo}) => {
    const [form] = Form.useForm()
    const [pvA,setPvA] = useState(false)
    const [pvB,setPvB] = useState(false)
    const [pvC ,setPvC] = useState(false)
    const [ecgRhythm,setEcgRhythm] = useState(false)
    const params = useParams()


    useEffect(() => {
        form.setFieldsValue(info)
        setPvA(info?.pvA);
        setPvB(info?.pvB);
        setPvC(info?.pvC);
        setEcgRhythm(info?.ecgRhythm==2 ? true : false);
    }, [info])
    const changeValue = (e) => {
        if (e.ecgRhythm) {
            if (e.ecgRhythm==2) {

                setEcgRhythm(true)
            }else{
                setEcgRhythm(false)
            }
        }
        setInfo({...info, ...e});
    }
    const nextClick = () => {
        onChanges('10');
    }
    const backClick = () => {
        onChanges('8');
    }
    const onChechChange = (e) =>{
      const   names = e.target.id
        if (names=='tab9_pvA') {
            setInfo({...info,pvA:e.target.checked ? 1 : 0})
        }
        if (names=='tab9_pvB') {
            setInfo({...info,pvB:e.target.checked ? 1 : 0})
            setPvB(e.target.checked);
        }
        if (names=='tab9_pvC') {
            setInfo({...info,pvC:e.target.checked ? 1 : 0})
            setPvC(e.target.checked);
        }
    }

    const onFinish = (values) => {
        const  body = {...info,...values}
        body.pvA = pvA ? '1' : '0';
        body.pvB = pvB ? '1' : '0';
        body.pvC = pvC ? '1' : '0';
        body.nurse_doc_id = params.id;
        body.tab = 9; 
        api.post('doc/create',body).then(res=>console.log(res))        
    }
    return (
        <>
            <Typography.Title level={5}>9. Инструментальные методы исследования:</Typography.Title>
            <Form
                onValuesChange={changeValue}
                name="tab9"
                layout="vertical"
                form={form}
                initialValues={info}
                scrollToFirstError
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={24}><Typography.Title  level={5}>Плетизмография (Ангиоскан-1)</Typography.Title></Col>
                    <Col span={12} ><Form.Item label="Индекс отражения RI" name="ri" ><Input/></Form.Item></Col>
                    <Col span={12} ><Form.Item label="Индекс ригидности (скорость пульсовой волны) SI" name="si"  ><Input/></Form.Item></Col>
                    <Col span={12} ><Form.Item label="Биологический возраст сосудов, VA" name="va"  ><Input/></Form.Item></Col>
                    <Col span={24}><Typography.Title level={5}>Тип пульсовой вольны</Typography.Title></Col>
                    <Col span={4} ><Form.Item label="A" name="pvA"  ><Checkbox onChange={onChechChange} checked={pvA==1?true:false} /></Form.Item></Col>
                    <Col span={4} ><Form.Item label="B" name="pvB" ><Checkbox onChange={onChechChange} checked={pvB==1?true:false} /></Form.Item></Col>
                    <Col span={4} ><Form.Item label="C" name="pvC" ><Checkbox onChange={onChechChange} checked={pvC==1?true:false} /></Form.Item></Col>
                    <Col span={24} ><Typography.Title level={5} >ЭКГ: Ритм</Typography.Title></Col>
                    <Col span={12} >
                        <Form.Item name="ecgRhythm" >
                            <Radio.Group>
                                <Radio value="1" >синусовый</Radio>
                                <Radio value="2" >несинусовый</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item name="ecgCorrect" >
                            <Radio.Group>
                                <Radio value="1" >правильный</Radio>
                                <Radio value="2" >неправильный</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    {ecgRhythm ? <Col span={12} >
                        <Form.Item name="ecgRhythmNonSin" >
                            <Radio.Group>
                                <Radio value="1" >фибрилляция предсердий</Radio>
                                <Radio value="2" >эктопический ритм</Radio>
                            </Radio.Group>
                        </Form.Item>

                    </Col> : null}
                    <Col span={12} >
                        <Form.Item
                            label="ЧСС"
                            name="heartRate"
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item
                            label="Заключение"
                            name="conclusion"
                        >
                            <TextArea/>
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
    );
    }
    export default Tab9;