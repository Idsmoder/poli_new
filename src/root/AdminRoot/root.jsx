import { Button, Drawer, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { CiCircleList } from "react-icons/ci";
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
  const [open, setOpen] = useState(false);

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

  return (
    <Layout className="layout">
      <Sider
        className="siderAdmin"
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className="logo"
          style={{
            textAlign: "center",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <h2>Админ</h2>
        </div>
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
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          style={{
            padding: "0 1rem",
            background: "#fff",
            margin: "0 1rem",
            borderRadius: "2px",
          }}
        >
          <div
            style={{ height: "100%" }}
            className="d-flex align-center justify-between"
          >
            <Button
              className="menuBurger"
              icon={open ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
              onClick={() => setOpen(true)}
            ></Button>
            <Button
              className="sizeChanger"
              icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
              onClick={() => setCollapsed(!collapsed)}
            ></Button>
            <Button
              className="d-flex align-center gap-x-1"
              icon={<AiOutlineLogout />}
              onClick={handleLogOut}
            >
              Выйти
            </Button>
          </div>
        </Header> */}
        <Content className="layout_content">
          <Suspense  fallback={<Loading />}>
          <Outlet />
          </Suspense>
        </Content>
      </Layout>
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
                  to="admin-teacher"
                >
                  Учетелья
                </Link>
              ),
            },
            {
              key: "2",
              icon: <CiCircleList className="icon" />,
              label: (
                <Link
                  onClick={() => localStorage.setItem("activeLink", 2)}
                  to="category"
                >
                  Категория
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
