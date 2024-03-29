/* eslint-disable react/prop-types */
import moment from "moment";
import "./View.css";

const ViewMain = ({ patient }) => {
  return (
    <>
      <div className="d-flex align-items-center py-0 border-bottom border-1 ">
        <h6 className="m-0" style={{ fontSize: "15px" }}>
          Ф.И.О:
        </h6>
        <div
          className="d-flex align-items-center"
          style={{
            fontSize: "15px",
            textTransform: "capitalize",
          }}
        >
          <p className="m-0 mx-2">{patient.surname}</p>
          <p className="m-0 ">{patient.name}</p>
          <p className="m-0 mx-2">{patient.middlename}</p>
        </div>
      </div>
      {/* Дата рождения */}
      <div className="d-flex align-items-center py-0 border-bottom border-1 ">
        <h6 className="m-0" style={{ fontSize: "15px" }}>
          Дата рождения :
        </h6>
        <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
          {moment(patient.birthDate).format("DD-MM-YYYY")}
        </p>
      </div>
      <div className="row">
        <div className="col-6">
          {/* Дата включения в исследование (исходно) */}
          <div className="d-flex align-items-center py-0 border-bottom border-1">
            <h6 className="m-0" style={{ fontSize: "15px" }}>
              Дата включения в исследование :
            </h6>
            <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
              {patient.ambul_number}
            </p>
          </div>
        </div>
        <div className="col-6">
          {/* Телефон */}
          <div className="d-flex align-items-center py-0 border-bottom border-1">
            <h6 className="m-0" style={{ fontSize: "15px" }}>
              Телефон :
            </h6>
            <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
              {patient.phone}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          {/* № амбул. карты */}
          <div className="d-flex align-items-center py-0 border-bottom border-1">
            <h6 className="m-0" style={{ fontSize: "15px" }}>
              № амбул. карты :
            </h6>
            <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
              {patient.ambul_number}
            </p>
          </div>
        </div>
        <div className="col-6">
          {/* Пол */}
          <div className="d-flex align-items-center py-0 border-bottom border-1">
            <h6 className="m-0" style={{ fontSize: "15px" }}>
              Пол :
            </h6>
            <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
              {!patient.gender ? "" : patient.gender === "0" ? "Жен" : "Муж"}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          {/* № амбул. карты */}
          <div className="d-flex align-items-center py-0 border-bottom border-1">
            <h6 className="m-0" style={{ fontSize: "15px" }}>
              Возраст :
            </h6>
            <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
              {patient.age}
            </p>
          </div>
        </div>
        <div className="col-6">
          {/* Пол */}
          <div className="d-flex align-items-center py-0 border-bottom border-1">
            <h6 className="m-0" style={{ fontSize: "15px" }}>
              Масса:
            </h6>
            <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
              {/* {info.weight} */}
              кг
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ViewMain;
