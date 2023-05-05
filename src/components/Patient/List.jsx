import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Space, Table } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const List = () => {

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
                            birthDate: moment(item.birthDate, "YYYY-MM-DD").format("DD-MM-YYYY"),
                            phone: item.phone,
                            address: item.address,
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
                    <a>{record.name}</a>
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
                text.gender==1 ? Мужской : <>Женский</>
            )    
        },
        {
            title: 'Действия',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`/doc/create/${record.id}`} >Создать документ</Link>
                    <a>Изменить</a>
                </Space>
            ),
        },
    ];
        
            
        
    return (
        <>
            <h1>Список пациентов</h1>
            <Table
                columns={columns}
                dataSource={patientList}

            >

            </Table>
        </>
        
        
    );
    }
    export default List;