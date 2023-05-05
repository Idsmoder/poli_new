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
                            {/* <View1 patient={patient} info={tab1} setInfo={setTab1} />
                            <View2 patient={patient} info={tab2} setInfo={setTab2} />
                            <View3 patient={patient} info={tab3} setInfo={setTab3} />
                            <View4 patient={patient} info={tab4} setInfo={setTab4} />
                            <View5 patient={patient} info={tab5} setInfo={setTab5} />
                            <View6 patient={patient} info={tab6} setInfo={setTab6} /> */}
                            <View7 patient={patient} info={tab7} setInfo={setTab7} />
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