import {Button, Table} from "antd";
import {useEffect, useState} from "react";
import {api} from "../../utils/api.js";
import AddModal from "./AddModal.jsx";
import {Link} from "react-router-dom";
import Counter from "./Counter.jsx";
import {AiFillCaretLeft, AiOutlineAccountBook, AiOutlineDelete, AiOutlineEdit} from "react-icons/all.js";
import {AiOutlineMenuUnfold} from "react-icons/ai";

const  List = () => {
    const [users, setUsers] = useState([]);
    const [visible, setVisible] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const DeletedUser = (id) => {
        const data={
            user_id:id,
            is_delete:"1"
        }
        api.post('/user/delete',data).then((res) => {
            console.log(res, "res")
            if (res.status === 200) {
                setVisible(false);
            }
        });
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
    }, [visible]);

    const addUser = () => {
        setVisible(true);
    }

    return(
        <>
            <Button  type="primary" onClick={addUser}>Добавить пользователя</Button>
            <Table
                columns={columns}
                dataSource={users}

            />
            {visible&&
                <AddModal visible={visible} setVisible={setVisible} editItem={editItem} />
            }
        </>
    )
}
export default List;