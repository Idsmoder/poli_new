import { Button, Checkbox, Col, Form, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { duration } from "moment/moment";

const Tab3 = ({patient,onChanges,info,setInfo}) => {
    const [diuretics, setDiuretics] = useState('');
    const [betaBlockers, setBetaBlockers] = useState('');
    const [calcium, setCalcium] = useState('');
    const [apf, setApf] = useState('');
    const [ara, setAra] = useState('');
    const [amkr, setAmkr] = useState('');
    const [antiarrhythmics, setAntiarrhythmics] = useState('');
    const [nitrates, setNitrates] = useState('');
    const [cardiac , setCardiac] = useState('');
    const [anti,setAnti] = useState('');
    const [no,setNo] = useState('');
    const [form] = Form.useForm();
    const params = useParams();
    const onChange = (e) => {
        
            let names = e.target.id;
            if (names=="no") {
                setInfo({...info,no:e.target.checked ? 1:0})
                setNo(e.target.checked)
                setDiuretics(0)
                setBetaBlockers(0);
                setCalcium(0);
                setApf(0);
                setAra(0);
                setAmkr(0);
                setAntiarrhythmics(0);
                setNitrates(0);
                setCardiac(0);
                setAnti(0)
            }
            if (names == 'diuretics') {
                setInfo({...info,diuretics:e.target.checked ? 1 : 0})
                setDiuretics(e.target.checked);
            }
            if (names == 'betaBlockers') {
                setInfo({...info,betaBlockers:e.target.checked ? 1 : 0})
                setBetaBlockers(e.target.checked);
            }
            if (names == 'calcium') {
                setInfo({...info,calcium:e.target.checked ? 1 : 0})
                setCalcium(e.target.checked);
            }
            if (names == 'apf') {
                setInfo({...info,apf:e.target.checked ? 1 : 0})
                setApf(e.target.checked);
            }
            if (names == 'ara') {
                setInfo({...info,ara:e.target.checked ? 1 : 0 })
                setAra(e.target.checked);
            }
            if (names == 'amkr') {
                setInfo({...info,amkr:e.target.checked ? 1 : 0 })
                setAmkr(e.target.checked);
            }
            if (names == 'antiarrhythmics') {
                setInfo({...info,antiarrhythmics:e.target.checked ? 1 : 0})
                setAntiarrhythmics(e.target.checked);
            }
            if (names == 'nitrates') {
                setInfo({...info,nitrates:e.target.checked ? 1 : 0})
                setNitrates(e.target.checked);
            }
            if (names == 'cardiac') {
                setInfo({...info,cardiac:e.target.checked ? 1 : 0})
                setCardiac(e.target.checked);
            }
            if (names=='anti') {
                setInfo({...info,anti:e.target.checked ? 1 : 0})
                setAnti(e.target.checked);
                
            }
    };
    const onFinish = (values) => {
        let body = {
            nurse_doc_id: params.id,
            tab: 3,
            no:no,
            diuretics: no ? 0 : diuretics,
            betaBlockers: no ? 0 : betaBlockers,
            calcium: no ? 0 : calcium,
            apf: no ? 0 :apf,
            ara: no ? 0 : ara,
            amkr: no ? 0 : amkr,
            antiarrhythmics: no ? 0 : antiarrhythmics,
            nitrates: no ? 0 : nitrates,
            cardiac: no ? 0 : cardiac,
        }
        console.log(body,"body");
        api
            .post("/doc/create", body)
            .then((res) => {
                if (res.status == 200) {
                    setInfo(body);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Данные успешно сохранены',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setTimeout(() => {
                        onChanges("4");
                    }, 2000);
                }
            }
            )
            .catch((err) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Ошибка при сохранении данных',
                    showConfirmButton: false,
                    timer: 2000
                })
            });
    }
    useEffect(() => {
        setDiuretics(info?.diuretics);
        setBetaBlockers(info?.betaBlockers);
        setCalcium(info?.calcium);
        setApf(info?.apf);
        setAra(info?.ara);
        setAmkr(info?.amkr);
        setAntiarrhythmics(info?.antiarrhythmics);
        setNitrates(info?.nitrates);
        setCardiac(info?.cardiac);
        setNo(info?.no);
    }, [info])
        const nextClick = () => {
            onChanges('4');
        }
        const backClick = () => {
            onChanges('2');
        }
    return (
        <>
            <Typography.Title level={5}>Принимает ли медикаментозную терапию</Typography.Title>
            <Form
                form={form}
                size=""
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={no==1 ? 24 : 12}>
                        <Form.Item name="no" >
                            <Checkbox checked={no?true:false} onChange={onChange} >Нет</Checkbox>
                        </Form.Item>
                    </Col>
                    {!no ? 
                    <>
                     <Col span={12}>
                        <Form.Item
                        name="diuretics" 
                        >
                            <Checkbox onChange={onChange} checked={diuretics=='1' ? true:false} >диуретики</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="betaBlockers"
                        >
                            <Checkbox onChange={onChange} checked={betaBlockers=='1' ? true:false} >бета-адреноблокаторы</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="calcium"
                            >
                            <Checkbox onChange={onChange} checked={calcium=='1' ? true:false} >антагонисты кальция</Checkbox>
                            </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="apf"
                            >
                                <Checkbox onChange={onChange} checked={apf=='1' ? true:false} >ингибиторы АПФ</Checkbox>    
                        </Form.Item>    
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="ara"
                            >
                                <Checkbox onChange={onChange} checked={ara=='1' ? true:false} >АРА</Checkbox>
                        </Form.Item> 
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="amkr"
                            >
                                <Checkbox onChange={onChange} checked={amkr=='1' ? true:false} >АМКР</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="antiarrhythmics"
                        >
                            <Checkbox onChange={onChange}  checked={antiarrhythmics=='1' ? true : false} >Антиаритмики</Checkbox>        
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="nitrates"
                            >
                                <Checkbox onChange={onChange} checked={nitrates=='1' ? true:false} >Нитраты</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="cardiac"
                            >
                                <Checkbox onChange={onChange} checked={cardiac=='1' ? true:false} >Сердечные гликозиды</Checkbox>
                        </Form.Item>
                    </Col>
                    <Col span={24} >
                        <Form.Item
                            name={'anti'}
                            
                        >
                            <Checkbox onChange={onChange} checked={info?.anti=='1' ? true:false} >Антиагреганты</Checkbox>

                        </Form.Item>
                    </Col>
                    </>
                   :'' }
                   
                    
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
export default Tab3;