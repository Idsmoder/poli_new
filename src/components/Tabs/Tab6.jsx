import { Button, Checkbox, Col, Form, Input, InputNumber, Radio, Row, Typography } from "antd";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import Swal from "sweetalert2";

const Tab6 = ({patient,onChanges,info,setInfo})=>{
    const paramms = useParams();
    const [form] = Form.useForm();
    const [chdd_1, setChdd_1] = useState('');
    const [chdd_2, setChdd_2] = useState('');
    const [chdd_4, setChdd_4] = useState('');
    const [chdd_5, setChdd_5] = useState('');
    const [chdd_6, setChdd_6] = useState('');
    const [wheezing_1, setWheezing_1] = useState(false);
    const [wheezing_2, setWheezing_2] = useState('');
    const [wheezing_3, setWheezing_3] = useState('');
    const [wheezing_4, setWheezing_4] = useState('');
    const [wheezing_5, setWheezing_5] = useState('');
    const [wheezing_6, setWheezing_6] = useState('');
    const [wheezing, setWheezing] = useState(false);
    const [noise, setNoise] = useState('');
    const [noise_systolic, setNoise_systolic] = useState('');
    const [noise_diastolic, setNoise_diastolic] = useState('');
    const [noise_systolic_top, setNoise_systolic_top] = useState('');
    const [noise_systolic_aorta, setNoise_systolic_aorta] = useState('');
    const [noise_systolic_pulmonary, setNoise_systolic_pulmonary] = useState('');
    const [noise_systolic_tricuspid, setNoise_systolic_tricuspid] = useState('');
    const [noise_diastolic_top, setNoise_diastolic_top] = useState('');
    const [noise_diastolic_aorta, setNoise_diastolic_aorta] = useState('');
    const [noise_diastolic_pulmonary, setNoise_diastolic_pulmonary] = useState('');
    const [noise_diastolic_tricuspid, setNoise_diastolic_tricuspid] = useState('');

    const onChange = (e)=>{
        let names = e.target.id;
            if(names == 'tab6_chdd_1'){
                setInfo({...info,chdd_1:e.target.checked ? 1 : 0})
                setChdd_1(e.target.checked);
            }
            if(names == 'tab6_chdd_2'){
                setInfo({...info,chdd_2:e.target.checked ? 1 : 0})
                setChdd_2(e.target.checked);
            }
            if(names == 'tab6_chdd_3'){
                setInfo({...info,chdd_3:e.target.checked ? 1 : 0})
                setChdd_3(e.target.checked);
            }
            if(names == 'tab6_chdd_4'){
                setInfo({...info,chdd_4:e.target.checked ? 1 : 0})
                setChdd_4(e.target.checked);
            }
            if(names == 'tab6_chdd_5'){
                setInfo({...info,chdd_5:e.target.checked ? 1 : 0})
                setChdd_5(e.target.checked);
            }
            if(names == 'tab6_chdd_6'){
                setInfo({...info,chdd_6:e.target.checked ? 1 : 0})
                setChdd_6(e.target.checked);
            }
            if(names == 'tab6_wheezing_1'){
                setInfo({...info,wheezing_1:e.target.checked ? 1 : 0})
                setWheezing_1(e.target.checked);
            }
            if(names == 'tab6_wheezing_2'){
                setInfo({...info,wheezing_2:e.target.checked ? 1 : 0})
                setWheezing_2(e.target.checked);
            }
            if(names == 'tab6_wheezing_3'){
                setInfo({...info,wheezing_3:e.target.checked ? 1 : 0})
                setWheezing_3(e.target.checked);
            }
            if(names == 'tab6_wheezing_4'){
                setInfo({...info,wheezing_4:e.target.checked ? 1 : 0})
                setWheezing_4(e.target.checked);
            }
            if(names == 'tab6_wheezing_5'){
                setInfo({...info,wheezing_5:e.target.checked ? 1 : 0})
                setWheezing_5(e.target.checked);
            }
            if(names == 'tab6_wheezing_6'){
                setInfo({...info,wheezing_6:e.target.checked ? 1 : 0})
                setWheezing_6(e.target.checked);
            }
            if (names == 'tab6_noise_systolic') {
                setInfo({...info,noise_systolic:e.target.checked ? 1 : 0})
                setNoise_systolic(e.target.checked);
            }
            if (names == 'tab6_noise_diastolic') {
                setInfo({...info,noise_diastolic:e.target.checked ? 1 : 0})
                setNoise_diastolic(e.target.checked);
            }
            if (names == 'tab6_noise_systolic_top') {
                setInfo({...info,noise_systolic_top:e.target.checked ? 1 : 0})
                setNoise_systolic_top(e.target.checked);
            }
            if (names == 'tab6_noise_systolic_aorta') {
                setInfo({...info,noise_systolic_aorta:e.target.checked ? 1 : 0})
                setNoise_systolic_aorta(e.target.checked);
            }
            if (names == 'tab6_noise_systolic_pulmonary') {
                setInfo({...info,noise_systolic_pulmonary:e.target.checked ? 1 : 0})
                setNoise_systolic_pulmonary(e.target.checked);
            }
            if (names == 'tab6_noise_systolic_tricuspid') {
                setInfo({...info,noise_systolic_tricuspid:e.target.checked ? 1 : 0})
                setNoise_systolic_tricuspid(e.target.checked);
            }
            if (names == 'tab6_noise_diastolic_top') {
                setInfo({...info,noise_diastolic_top:e.target.checked ? 1 : 0})
                setNoise_diastolic_top(e.target.checked);
            }
            if (names == 'tab6_noise_diastolic_aorta') {
                setInfo({...info,noise_diastolic_aorta:e.target.checked ? 1 : 0})
                setNoise_diastolic_aorta(e.target.checked);
            }
            if (names == 'tab6_noise_diastolic_pulmonary') {
                setInfo({...info,noise_diastolic_pulmonary:e.target.checked ? 1 : 0})
                setNoise_diastolic_pulmonary(e.target.checked);
            }
            if (names == 'tab6_noise_diastolic_tricuspid') {
                setInfo({...info,noise_diastolic_tricuspid:e.target.checked ? 1 : 0})
                setNoise_diastolic_tricuspid(e.target.checked);
            }

    }
    
    const [shownoiseHas, setShownoiseHas] = useState(false);
    const onFinish = (values)=>{
        let body = {
            nurse_doc_id: paramms.id,
            tab: 6,
            sad: values.sad,
            dad: values.dad,
            chcc: values.chcc,
            adp: values.adp,
            po2Saturation: values.po2Saturation,
            corTones: values.corTones,
            chdd: values.chdd,
            chdd_1: chdd_1,
            chdd_2: chdd_2,
            chdd_4: chdd_4,
            chdd_5: chdd_5,
            chdd_6: chdd_6,
            wheezing_1: wheezing_1,
            wheezing_2: wheezing_2,
            wheezing_3: wheezing_3,
            wheezing_4: wheezing_4,
            wheezing_5: wheezing_5,
            wheezing_6: wheezing_6,
            presenceWheezing: values.presenceWheezing,
            noise: values.noise,
            noiseHas: values.noiseHas,
            noiseComment: values.noiseComment,
            presenceEdema: values.presenceEdema,
            psv: values.psv,
            noise_systolic: noise_systolic,
            noise_diastolic: noise_diastolic,
            noise_systolic_top: noise_systolic_top,
            noise_systolic_aorta: noise_systolic_aorta,
            noise_systolic_pulmonary: noise_systolic_pulmonary,
            noise_systolic_tricuspid: noise_systolic_tricuspid,
            noise_diastolic_top: noise_diastolic_top,
            noise_diastolic_aorta: noise_diastolic_aorta,
            noise_diastolic_pulmonary: noise_diastolic_pulmonary,
            noise_diastolic_tricuspid: noise_diastolic_tricuspid,

        }
        api
            .post('/doc/create',body)
            .then(res=>{
                setInfo(body)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Данные успешно сохранены',
                    showConfirmButton: false,
                    timer: 2000
                })
                setTimeout(() => {
                    nextClick();
                }, 2000);
            })
            .catch(err=>{
                console.log(err);
            }
        )
    }
    const nextClick = () => {
        onChanges('7');
    }
    const backClick = () => {
        onChanges('5');
    }
    const chekNois = (e)=>{
        setShownoiseHas(e.target.value);
    }
    
    useEffect(()=>{
        setChdd_1(info?.chdd_1);
        setChdd_2(info?.chdd_2);
        setChdd_4(info?.chdd_4);
        setChdd_5(info?.chdd_5);
        setChdd_6(info?.chdd_6);
        setWheezing_1(info?.wheezing_1);
        setWheezing_2(info?.wheezing_2);
        setWheezing_3(info?.wheezing_3);
        setWheezing_4(info?.wheezing_4);
        setWheezing_5(info?.wheezing_5);
        setWheezing_6(info?.wheezing_6);
        setShownoiseHas(info?.noise);
        setNoise(info?.noise);
        setNoise_systolic(info?.noise_systolic);
        setNoise_diastolic(info?.noise_diastolic);
        setNoise_systolic_top(info?.noise_systolic_top);
        setNoise_systolic_aorta(info?.noise_systolic_aorta);
        setNoise_systolic_pulmonary(info?.noise_systolic_pulmonary);
        setNoise_systolic_tricuspid(info?.noise_systolic_tricuspid);
        setNoise_diastolic_top(info?.noise_diastolic_top);
        setNoise_diastolic_aorta(info?.noise_diastolic_aorta);
        setNoise_diastolic_pulmonary(info?.noise_diastolic_pulmonary);
        setNoise_diastolic_tricuspid(info?.noise_diastolic_tricuspid);
        form.setFieldsValue({
            sad: info?.sad,
            dad: info?.dad,
            chcc: info?.chcc,
            adp: info?.adp,
            po2Saturation: info?.po2Saturation,
            chdd: info?.chdd,
            presenceWheezing: info?.presenceWheezing,
            noise: info?.noise,
            noiseHas: info?.noiseHas,
            noiseComment: info?.noiseComment,
            presenceEdema: info?.presenceEdema,
            psv: info?.psv,
            corTones: info?.corTones,
            noise_systolic: info?.noise_systolic,
            noise_diastolic: info?.noise_diastolic,
            noise_systolic_top: info?.noise_systolic_top,
            noise_systolic_aorta: info?.noise_systolic_aorta,
            noise_systolic_pulmonary: info?.noise_systolic_pulmonary,
            noise_systolic_tricuspid: info?.noise_systolic_tricuspid,
            noise_diastolic_top: info?.noise_diastolic_top,
            noise_diastolic_aorta: info?.noise_diastolic_aorta,
            noise_diastolic_pulmonary: info?.noise_diastolic_pulmonary,
            noise_diastolic_tricuspid: info?.noise_diastolic_tricuspid,

        })
    },[info])
    const onValuChange = (e)=>{
        setInfo({...info,...e})
        if (e.dad) {
            let item = form.getFieldValue('sad') - form.getFieldValue('dad');
            form.setFieldValue('adp',item)
        }
        
    }
    const changeWhee = (e)=>{
        console.log(e.target.checked);
        setWheezing_1(e.target.checked ? 1:0);
    }
    const nouseSystolicCheck = (e)=>{
        setNoise_systolic(e.target.checked);
    }
    const noiseDiastolicCheck = (e)=>{
        setNoise_diastolic(e.target.checked);
    }

    return (
        <>
            <Typography.Title level={5}>Гемодинамические показатели и показатели объективного статуса</Typography.Title>
            <Form
                name="tab6"
                layout="vertical"
                onFinish={onFinish}
                size="normal"
                form={form}
                onValuesChange={onValuChange}
            >
                <Row gutter={24} >
                    <Col xs={24} md={12} xl={12}><Form.Item name="sad" label="САД мм.рт.ст"><Input /></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="dad" label="ДАД мм.рт.ст"><Input/></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="chcc" label="Пульс (ЧСС) уд.в мин"><Input/></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="adp" label="АД пульсовое (АДП) мм.рт.ст"><Input disabled suffix="мм.рт.ст" /></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="po2Saturation" label="РО2  %"><Input suffix="%" /></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="chdd" label="Легкие ЧДД"><Input/></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Typography.Title level={5}>Аускультация: дыхание</Typography.Title></Col>

                    <Col xs={24} md={12} xl={12}><Form.Item name="chdd_1" ><Checkbox onChange={onChange} checked={chdd_1==1 ? true:false} >везикулярное</Checkbox></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="chdd_2" ><Checkbox onChange={onChange}  checked={chdd_2==1 ? true:false} >ослабленное</Checkbox></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="chdd_4" ><Checkbox onChange={onChange} checked={chdd_4==1 ? true:false} >жесткое</Checkbox></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="chdd_5" ><Checkbox onChange={onChange} checked={chdd_5==1 ? true:false} >бронхиальное дыхание</Checkbox></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="chdd_6" ><Checkbox onChange={onChange} checked={chdd_6==1 ? true:false} >Затрудненный и удлиненный выдох</Checkbox></Form.Item></Col>

                    <Col span={24}><Form.Item><Typography.Title level={5}>Наличие хрипов</Typography.Title></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="wheezing_1"  >
                            <Checkbox onChange={changeWhee} checked={wheezing_1 ? 1:0} >нет</Checkbox>
                        </Form.Item></Col>
                    {!wheezing_1 ?

                    <>
                    <Col xs={24} md={12} xl={12} ><Form.Item name="wheezing_2" ><Checkbox  onChange={onChange} checked={wheezing_2==1 ? true:false}>Хрипы сухие </Checkbox></Form.Item></Col>
                    <Col xs={24} md={12} xl={12} ><Form.Item name="wheezing_3" ><Checkbox onChange={onChange} checked={wheezing_3==1 ? true:false}>Хрипы влажные </Checkbox></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="wheezing_4" ><Checkbox onChange={onChange} checked={wheezing_4==1 ? true:false} >крепитация</Checkbox></Form.Item></Col>
                    <Col xs={24} md={12} xl={12}><Form.Item name="wheezing_5" ><Checkbox onChange={onChange} checked={wheezing_5==1 ? true:false} >шум трения плевры</Checkbox></Form.Item></Col>
                    <Col span={24}>
                        <Form.Item name="wheezing_6">
                            <Checkbox onChange={onChange} checked={wheezing_6==1 ? true:false} >плевроперикардиальный шум с точной локализацией найденных шумов по межреберьям и топографическим линиям</Checkbox>
                        </Form.Item>
                    </Col>
                    </>:''
                    }

                    <Col span={24}>
                        <Typography.Title level={5}>Сердце</Typography.Title>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="corTones" label="Cor-тоны" >
                            <Radio.Group  >
                                <Radio value="1">ясные</Radio>
                                <Radio value="2">приглушены</Radio>
                                <Radio value="3">глухие</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="presenceEdema" label="Наличие отеков" >
                            <Radio.Group  >
                                <Radio value="1" >да</Radio>
                                <Radio value="2">нет</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item label="Шум" name="noise" >
                            <Radio.Group value={shownoiseHas}   onChange={chekNois} >
                                <Radio value="0">нет</Radio>
                                <Radio value="1">Есть</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    {shownoiseHas==1 && 
                    <>
                    <Col xs={24} md={12} xl={12} >
                        <Form.Item name="noise_systolic">
                            <Checkbox onChange={nouseSystolicCheck}  checked={noise_systolic==1 ? true:false} >Шум систолический</Checkbox>
                        </Form.Item>
                    </Col>
                    {noise_systolic==1 &&
                    <>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noise_systolic_top" label="">
                            <Checkbox onChange={onChange} checked={noise_systolic_top?true:false} >на верхушке</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noise_systolic_aorta" label="">
                            <Checkbox onChange={onChange} checked={noise_systolic_aorta?true:false} >на аорте</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noise_systolic_pulmonary" label="">
                            <Checkbox onChange={onChange} checked={noise_systolic_pulmonary?true:false} >на легочной артерии</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noise_systolic_tricuspid" label="">
                            <Checkbox onChange={onChange} checked={noise_systolic_tricuspid?true:false} >в проекции трикуспидального клапана</Checkbox>
                        </Form.Item>
                    </Col>
                    </>
                    }
                            
                    <Col xs={24} md={12} xl={12} >
                        <Form.Item name="noise_diastolic">
                            <Checkbox onChange={noiseDiastolicCheck}  checked={noise_diastolic==1 ? true:false} >Шум диастолический</Checkbox>
                        </Form.Item>
                    </Col>
                    {noise_diastolic==1 &&
                    <>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noise_diastolic_top" label="">
                            <Checkbox onChange={onChange} checked={noise_diastolic_top?true:false} >на верхушке</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noise_diastolic_aorta" label="">
                            <Checkbox onChange={onChange} checked={noise_diastolic_aorta?true:false} >на аорте</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noise_diastolic_pulmonary" label="">
                            <Checkbox onChange={onChange} checked={noise_diastolic_pulmonary?true:false} >на легочной артерии</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noise_diastolic_tricuspid" label="">
                            <Checkbox onChange={onChange} checked={noise_diastolic_tricuspid?true:false} >в проекции трикуспидального клапана</Checkbox>
                        </Form.Item>
                    </Col>
                    </>
                    }
                   </>
                    }
                    <Col xs={24} md={12} xl={12} >
                        <Form.Item name="psv" label="ПСВ ">
                            <Input suffix="мл/мин" />
                        </Form.Item>
                    </Col>
                    
                    <Col xs={24} md={12} xl={12}>
                        <Form.Item name="noiseComment" label="Дополнения">
                            <Input.TextArea placeholder="Дополнения" />
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
                    <Col xs={24} md={8} xl={8}>
                        <Form.Item>
                            <Button style={{width:'100%'}} type="primary" onClick={nextClick}  >Следующий</Button>
                        </Form.Item>
                    </Col>
                </Row>    
            </Form>

        </>
    )
}
export default Tab6;