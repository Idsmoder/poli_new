import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";

const View2 = ({patient,info,setInfo}) => {
    
    return (
        <div>
            <h6 className="mt-3 fw-bold" style={{ fontSize: "10px" }}>
                Сопутствующие заболевания :
                </h6>
                <div className="row py-2 align-items-center">
                {/* A */}
                {info?.a ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>A. </b> Гипертоническая болезнь
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* B */}
                {info?.b ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>B. </b> Ишемическая болезнь сердца. Стабильная стенокардия
                        нарушения
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* C */}
                {info?.c ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>C. </b> В анамнезе перенесенный ИМ
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* D */}
                {info?.d ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>D. </b>В анамнезе перенесенный ОНМК, ТИА
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* E */}
                {info?.e ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>E. </b> ХСН
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* F */}
                {info?.f ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>F. </b> Атеросклероз периферический многососудистый со
                        стенозом и/или
                    </p>
                    </div>
                ) : (
                    ""
                )}
                <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                    <b>G. </b>Перенесенные операции на сердце и сосудах : 
                    {info?.g_ca ? "АКШ, " : ""}{info?.g_pacemaker ? "Стентирование КА, ":""}{info?.g_us? "Установка ЭКС или кардиовертера-дефибрилятора":""}
                    </p>
                </div>
                <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                    <b>H. </b>Нарушения ритма : /
                    {info?.h_1 ?"Экстросистолия желудочковая, ":""}
                    {info?.h_2 ? "Экстросистолия наджелудочковая, ":""}
                    {info?.h_3 ? "Пароксизмальная наджелудочковая тахикардия, ":""}
                    {info?.h_4 ? "я блокада правой ножки пучка Гисса, ":""}
                    {info?.h_5 ? "Полная блокада левой ножки пучка Гисса, ":""}
                    {info?.h_6 ? "Фибрилляция предсердий, ":""}
                    {info?.h_7 ? "Другие нарушения ритма":""}
                    
                    </p>
                </div>
                {/* I */}
                {info?.i ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>I. </b> Сахарный диабет без осложнений
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* K */}
                {info?.k ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>K. </b>Сахарный диабет с осложнениями
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* L */}
                {info?.l ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>L. </b>Нарушение толерантности к глюкозе
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* M */}
                {info?.m ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>M. </b>ХБП
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* N */}
                {info?.n ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>N. </b> ХОБЛ или БА
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* O */}
                {info?.o ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>O. </b> Ковид-19
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* P */}
                {info?.p ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>P. </b> Врожденные и приобретенные пороки сердца
                    </p>
                    </div>
                ) : (
                    ""
                )}
                {/* Q */}
                {info?.q ? (
                    <div className="col-6">
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "10px" }}>
                        <b>Q. </b>Онкологические заболевания
                    </p>
                    </div>
                ) : (
                    ""
                )}
                </div>
        </div>
    );
}
export default View2;