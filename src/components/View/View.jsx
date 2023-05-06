import { Card } from "antd";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import "./View.css";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View3";
import View4 from "./View4";
import View5 from "./View5";
import ViewMain from "./ViewMain";

// eslint-disable-next-line react/prop-types
const View = ({ patient }) => {
  let comRef = useRef(null);

  return (
    <div>
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
                <button className=" px-4 py-2    border-0 rounded-3    text-white ">
                  Печать
                </button>
              );
            }}
            content={() => comRef}
            documentTitle={"document"}
            pageStyle="print"
          />
          <div
            ref={(el) => (comRef = el)}
            className="scrollbar scrollCustomize h-100 "
          >
            <div className="d-flex align-items-center h-100">
              <div className="preview  pb-4">
                <div className="border-light p-3 border-5 ">
                  {/* Ф.И.О: */}
                  <ViewMain patient={patient} />
                  <View1 patient={patient} />
                  <View2 patient={patient} />
                  <View3 patient={patient} />
                  <View4 patient={patient} />
                  <View5 patient={patient} />
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </Card>
    </div>
  );
};
export default View;
