import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import {Col, Row, Space, Table} from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import {AiOutlineUserAdd} from "react-icons/all.js";

const List = () => {
    const hasWindow = typeof window !== 'undefined';



    const [patientList, setPatientList] = useState([]);
    useEffect(() => {
        listPatient();
    }, []);
    const listPatient = () => {
        api
            .get("/patient/list")
            .then((res) => {
                console.log(res, "res");
                if (res.status===200) {
                    setPatientList(
                        res.data.data.data.map((item) => ({
                            key: item.id,
                            id: item.id,
                            name: item.name,
                            surname: item.surname,
                            middlename: item.middlename,
                            birthDate: moment(item.birthDate, "YYYY-MM-DD").format("DD-MM-YYYY"),
                            phone: item.phone,
                            address: item.address,
                            gender: item?.gender
                        }))
    
                    );
                }
            }
            )
        };
    const columns = [
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Space size="middle">
                    <a>{record.surname}{(" ")}{record.name}{(" ")} {record.middlename}</a>
                </Space>
            ),
        },
        {
            title: 'Дата рождения',
            dataIndex: 'birthDate',
            key: 'birthDate',
        },
        {
            title: 'Номер телефона',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Пол',
            key:'action',
            render: (text, record) => (
                text.gender=="1" ? "Мужской" : "Женский"
            )    
        },
        {
            title: <AiOutlineUserAdd/>,
            key: 'action',
            width: 50,
            fixed: 'right',
            render: (text, record) => (
                <Space >
                    <Link to={`/doc/create/${record.id}`} ><AiOutlineUserAdd/></Link>
                </Space>
            ),
        },
    ];
        
            
        
    return (
        <>

            <h1>Список пациентов</h1>
            <Row gutter={24}>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={patientList}
                        scroll={{ x: 1300 }}

                    />

                </Col>
            </Row>



        </>
        
        
    );
    }
    export default List;