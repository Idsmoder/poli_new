import { Button, Checkbox, Col, Form, Row, Typography } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import Swal from "sweetalert2";

const Tab2 = ({patient,onChanges,info,setInfo}) => {
    const [form] = Form.useForm();
    const [a, setA ] = useState('');
    const [b, setB ] = useState('');
    const [c, setC ] = useState('');
    const [d, setD ] = useState('');
    const [e, setE ] = useState('');
    const [f, setF ] = useState('');
    const [g_ca, setG_ca ] = useState('');
    const [g_us, setG_us ] = useState('');
    const [g_pacemaker, setG_pacemaker ] = useState('');
    const [h_1, setH_1 ] = useState('');
    const [h_2, setH_2 ] = useState('');
    const [h_3, setH_3 ] = useState('');
    const [h_4, setH_4 ] = useState('');
    const [h_5, setH_5 ] = useState('');
    const [h_6, setH_6 ] = useState('');
    const [h_7, setH_7 ] = useState('');
    const [i, setI ] = useState('');
    const [k, setK ] = useState('');
    const [l, setL ] = useState('');
    const [m, setM ] = useState('');
    const [n, setN ] = useState('');
    const [o, setO ] = useState('');
    const [p, setP ] = useState('');
    const [q, setQ ] = useState('');




    const onChange = (e) => {
        let names = e.target.id;
        if (names==="a") {
            setInfo({...info,a:e.target.checked ? 1 : 0})
            setA(e.target.checked);
        }
        if (names==="b") {
            setInfo({...info,b:e.target.checked ? 1 : 0})
            setB(e.target.checked);
        }
        if (names==="c") {
            setInfo({...info,c:e.target.checked ? 1 : 0})
            setC(e.target.checked);
        }
        if (names==="d") {
            setInfo({...info,d:e.target.checked ? 1 : 0})
            setD(e.target.checked);
        }
        if (names==="e") {
            setInfo({...info,e:e.target.checked ? 1 : 0})
            setE(e.target.checked);
        }
        if (names==="f") {
            setInfo({...info,f:e.target.checked ? 1 : 0})
            setF(e.target.checked);
        }
        if (names==="g_ca") {
            setInfo({...info,g_ca:e.target.checked ? 1 : 0})
            setG_ca(e.target.checked);
        }
        if (names==="g_us") {
            setInfo({...info,g_us:e.target.checked ? 1 : 0})
            setG_us(e.target.checked);
        }
        if (names==="g_pacemaker") {
            setInfo({...info,g_pacemaker:e.target.checked ? 1 : 0})
            setG_pacemaker(e.target.checked);
        }
        if (names==="h_1") {
            setInfo({...info,h_1:e.target.checked ? 1 : 0})
            setH_1(e.target.checked);
        }
        if (names==="h_2") {
            setInfo({...info,h_2:e.target.checked ? 1 : 0})
            setH_2(e.target.checked);
        }
        if (names==="h_3") {
            setInfo({...info,h_3:e.target.checked ? 1 : 0})
            setH_3(e.target.checked);
        }
        if (names==="h_4") {
            setInfo({...info,h_4:e.target.checked ? 1 : 0})
            setH_4(e.target.checked);
        }
        if (names==="h_5") {
            setInfo({...info,h_5:e.target.checked ? 1 : 0})
            setH_5(e.target.checked);
        }
        if (names==="h_6") {
            setInfo({...info,h_6:e.target.checked ? 1 : 0})
            setH_6(e.target.checked);
        }
        if (names==="h_7") {
            setInfo({...info,h_7:e.target.checked ? 1 : 0})
            setH_7(e.target.checked);
        }
        if (names==="i") {
            setInfo({...info,i:e.target.checked ? 1 : 0})
            setI(e.target.checked);
        }
        if (names==="k") {
            setInfo({...info,k:e.target.checked ? 1 : 0})
            setK(e.target.checked);
        }
        if (names==="l") {
            setInfo({...info,l:e.target.checked ? 1 : 0})
            setL(e.target.checked);
        }
        if (names==="m") {
            setInfo({...info,m:e.target.checked ? 1 : 0})
            setM(e.target.checked);
        }
        if (names==="n") {
            setInfo({...info,n:e.target.checked ? 1 : 0})
            setN(e.target.checked);
        }
        if (names==="o") {
            setInfo({...info,o:e.target.checked ? 1 : 0})
            setO(e.target.checked);
        }
        if (names==="p") {
            setInfo({...info,p:e.target.checked ? 1 : 0})
            setP(e.target.checked);
        }
        if (names==="q") {
            setInfo({...info,q:e.target.checked ? 1 : 0})
            setQ(e.target.checked);
        }
    };
    const onFinish = (values) => {
        let body = {
            nurse_doc_id: patient.id,
            tab: 2,
            a: a,
            b: b,
            c: c,
            d: d,
            e: e,
            f: f,
            g_ca: g_ca,
            g_us: g_us,
            g_pacemaker: g_pacemaker,
            h_1: h_1,
            h_2: h_2,
            h_3: h_3,
            h_4: h_4,
            h_5: h_5,
            h_6: h_6,
            h_7: h_7,
            i: i,
            k: k,
            l: l,
            m: m,
            n: n,
            o: o,
            p: p,
            q: q,
        }
       api
            .post("/doc/create",body)
            .then((res) => {
                if (res.status===200) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Данные успешно сохранены',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(() => {
                        setInfo(body);
                        onChanges("3");
                    }, 2000);
                }
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
    };
    useEffect (() => {
        setA(info?.a);
        setB(info?.b);
        setC(info?.c);
        setD(info?.d);
        setE(info?.e);
        setF(info?.f);
        setG_ca(info?.g_ca);
        setG_us(info?.g_us);
        setG_pacemaker(info?.g_pacemaker);
        setH_1(info?.h_1);
        setH_2(info?.h_2);
        setH_3(info?.h_3);
        setH_4(info?.h_4);
        setH_5(info?.h_5);
        setH_6(info?.h_6);
        setH_7(info?.h_7);
        setI(info?.i);
        setK(info?.k);
        setL(info?.l);
        setM(info?.m);
        setN(info?.n);
        setO(info?.o);
        setP(info?.p);
        setQ(info?.q);
    },[info])
    

    const nextClick = () => {
        onChanges('3');
    }
    const backClick = () => {
        onChanges('1');
    }
    const onValuChange = (e) => {
        setInfo({...info,...e})
    }
return (
        <>
            <Typography.Title level={5}>Ранее выявленные заболевания</Typography.Title>
            <Form 
                form={form}
                size=""
                layout="vertical"
                onFinish={onFinish}
                onValuesChange={onValuChange}
            >
                <Row gutter={24}>
                    <Col xs={24} xl={12} >
                        <Form.Item
                            name="a"
                        >
                            <Checkbox onChange={onChange} checked={a=='1' ?true:false}  >A. Гипертоническая болезнь</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="b"
                        >
                            <Checkbox onChange={onChange}  checked={b=='1' ? true:false} >B. Ишемическая болезнь сердца. Стабильная стенокардия нарушения</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="c"
                        >
                            <Checkbox onChange={onChange} checked={c=='1'?true:false}  >C. В анамнезе перенесенный ИМ</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="d"
                        >
                            <Checkbox onChange={onChange} checked={d=='1'?true:false}  >D. В анамнезе перенесенный ОНМК, ТИА</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="e"
                        >
                            <Checkbox onChange={onChange} checked={e=='1'?true:false} >E. ХСН</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="f"
                        >
                            <Checkbox onChange={onChange} checked={f=='1'?true:false}  >F. Атеросклероз периферический многососудистый со стенозом и/или</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Typography.Title level={5} >G. Перенесенные операции на сердце и сосудах</Typography.Title>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="g_ca"
                        >
                            <Checkbox onChange={onChange}  checked={g_ca=='1'?true:false} >АКШ</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="g_pacemaker"
                        >
                            <Checkbox onChange={onChange} checked={g_pacemaker=='1'?true:false} >Стентирование КА</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="g_us"
                        >
                            <Checkbox onChange={onChange} checked={g_us=='1'?true:false} >Установка ЭКС или кардиовертера-дефибрилятора</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Typography.Title level={5} >H. Нарушения ритма</Typography.Title>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="h_1"
                        >
                            <Checkbox onChange={onChange}  checked={h_1=='1'?true:false} >Экстросистолия желудочковая</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="h_2"
                        >
                            <Checkbox onChange={onChange} checked={h_2=='1'?true:false}  >Экстросистолия наджелудочковая'</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                    <Form.Item
                            name="h_3"
                        >
                            <Checkbox onChange={onChange} checked={h_3=='1'?true:false}  >Пароксизмальная наджелудочковая тахикардия</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="h_4"
                            >
                                <Checkbox onChange={onChange} checked={h_4=='1'?true:false} >Полная блокада правой ножки пучка Гисса</Checkbox>
                        </Form.Item>        
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="h_5"
                            >
                                <Checkbox onChange={onChange} checked={h_5=='1'?true:false} >Полная блокада левой ножки пучка Гисса</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="h_6"
                            >   
                                <Checkbox onChange={onChange} checked={h_6=='1'?true:false} >Фибрилляция предсердий</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="h_7"
                            >
                                <Checkbox onChange={onChange} checked={h_7=='1'?true:false} >Другие нарушения ритма</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="i"
                            >
                                <Checkbox onChange={onChange} checked={i=='1'?true:false} >I. Сахарный диабет без осложнений</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="k"
                            >
                                <Checkbox onChange={onChange} checked={k=='1'?true:false} >K. Сахарный диабет с осложнениями</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="l"
                            >
                                <Checkbox onChange={onChange} checked={l=='1'?true:false} >L. Нарушение толерантности к глюкозе</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="m"
                            >
                                <Checkbox onChange={onChange} checked={m=='1'?true:false} >M. ХБП</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="n"
                            >
                                <Checkbox onChange={onChange} checked={n=='1'?true:false} >N. ХОБЛ или БА</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="o"
                            >
                                <Checkbox onChange={onChange} checked={o=='1'?true:false} >O. Ковид-19</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="p"
                            >
                                <Checkbox onChange={onChange} checked={p=='1'?true:false} >P. Врожденные и приобретенные пороки сердца</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Form.Item
                                name="q"
                            >
                                <Checkbox onChange={onChange} checked={q=='1'?true:false} >Q. Онкологические заболевания</Checkbox>
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
    );
    }
    export default Tab2;