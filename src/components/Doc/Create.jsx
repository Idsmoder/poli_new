import { Card, Col, Row, Tabs, Typography } from "antd";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import Tab1 from "../Tabs/Tab1";
import View from "../View/View"; 
import Tab2 from "../Tabs/Tab2";
import Tab3 from "../Tabs/Tab3";
import Tab4 from "../Tabs/Tab4";
import Tab5 from "../Tabs/Tab5";
import Tab6 from "../Tabs/Tab6";
import ReactToPrint from "react-to-print";
import ViewMain from "../View/ViewMain";
import View1 from "../View/View1";
import View2 from "../View/View2";
import View3 from "../View/View3";
import View4 from "../View/View4";
import View5 from "../View/View5";
import View6 from "../View/View6";
import Tab7 from "../Tabs/Tab7";
import View7 from "../View/View7";
import View8 from "../View/View8";
import View9 from "../View/View9";
import View10 from "../View/View10";
import View11 from "../View/View11";
import Tab8 from "../Tabs/Tab8";
import Tab9 from "../Tabs/Tab9";
import Tab10 from "../Tabs/Tab10";
import Tab11 from "../Tabs/Tab11";
import CanculateScore2 from "../../utils/CanculateAp";


const Create = () => {

    const params = useParams();
    const [patient, setPatient] = useState({});
    const [activeTab, setActiveTab] = useState(window.localStorage.getItem('tab') || '1');
    let comRef = useRef(null);
    const [tab1, setTab1] = useState(null);
    const [tab2, setTab2] = useState(null);
    const [tab3, setTab3] = useState(null);
    const [tab4, setTab4] = useState(null);
    const [tab5, setTab5] = useState(null);
    const [tab6, setTab6] = useState(null);
    const [tab7, setTab7] = useState(null);
    const [tab8, setTab8] = useState(null);
    const [tab9, setTab9] = useState(null);
    const [tab10, setTab10] = useState(null);
    const [tab11, setTab11] = useState(null);
    const [chss, setChss] = useState(null);
    const [score, setScore] = useState(0);
    const [ap, setAp] = useState(null);
    useEffect (() => {
        getPatient(params.id);
    }, []);
    useEffect (() => {
        setActiveTab(activeTab);
    }, [activeTab]);
    const funcSetTab = (key) => {
        console.log(key, "key");
        setActiveTab(key);
    };
    const getPatient = (id) => {
        api
            .get(`/patient/${id}`)
            .then((res) => {
                setPatient(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const onChange = (key) => {
        window.localStorage.setItem('tab', key);
        setActiveTab(key);
    };
    useEffect(() => {
        if (tab1==null) {
            getDoc('1');
        }
        if (tab2==null) {
            getDoc('2');
        }
        if (tab3==null) {
            getDoc('3');
        }
        if (tab4==null) {
            getDoc('4');
        }
        if (tab5==null) {
            getDoc('5');
        }
        if(tab6==null){
            getDoc('6');
        }
        if(tab7==null){
            getDoc('7');
        }
        if (tab8==null) {
            getDoc('8')
        }
        if (tab9==null) {
            getDoc('9')
        }
        if (tab10==null) {
            getDoc('10')
        }
        if (tab11==null) {
            getDoc('11')
        }
    }, []);
    const getDoc = (tab) => {
        api
            .get(`/doc/tab/${params.id}/${tab}`)
            .then((res) => {
                if (res.status == 200) {
                    
                        if (tab == '1') {
                            setTab1(res.data.data);
                        }
                        if (tab == '2') {
                            setTab2(res.data.data);
                        }
                        if (tab == '3') {
                            setTab3(res.data.data);
                        }
                        if (tab == '4') {
                            setTab4(res.data.data);
                        }
                        if (tab == '5') {
                            setTab5(res.data.data);
                        }
                        if (tab=='6') {
                            setTab6(res.data.data);
                        }
                        if (tab=='7') {
                            setTab7(res.data.data);
                        }
                        if (tab==8) {
                            setTab8(res.data.data)
                        }
                        if (tab==9) {
                            setTab9(res.data.data)
                        }
                        if (tab==10) {
                            setTab10(res.data.data)
                        }
                        if (tab==11) {
                            setTab11(res.data.data)
                        }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const items = [
        {
            title: 'Клиническая характеристика больного',
            label: '1',
            key: '1',
            children:<Tab1 patient={patient} onChanges={onChange} info={tab1} setInfo={setTab1} />
        },
        {
            title: 'Ранее выявленные заболевания',
            label: '2',
            key: '2',
            children:<Tab2 patient={patient} onChanges={onChange} info={tab2} setInfo={setTab2} />
        },
        {
            title: 'Принимает ли медикаментозную терапию',
            label: '3',
            key: '3',
            children:<Tab3 patient={patient} onChanges={onChange} info={tab3} setInfo={setTab3}  />
        },
        {
            title: 'Вредные привычки и наследственность ',
            label: '4',
            key: '4',
            children:<Tab4 patient={patient} onChanges={onChange} info={tab4} setInfo={setTab4} />
        },
        {
            title: 'Антропометрические данные и данные Tanita',
            label: '5',
            key: '5',
            children:<Tab5 patient={patient} onChanges={onChange} info={tab5} setInfo={setTab5} />
        },
        {
            title: 'Гемодинамические показатели и показатели объективного статуса',
            label: '6',
            key: '6',
            children:<Tab6 patient={patient} onChanges={onChange} info={tab6} setInfo={setTab6} />
        },
        {
            title: '7. Лабораторные данные:',
            label: '7',
            key: '7',
            children:<Tab7 patient={patient} onChanges={onChange} info={tab7} setInfo={setTab7} />
        },
        {
            title:'8. Определение толерантности к физической нагрузке:',
            label:'8',
            key:'8',
            children:<Tab8 patient={patient} onChanges={onChange} info={tab8} setInfo={setTab8} info6={tab6} />
        },
        {
            title:'9. Инструментальные методы исследования:',
            label:'9',
            key:'9',
            children:<Tab9 patient={patient} onChanges={onChange} info={tab9} setInfo={setTab9} />
        },
        {
            title:'10. Оценка качеств жизни и уровня стресса.:',
            label:'10',
            key:'10',
            children:<Tab10 patient={patient} onChanges={onChange} info={tab10} setInfo={setTab10} />
        },
        {
            title:'11. Расчетные показатели',
            label:'11',
            key:'11',
            children:<Tab11 patient={patient} onChanges={onChange} info={tab11} setInfo={setTab11} />
        }
    ]

     
    

    return (
        <>
            <Row gutter={24}>
                <Col span={12}>
                <Typography.Title level={5}>Пациент: {patient.surname} {patient.name} {patient.middlename}</Typography.Title>
                </Col>
                <Col span={12}>
                <Typography.Title level={5}>Дата рождения: {patient.birthDate}</Typography.Title>
                </Col>
                
                    <Col span={12}>
                        <Card>
                        <Tabs 
                            defaultActiveKey={activeTab}
                            type="card"
                            size="large"
                            style={{marginTop: 20}}
                            items={items}
                            activeKey={activeTab}
                            onChange={onChange}
                        />
                        </Card>
                    </Col>
                    <Col span={12}>
                    <Card>
                <fieldset
                    className="border p-2 page_wrap"
                    style={{ borderRadius: "10px", background: "#fff" }}
                >
                    <legend className="float-none ms-3 w-auto fw-bold fs-6 ">
                        ВАШ ДОКУМЕНТ
                    </legend>
                    <ReactToPrint
                        trigger={() => {
                            return (
                            <button className=" px-4 py-2 bg-success  border-0 rounded-3  bg-secondary  text-white ">
                                Печать
                            </button>
                            );
                        }}
                        content={() => comRef}
                        documentTitle={
                            "document"
                        }
                        pageStyle="print"
                        />
                        <div ref={(el) => (comRef = el)} className="scrollbar scrollCustomize h-100 ">
                       
                    <div className="d-flex align-items-center h-100">
                        <div className="preview  pb-4">
                        <div className="border-light p-3 border-5 ">
                            {/* Ф.И.О: */}
                            <ViewMain patient={patient} />
                            <View1 patient={patient} info={tab1} setInfo={setTab1} />
                            <View2 patient={patient} info={tab2} setInfo={setTab2} />
                            <View3 patient={patient} info={tab3} setInfo={setTab3} />
                            <View4 patient={patient} info={tab4} setInfo={setTab4} />
                            <View5 patient={patient} info={tab5} setInfo={setTab5} />
                            <View6 patient={patient} info={tab6} setInfo={setTab6} />
                            <View7 patient={patient} info={tab7} setInfo={setTab7} />
                            <View8 patient={patient} info={tab8} setInfo={setTab8} info6={tab6} info5={tab5} />
                            <View9 patient={patient} info={tab9} setInfo={setTab9} />
                            <View10 patient={patient} info={tab10} setInfo={setTab10} />
                            <View11 info10={tab10} info8={tab8} patient={patient} info={tab11} setInfo={setTab11} info5={tab5} info6={tab6} info2={tab2} info4={tab4} info7={tab7} />
                        </div>
                        </div>
                    </div>
                    </div>    

                </fieldset>

           
            </Card>
                    </Col>
                    

                
                    
                    
                

                
            </Row>
            

            
            
        </>
    );
};
export default Create;