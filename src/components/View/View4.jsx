import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";

const View4 = ({patient,info,setInfo}) => {
    return (
        <div>
      <div>
        <h6 className="mt-3 fw-bold" style={{ fontSize: "15px" }}>
          Вредные привычки и наследственность :
        </h6>

        <div className="row">
          <div className="col-6">
            <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
              <h6 className="m-0" style={{ fontSize: "15px" }}>
                Употребление алкоголя (отметить) :
              </h6>
              <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                {!info?.alcohol
                  ? ""
                  : info?.alcohol === "1"
                  ? "да"
                  : info?.alcohol === "2"
                  ? "нет"
                  : info?.alcohol === "3"
                  ? "иногда"
                  : ""}
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
              <h6 className="m-0" style={{ fontSize: "15px" }}>
                Курение :
              </h6>
              <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                {!info?.smoking
                  ? ""
                  : info?.smoking === "1"
                  ? "да"
                  : info?.smoking === "2"
                  ? "нет"
                  : "курил в прошлом"}
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
              <h6 className="m-0" style={{ fontSize: "15px" }}>
                ГБ :
              </h6>
              <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                {!info?.gb
                  ? ""
                  : info?.gb === "1"
                  ? "нет"
                  : info?.gb === "2"
                  ? "Отец"
                  : info?.gb === "3"
                  ? "Мать"
                  : info?.gb === "4"
                  ? "Отец и мать"
                  : ""}
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
              <h6 className="m-0" style={{ fontSize: "15px" }}>
                ИБС :
              </h6>
              <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                {!info?.ibs
                  ? ""
                  : info?.ibs === "1"
                  ? "нет"
                  : info?.ibs === "2"
                  ? "Отец"
                  : info?.ibs === "3"
                  ? "Мать"
                  : "Отец и мать"}
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
          <h6 className="m-0" style={{ fontSize: "15px" }}>
            СД :
          </h6>
          <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
            {!info?.sd
              ? ""
              : info?.sd === "1"
              ? "нет"
              : info?.sd === "2"
              ? "Отец"
              : info?.sd === "3"
              ? "Мать"
              : "Отец и мать"}
          </p>
        </div>
        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
          <h6 className="m-0" style={{ fontSize: "15px" }}>
            Ранняя смерть от ССЗ до 50 лет родителей :
          </h6>
          <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
            {!info?.ssz
              ? ""
              : info?.ssz === "1"
              ? "нет"
              : info?.ssz === "2"
              ? "Отец"
              : info?.ssz === "3"
              ? "Мать"
              : "Отец и мать"}
          </p>
        </div>
      </div>
      </div>
    );
    }
    export default View4;