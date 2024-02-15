import { Button, Drawer, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { CiCircleList, } from "react-icons/ci";
import { FiList, FiUsers } from "react-icons/fi";
import {
  AiOutlineLogout,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import React, { useState, Suspense } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./style.scss";
import Swal from "sweetalert2";
import Loading from "../../components/Loader";



const AdminRoute = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  // handleLogOut
  const handleLogOut = () => {
    Swal.fire({
      icon: "warning",
      title: "Вы действительно хотите выйти",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("activeLink");
        localStorage.removeItem("role");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    });
  };
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

  return (

      <Layout className="site-layout">
        <Header className="layout_header">


            <div style={{display:'flex', justifyContent:"space-between",margin:'1%'}}>
                <Button
                    className={'button_left'}
                    type="primary"
                    onClick={() => setOpen(true)}
                    icon={<AiOutlineMenuFold />}
                >
                    Меню
                </Button>
                <Button
                    className={'button_right'}
                    type="primary"
                    onClick={handleLogOut}
                    icon={<AiOutlineLogout />}
                >
                    Выйти
                </Button>
            </div>
        </Header>
        

        <Content className="layout_content">
          <Suspense  fallback={<Loading />}>
          <Outlet />
          </Suspense>
        </Content>
      <Drawer
        placement="left"
        title="Меню"
        onClose={() => setOpen(false)}
        open={open}
        width={200}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={localStorage.getItem("activeLink")}
          items={[
              {
                  key: "1",
                  icon: <FiUsers className="icon" />,
                  label: (
                      <Link
                          onClick={() => localStorage.setItem("activeLink", 1)}
                          to="/patient/create"
                      >
                          Создать пациента
                      </Link>
                  ),
              },
              {
                  key: "2",
                  icon: <CiCircleList className="icon" />,
                  label: (
                      <Link
                          onClick={() => localStorage.setItem("activeLink", 2)}
                          to=""
                      >
                          Создать документ
                      </Link>
                  ),
              },
              {
                  key: "3",
                  icon: <FiList className="icon" />,
                  label: (
                      <Link
                          onClick={() => localStorage.setItem("activeLink", 2)}
                          to="/patient/list"
                      >
                          Список пациентов
                      </Link>
                  ),
              },
              {
                  key: "4",
                  icon: <FiList className="icon" />,
                  label: (
                      <Link
                          onClick={() => localStorage.setItem("activeLink", 2)}
                          to="/user/list"
                      >
                          Список пользователей
                      </Link>
                  ),
              },
          ]}
        />
      </Drawer>
    </Layout>
  );
};

export default AdminRoute;
