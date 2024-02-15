
import { useParams } from "react-router-dom";

const View1 = ({patient,info,setInfo}) => {
    return (
        <>
            <div>
                <div>
                    <h6 className="mt-3 fw-bold" style={{ fontSize: "15px" }}>
                    Клиническая характеристика больного:
                    </h6>

                    <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
                    <h6 className="m-0" style={{ fontSize: "15px" }}>
                        Общее состояние:
                    </h6>
                    <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                        {!info?.general_state
                        ? ""
                        : info?.general_state === "1"
                        ? "относительно удовлетворительное"
                        : info?.general_state === "2"
                        ? "средней тяжести"
                        : "тяжелое"}
                    </p>
                    </div>

                    {/* Жалобы */}
                    <h6 className="mt-3 fw-bold" style={{ fontSize: "15px" }}>
                    Жалобы
                    </h6>
                    {/* Одышка */}
                    <div className="row">
                    <div className="col-3">
                        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
                        <h6 className="m-0" style={{ fontSize: "15px" }}>
                            Одышка:
                        </h6>
                        <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                            {!info?.complaints_shortness
                            ? ""
                            : info?.complaints_shortness === "1"
                            ? "легкая"
                            : info?.complaints_shortness === "2"
                            ? "умеренная"
                            : info?.complaints_shortness === "3"
                            ? "выраженная"
                            : "нет"}
                        </p>
                        </div>
                    </div>

                    {/* Боли в области сердца */}
                    <div className="col-3">
                        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
                        <h6 className="m-0" style={{ fontSize: "15px" }}>
                            Cердцебиение:
                        </h6>
                        <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                            {!info?.heartbeat
                            ? "нет"
                            : info?.heartbeat === 1
                            ? "есть"
                            : "нет"}
                        </p>
                        </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-6">
                        {/* головные боли */}
                        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
                        <h6 className="m-0" style={{ fontSize: "15px" }}>
                            Боли в области сердца:
                        </h6>
                        <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                            {!info?.headache
                            ? ""
                            : info?.headache === "1"
                            ? "при физической нагрузкее"
                            : info?.headache === "2"
                            ? "при психоэмоциональном перенапряжении"
                            : info?.headache === "3"
                            ? "не связанные с физической нагрузкой в положении покоя"
                            : "нет"}
                        </p>
                        </div>
                    </div>
                    <div className="col-6">
                        {/* головокружения */}
                        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
                        <h6 className="m-0" style={{ fontSize: "15px" }}>
                            Головные боли:
                        </h6>
                        <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                            {!info?.pain_heart
                            ? ""
                            : info?.pain_heart === "1"
                            ? "есть"
                            : "нет"}
                        </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        {/* головокружения */}
                        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
                            <h6 className="m-0" style={{ fontSize: "15px" }}>
                            Головокружения:
                            </h6>
                            <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                            {!info?.dizziness
                                ? ""
                                : info?.dizziness === "1"
                                ? "есть"
                                : "нет"}
                            </p>
                        </div>
                        </div>

                        {/* подъёмы АД */}
                        <div className="col-6">
                        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
                            <h6 className="m-0" style={{ fontSize: "15px" }}>
                            Подъёмы АД:
                            </h6>
                            <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                            {!info?.ad
                                ? ""
                                : info?.ad === "1"
                                ? "нет"
                                : info?.ad === "2"
                                ? "до 140/90 мм.рт.ст."
                                : info?.ad === "3"
                                ? "до 160/100 мм.рт.ст."
                                : info?.ad === "4"
                                ? "до 180/100 мм.рт.ст"
                                : ""}
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex ms-3 align-items-center py-0 border-bottom border-1">
                        <h6 className="m-0" style={{ fontSize: "15px" }}>
                            Дополнительные жалобы:
                        </h6>
                        <p className="m-0 ms-3" style={{ fontSize: "15px" }}>
                            {info?.ad_text}
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </>
    );
   
}
export default View1;