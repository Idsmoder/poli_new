import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import ErrorElement from "./Pages/ErrorPage";
import Loading from "./components/Loader";
import PrivateRoutes from "./components/PrivateRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/store.js";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import List from "./root/Users/List.jsx";
import {Provider} from "react-redux";
const Login = lazy(() => import("./components/Login"));
const PatientCreate = lazy(() => import("./Pages/Patient/CreatePage"));
const Patient = lazy(() => import("././root/AdminRoot/root"));
const PatientList = lazy(() => import("./Pages/Patient/ListPage"));
const DocCreate = lazy(() => import("./Pages/Doc/CreatePage"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route
      path="/"
      element={<ProtectedRoutes />}
      errorElement={<ErrorElement />}
    />
    <Route
        path="/patient/*"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <Patient />
            </Suspense>
          </PrivateRoutes>
        }
      >
          <Route path="create" element={<PatientCreate/>} />
          <Route path="list" element={<PatientList/>} />
    </Route>
    <Route
        path="/doc/*"
        element={
          <PrivateRoutes>
            <Suspense fallback={<Loading />}>
              <Patient />
            </Suspense>
          </PrivateRoutes>
        }
      >
        <Route path="create/:id" element={<DocCreate/>} /> 
      </Route>
        <Route
            path={'/user/*'}
            element={
                <PrivateRoutes>
                    <Suspense fallback={<Loading />}>
                        <Patient />
                    </Suspense>
                </PrivateRoutes>
            }
        >
            <Route path={'list'} element={<List/>} />

        </Route>

    
    <Route path="/login" element={<Login />} />
    
    </>
  ));
 ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </Suspense>
)
