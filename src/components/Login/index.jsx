import React, { useEffect, useState } from "react";
import "./style.scss";
import { Button, Form, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import InputMask from "react-input-mask";
import Swal from "sweetalert2";

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  // handleLogin
  const handleLogin = (values) => {
    setloading(true);
    const phone = values.phone.replace(/\+|\(|\)|\s|-/g, "");
    const body = {
      phone: phone,
      password: values.password,
    };
    
    const res = api.post("/login", body);
    try {
        
      res.then((res) => {
        if (res.status === 200) {
          Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }).fire({
            icon: 'success',
            title: 'Успешно'
        })
          Cookies.set("access_token", res?.data?.access_token);
          localStorage.setItem("access_token", res?.data?.access_token);
          navigate("/");
        }
      })
      .catch((err) => {
        Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
      }).fire({
          icon: 'error',
          title: 'Неверный логин или пароль'
      })
      });
      
        
      

      
    } catch (err) {
      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    }).fire({
        icon: 'error',
        title: 'Неверный логин или пароль'
    })
      console.log(err, "err");
    } finally {
      setloading(false);
    }
  };
  
  


  return (
    <div className="loginPage">
      <div className="container form_wrapper">
        <Form
          onFinish={handleLogin}
          autoComplete="false"
          layout="vertical"
          form={form}
          id="loginForm"
        >
          <div className="main_text">
            <h1>Войти</h1>
          </div>
          <div>
            <Form.Item
              name="phone"
              label="Номер телефона"
             
            >
              <InputMask mask="+\9\98 (99) 999-99-99" maskChar=" ">
                  {(inputProps) => <Input {...inputProps} type="tel" placeholder="Номер телефон" />}
              </InputMask>
            </Form.Item>
            <Form.Item
              name="password"
              label="Пароль"
              rules={[
                { required: true, message: "Введите пароль", whitespace: true,min:8 },
              ]}
            >
              <Input autoComplete="false" disabled={loading} type="password" />
            </Form.Item>
          </div>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
          >
            Войти
          </Button>
          <div className="other__sign">
            <p>
              или <Link to="/register">Регистрация</Link>
            </p>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
