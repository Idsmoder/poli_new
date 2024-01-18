import {Button, Card, Table} from "antd";
import {useEffect, useState} from "react";
import {api} from "../../utils/api.js";
import AddModal from "./AddModal.jsx";
import {Link} from "react-router-dom";
import Counter from "./Counter.jsx";
import {AiFillCaretLeft, AiOutlineAccountBook, AiOutlineDelete, AiOutlineEdit} from "react-icons/all.js";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import Swal from "sweetalert2";
import {UserAddOutlined} from "@ant-design/icons";

const  List = () => {
    const [users, setUsers] = useState([]);
    const [visible, setVisible] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [isDelete, setIsDelete] = useState(false);
    const DeletedUser = (id) => {
        setIsDelete(true);
        Swal.fire({
            title: 'Вы уверены?',
            text: "Вы не сможете отменить это!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',

            confirmButtonText: 'Да, удалить!',
            cancelButtonText: 'Отмена'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Удалено!',
                    'Ваш файл был удален.',
                    'success'
                )
                const data={
                    user_id:id,
                    is_delete:"1"
                }
                api.post('/user/delete',data).then((res) => {
                    console.log(res, "res")
                    if (res.status === 200) {
                        setVisible(false);
                        setIsDelete(false);
                    }
                });
            }
        })
        
    }
    const UpdateUser = (data) => {
        setVisible(true);
        setEditItem(data);
    }
    const columns = [
        {
            title: 'ФИО',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title:<AiOutlineMenuUnfold/>,
            position:'right',
            dataIndex:'action',
            key:'action',
            fixed: 'right',
            width: 150,
            render: (text, record) => (
                <>
                    <Button type={"primary"} onClick={()=>DeletedUser(record?.key)}><AiOutlineDelete/></Button>
                    <Button type={"primary"} onClick={()=>UpdateUser(record)}><AiOutlineEdit/></Button>
                </>


            )

        }


    ];
    useEffect(() => {
        api.get('/user/list').then((res) => {
            console.log(res.data.data.data, "res")
            if (res.status === 200) {
                setUsers(
                    res.data.data.data.map((item) => {
                        return {
                            key: item.id,
                            name: item?.name,
                            email: item?.email,
                            phone: item?.phone,

                        };
                    })
                );
            }
        });
    }, [visible,isDelete]);

    const addUser = () => {
        setVisible(true);
    }

    return(
        <>
            <Card title="Пользователи" extra={<Button type={"primary"} onClick={addUser}><UserAddOutlined /> Добавить</Button>} style={{ width: "100%" }}>
            <Table
                columns={columns}
                dataSource={users}

            />
            </Card>
            {visible&&
                <AddModal visible={visible} setVisible={setVisible} editItem={editItem} />
            }
        </>
    )
}
export default List;