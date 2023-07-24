const View6 = ({patient,info,setInfo} )=>{

    const count = 1;
  const measureSadAndDad = () => {
    if (info?.sad === "") return "";
    if (info?.sad < 120 && info?.dad < 80)
      return "Оптимальное АД";
    if (info?.sad < 130 && info?.dad < 85) return "Нормальное АД";
    if (
      info?.sad > 130 &&
      info?.sad < 139 &&
      info?.dad > 85 &&
      info?.dad < 89
    )
      return "Высокое нормальное АД";
    if (
      info?.sad > 140 &&
      info?.sad < 159 &&
      info?.dad > 90 &&
      info?.dad < 99
    )
      return "АГ 1 степени";
    if (
      info?.sad > 160 &&
      info?.sad < 179 &&
      info?.dad > 100 &&
      info?.dad < 109
    )
      return "АГ 2 степени";
    if (info?.sad >= 180 && info?.dad >= 110)
      return "АГ 3 степени";
    if (info?.sad >= 140 && info?.dad <= 90)
      return "Изолированная систолическая АГ";
  };

  const adMerge = (ad) => {
    if (ad === 0) return "";
    if (ad === 40 || ad <= 50) return "АД пульсовое в норме";
    if (ad < 40) return "АД пульсовое сниженное";
    if (ad > 50) return "Изолированная Систолическая гипертензия";
    return;
  };
  const pulsMerge = (ad) => {
    if (ad === 0 || ad === "") return "";
    if (ad >= 60 && ad <= 90) return "В норме";
    if (ad < 60) return "брадикардия ";
    if (ad > 90) return "Тахикардия ";
    return;
  };
  return (
    <div>
      <div>
        <h6 className="mt-3 fw-bold" style={{ fontSize: "10px" }}>
          6. Гемодинамические показатели и показатели объективного статуса:
          {/* {age <= 15 && info.grow <= 140 ? info.tab6[0].adp : "no test"} */}
        </h6>
        <table
          className="table table-bordered p-0"
          style={{ fontSize: "10px" }}
        >
          <thead>
            <tr>
              <th className="p-0 col-1">№ п/п</th>
              <th className="p-0">Показатели</th>
              <th className="p-0">Исходно</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{count}</td>
              <td>САД мм.рт.ст</td>
              <td>{info?.sad}-{measureSadAndDad()}</td>
            </tr>
            <tr>
              <td>{count +1}</td>
              <td>ДАД мм.рт.ст</td>
              <td>{info?.dad}-{measureSadAndDad()}</td>
            </tr>
            <tr>
              <td>{count + 1}</td>
              <td>Пульс (ЧСС) уд.в мин</td>
              <td>{info?.chcc}-{pulsMerge(info?.chcc)}</td>
            </tr>
            <tr>
              <td>{count + 1}</td>
              <td>АД пульсовое (АДП)</td>
              <td>{info?.sad - info?.dad}-{adMerge(info?.sad - info?.dad)}</td>
            </tr>
            <tr>
              <td>{count + 1 }</td>
              <td>РО2 %</td>
              <td>
              {info?.po2Saturation}-
                {info?.po2Saturation?.length > 0 &&
                info?.po2Saturation > 94
                  ? "Сатурация в норме"
                  : ""}
                {info?.po2Saturation?.length > 0 &&
                info?.po2Saturation < 95
                  ? "Снижение сатурации"
                  : ""}
                 
              </td>
            </tr>
            <tr>
              <td>{count + 1 }</td>
              <td>ЧДД</td>
              <td>
              {info?.chdd}-
                {(info?.chdd === "0" && "везикулярное") ||
                  (info?.chdd === "1" && "ослабленное ") ||
                  (info?.chdd === "2" && "усиленное") ||
                  (info?.chdd === "3" && "жесткое")}
                  
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Аускультация легкие</td>
              <td>
                {info?.auscultationBreathing === "1"
                  ? "везикулярное"
                  : "" || info?.auscultationBreathing === "2"
                  ? "ослабленное"
                  : "" || info?.auscultationBreathing === "3"
                  ? "усиленное"
                  : "" || info?.auscultationBreathing === "4"
                  ? "жесткое"
                  : "" || info?.auscultationBreathing === "5"
                  ? "бронхиальное дыхание"
                  : "" || info?.auscultationBreathing === "6"
                  ? "Затрудненный и удлиненный выдох"
                  : ""}
                  {info?.chdd_1 ? "везикулярное, ":""}
                  {info?.chdd_2 ? "ослабленное, ":""}
                  {info?.chdd_3 ? "усиленное, ":""}
                  {info?.chdd_4 ? "жесткое, ":""}
                  {info?.chdd_5 ? "бронхиальное дыхание, ":""}
                  {info?.chdd_6 ? "Затрудненный и удлиненный выдох, ":""}
                  
              </td>
            </tr>
            <tr>
              <td>{count + 1 }</td>
              <td>Наличие хрипов</td>
              <td>
                {info?.wheezing_1== "1" ? "нет" : ""}
                {info?.wheezing_2== 1 ? "Хрипы сухие, " :""}
                {info?.wheezing_3== 1 ? "Хрипы влажные, " :"" }
                {info?.wheezing_4== "1" ? "крепитация, " :""}
                {info?.wheezing_5== "1" ? "шум трения плевры, " :""}
                {info?.wheezing_6== "1" ? "плевроперикардиальный шум с точной локализацией найденных шумов по межреберьям и топографическим линиям" : ""
                }
              </td>
            </tr>
            <tr>
              <td>{count + 1}</td>
              <td>Аускультация сердце</td>
              <td>
                {(info?.corTones === "1" && "ясные") ||
                  (info?.corTones === "2" && "приглушены") ||
                  (info?.corTones === "3" && "глухие")}
              </td>
            </tr>
            <tr>
              <td>{count + 1}</td>
              <td>Наличие отеков</td>
              <td>
                {
                  info?.presenceEdema === "1"
                  ? "да"
                  : "нет"}
              </td>
            </tr>
            <tr>
              <td>{count + 1}</td>
              <td>Шум</td>
              <td>
                {info?.noise=="1" ? "нет" : "Есть"}
              </td>
            </tr>
            {info?.noise_systolic ? 
              <tr>
                <td>{count + 1}</td>
                <td>Шум систолический</td>
                <td>{info?.noise_systolic_top ? "на верхушке, " :""}
                {info?.noise_systolic_aorta ? "на аорте, " :""}
                {info?.noise_systolic_pulmonary ? "на легочной артерии, " :""}
                {info?.noise_systolic_tricuspid ? "на трикуспидальном клапане"
                :""}
              </td>
              </tr>
            :""}
            {info?.noise_diastolic ?
              <tr>
                <td>{count + 1 }</td>
                <td>Шум диастолический</td>
                <td>{info?.noise_diastolic_top ? "на верхушке, " :""}
                {info?.noise_diastolic_aorta ? "на аорте, " :""}
                {info?.noise_diastolic_pulmonary ? "на легочной артерии, " :""}
                {info?.noise_diastolic_tricuspid ? "на трикуспидальном клапане"
                :""}
              </td>
              </tr>
            :""}  
          
            <tr>
              <td>{count + 1 }</td>
              <td>Дополнения</td>
              <td>{info?.noiseComment}</td>
            </tr>
            <tr>
              <td>{count + 1 }</td>
              <td>ПСВ мл/мин</td>
              <td>{info?.psv}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default View6;