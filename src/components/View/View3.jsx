import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";

const View3 = ({patient,info,setInfo}) => {
    return (
        <>
            <h6 className="mt-3 fw-bold" style={{ fontSize: "15px" }}>
                Принимает ли медикаментозную терапию (отметить):{info?.no ? "Нет": ""}
            </h6>
            {info?.no? "" : <>
            <div className="row py-1 align-items-center">
            {/* diuretics */}
            {info?.diuretics ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    диуретики
                </p>
                </div>
            ) : (
                ""
            )}
            {/* beta_blockers */}
            {info?.betaBlockers ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    бета-блокаторы
                </p>
                </div>
            ) : (
                ""
            )}

            {/* antagonis */}
            {info?.calcium ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    антагонисты кальция
                </p>
                </div>
            ) : (
                ""
            )}
            {/* ingibitor */}
            {info?.apf ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    ингибиторы АПФ
                </p>
                </div>
            ) : (
                ""
            )}

            {/* АРА */}
            {info?.ara ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    АРА
                </p>
                </div>
            ) : (
                ""
            )}
            {/* АМКР */}
            {info?.amkr ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    АМКР
                </p>
                </div>
            ) : (
                ""
            )}

            {/* antagonis */}
            {info?.antiarrhythmics ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    Антиаритмики
                </p>
                </div>
            ) : (
                ""
            )}
            {/* antiaritmiki */}

            {/* nitrat */}
            {info?.nitrates ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    Нитраты
                </p>
                </div>
            ) : (
                ""
            )}
            {/* serdchenie */}
            {info?.cardiac ? (
                <div className="col-6">
                <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    Сердечные гликозиды
                </p>
                </div>
            ) : (
                ""
            )}
            {info?.anti ? (
                <div className="col-6" >
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        Антиагреганты
                </p>
                </div>
            ):("")}
            </div>
            
            </>}
            
        </>
    );
    }
    export default View3;