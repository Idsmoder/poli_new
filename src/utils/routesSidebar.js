import React, { lazy } from "react";
import useId from "../hooks/useId";
import { ClientIcon, DashIcon, EmployeIcon } from "../components/Sidebar/style";
const Dashboard = lazy(() =>
    import ("../Pages/Dashboard/Dashboard"));
const Clients = lazy(() =>
    import ("../Pages/Clients/Clients"));
const Employers = lazy(() =>
    import ("../Pages/Employers/Employers"));

export const routesUrl = [
    // {
    //     id: useId,
    //     path: "/dashboard",
    //     element: < Dashboard / > ,
    //     label: "Создать документ",
    //     icon: < DashIcon title = "Dashboard" / > ,
    // },
    // {
    //     id: useId,
    //     path: "/clients",
    //     element: < Clients / > ,
    //     label: "Создать пациента",
    //     icon: < ClientIcon title = "Clients" / > ,
    // },
    // {
    //     id: useId,
    //     path: "/employers",
    //     element: < Employers / > ,
    //     label: "Сотрудники",
    //     icon: < EmployeIcon title = "Employers" / > ,
    // },
];