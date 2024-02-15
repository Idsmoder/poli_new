import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";

const View2 = ({patient,info,setInfo}) => {
    
    return (
        <div>
            <h6 className="mt-1 fw-bold" style={{ fontSize: "15px" }}>
                Сопутствующие заболевания :
                </h6>
                <div className="row py-0 align-items-center">
                {/* A */}
                {info?.a ? (
                    <p className="m-0 ms-3 my-0" style={{ fontSize: "15px" }}>
                        <b>A. </b> Гипертоническая болезнь
                    </p>
                ) : (
                    ""
                )}
                {/* B */}
                {info?.b ? (
                    
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>B. </b> Ишемическая болезнь сердца. Стабильная стенокардия
                        нарушения
                    </p>
                    
                ) : (
                    ""
                )}
                {/* C */}
                {info?.c ? (
                    
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>C. </b> В анамнезе перенесенный ИМ
                    </p>
                    
                ) : (
                    ""
                )}
                {/* D */}
                {info?.d ? (
                    
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>D. </b>В анамнезе перенесенный ОНМК, ТИА
                    </p>
                   
                ) : (
                    ""
                )}
                {/* E */}
                {info?.e ? (
                    
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>E. </b> ХСН
                    </p>
                    
                ) : (
                    ""
                )}
                {/* F */}
                {info?.f ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>F. </b> Атеросклероз периферический многососудистый со
                        стенозом и/или
                    </p>
                ) : (
                    ""
                )}
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    <b>G. </b>Перенесенные операции на сердце и сосудах : 
                    {info?.g_ca || info?.g_pacemaker || info?.g_us ?
                    <></>: "Нет"}
                    {info?.g_ca ? "АКШ, " : ""}{info?.g_pacemaker ? "Стентирование КА, ":""}{info?.g_us? "Установка ЭКС или кардиовертера-дефибрилятора":""}
                    </p>
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                    <b>H. </b>Нарушения ритма : 
                    {info?.h_1 || info?.h_2 || info?.h_3 || info?.h_4 || info?.h_5 || info?.h_6 || info?.h_7 ? "": "Нет"}
                    {info?.h_1 ?"Экстрасистолия желудочковая, ":""}
                    {info?.h_2 ? "Экстрасистолия наджелудочковая, ":""}
                    {info?.h_3 ? "Пароксизмальная наджелудочковая тахикардия, ":""}
                    {info?.h_4 ? "я блокада правой ножки пучка Гисса, ":""}
                    {info?.h_5 ? "Полная блокада левой ножки пучка Гисса, ":""}
                    {info?.h_6 ? "Фибрилляция предсердий, ":""}
                    {info?.h_7 ? "Другие нарушения ритма":""}
                    
                    </p>
                {/* I */}
                {info?.i ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>I. </b> Сахарный диабет без осложнений
                    </p>
                ) : (
                    ""
                )}
                {/* K */}
                {info?.k ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>K. </b>Сахарный диабет с осложнениями
                    </p>
                ) : (
                    ""
                )}
                {/* L */}
                {info?.l ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>L. </b>Нарушение толерантности к глюкозе
                    </p>
                ) : (
                    ""
                )}
                {/* M */}
                {info?.m ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>M. </b>ХБП
                    </p>
                ) : (
                    ""
                )}
                {/* N */}
                {info?.n ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>N. </b> ХОБЛ или БА
                    </p>
                ) : (
                    ""
                )}
                {/* O */}
                {info?.o ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>O. </b> Ковид-19
                    </p>
                ) : (
                    ""
                )}
                {/* P */}
                {info?.p ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>P. </b> Врожденные и приобретенные пороки сердца
                    </p>
                ) : (
                    ""
                )}
                {/* Q */}
                {info?.q ? (
                    <p className="m-0 ms-3 my-2" style={{ fontSize: "15px" }}>
                        <b>Q. </b>Онкологические заболевания
                    </p>
                ) : (
                    ""
                )}
                </div>
        </div>
    );
}
export default View2;