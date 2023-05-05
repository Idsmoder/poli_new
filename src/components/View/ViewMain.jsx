import moment from "moment";
import "./View.css";
const ViewMain = ({patient}) => {
    return (
        <>
         <div className="d-flex align-items-center py-3 border-bottom border-1 col-6 "  >
            <h6 className="m-0" style={{fontSize:"15px"}} >
                Ф.И.О:
            </h6>
            <p className="m-0 " style={{ fontSize: "15px"  }}>
                {patient.surname} {patient.name}{" "}
                {patient.middlename}
            </p>
        </div>
            {/* Дата рождения */}
        <div className="d-flex align-items-center py-3 border-bottom border-1 col-6">
            <h6 className="m-0" style={{ fontSize: "10px" }}>
                Дата рождения :
            </h6>
            <p className="m-0 ms-3" style={{ fontSize: "10px" }}>
                {moment(patient.birthDate).format("DD-MM-YYYY")}
            </p>
        </div>
            <div className="row">
            <div className="col-6">
                {/* Дата включения в исследование (исходно) */}
                <div className="d-flex align-items-center py-3 border-bottom border-1">
                <h6 className="m-0" style={{ fontSize: "10px" }}>
                    Дата включения в исследование :
                </h6>
                <p className="m-0 ms-3" style={{ fontSize: "10px" }}>
                    {patient.ambul_number}
                </p>
                </div>
            </div>
            <div className="col-6">
                {/* Телефон */}
                <div className="d-flex align-items-center py-3 border-bottom border-1">
                <h6 className="m-0" style={{ fontSize: "10px" }}>
                    Телефон :
                </h6>
                <p className="m-0 ms-3" style={{ fontSize: "10px" }}>
                    {patient.phone}
                </p>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-6">
                {/* № амбул. карты */}
                <div className="d-flex align-items-center py-3 border-bottom border-1">
                <h6 className="m-0" style={{ fontSize: "10px" }}>
                    № амбул. карты :
                </h6>
                <p className="m-0 ms-3" style={{ fontSize: "10px" }}>
                    {patient.ambul_number}
                </p>
                </div>
            </div>
            <div className="col-6">
                {/* Пол */}
                <div className="d-flex align-items-center py-3 border-bottom border-1">
                <h6 className="m-0" style={{ fontSize: "10px" }}>
                    Пол :
                </h6>
                <p className="m-0 ms-3" style={{ fontSize: "10px" }}>
                    {!patient.gender
                    ? ""
                    : patient.gender === "0"
                    ? "Муж"
                    : "Жен"}
                </p>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-6">
                {/* № амбул. карты */}
                <div className="d-flex align-items-center py-3 border-bottom border-1">
                <h6 className="m-0" style={{ fontSize: "10px" }}>
                    Возраст :
                </h6>
                <p className="m-0 ms-3" style={{ fontSize: "10px" }}>
                    {patient.age}
                </p>
                </div>
            </div>
            <div className="col-6">
                {/* Пол */}
                <div className="d-flex align-items-center py-3 border-bottom border-1">
                <h6 className="m-0" style={{ fontSize: "10px" }}>
                    Масса:
                </h6>
                <p className="m-0 ms-3" style={{ fontSize: "10px" }}>
                    {/* {info.weight} */}
                    кг
                </p>
                </div>
            </div>
        </div>
        </>

    )
}
export default ViewMain;