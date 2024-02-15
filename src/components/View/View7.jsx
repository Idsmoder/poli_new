const View7 = ({patient,info,setInfo})=>{
  const hBmeasure = () => {

        if (info?.hb) {
          if (!patient?.gender) return "";
        if (patient?.gender === "1") {
          if (info?.hb === "") return "";
          if (info?.hb >= 120 && info?.hb <= 140) return "в норме";
          else return "снижение гемоглобина";
        }
        if (patient?.gender === "0") {
          if (info?.hb >= 130 && info?.hb <= 160) return "в норме";
          else return "снижение гемоглобина";
        }
          
        }else{
          return "";
        }
      };
      const creataninMeasure = () => {
        if (patient?.gender && info?.creatinine === "") return "";
        if (patient?.gender === "0") {
          if (info?.creatinine >= Number.parseFloat(53) && info?.creatinine <= Number.parseFloat(97))
            return "в норме";
          if (info?.creatinine < Number.parseFloat(53)) return "ниже нормы";
          if (info?.creatinine > Number.parseFloat(97)) return "повышение креатинина";
        }
        if (patient?.gender === "1") {
          if (info?.creatinine >= 44 && info?.creatinine <= 80)
            return "в норме";
          if (info?.creatinine < 44) return "ниже нормы";
          if (info?.creatinine > 80) return "повышение креатинина";
        }
      };
      const levelUricAcidMeasure = () => {
        if (info?.levelUricAcidSer) {
          if (patient?.gender && info?.levelUricAcidSer === "")
          return "";
        if (patient?.gender === "0") {
          if (
            patient?.age > 14 &&
            info?.levelUricAcidSer >= 150 &&
            info?.levelUricAcidSer <= 405
          )
            return "в норме";
          if (info?.levelUricAcidSer > 405) return "гиперурекимия";
          else return "ниже нормы";
        }
        if (patient?.gender === "1") {
          if (
            patient?.age > 14 &&
            info?.levelUricAcidSer >= 210 &&
            info?.levelUricAcidSer <= 458
          )
            return "в норме";
          if (info?.levelUricAcidSer > 458) return "гиперурекимия";
          else return "ниже нормы";
        }
        }else{
          return "";
        }
        
      };
      const totalCholesMeasure = () => {
        
        if (info?.totalCholesterol) {
          if (patient?.gender && info?.totalCholesterol === "")
          return "";
        if (patient?.gender) {
          if (
            info?.totalCholesterol >= parseFloat(3.2) &&
            info?.totalCholesterol <= parseFloat(5.4)
          )
            return "в норме";
          if (info?.totalCholesterol < parseFloat(3.2)) return "ниже нормы";
          else return "гиперхолестеринемия";
        }
        }else{
          return "";
        }
      };
      const triglyCeriyMeasure = () => {
        if (info?.triglycerides) {
          if (patient?.gender && info?.triglycerides === "") return "";
        if (patient?.gender) {
          if (
            info?.triglycerides >= Number(0.4) &&
            info?.triglycerides <= Number(1.7)
          )
            return "в норме";
          if (info?.triglycerides < Number(0.4)) return "ниже нормы";
          else return "гипертриглицеридэмия";
        }
        }else{
          return "";
        }
      };
      const lowDensityMeasure = () => {
        if (info?.lowDensityLipoprotein) {
          if (patient?.gender && info?.lowDensityLipoprotein === "")
          return "";
        if (patient?.gender === "0") {
          if (
            info?.lowDensityLipoprotein >= Number(1.9) &&
            info?.lowDensityLipoprotein <= Number(3.5)
          )
            return "норма";
          if (info?.lowDensityLipoprotein > Number(3.5))
            return "гиперлипидемия";
          else return "ниже нормы";
        }
        if (patient?.gender === "1") {
          if (
            info?.lowDensityLipoprotein >= Number(2.2) &&
            info?.lowDensityLipoprotein <= Number(3.38)
          )
            return "норма";
          if (info?.lowDensityLipoprotein > Number(3.38))
            return "гиперлипидемия";
          else return "ниже нормы";
        }
        }else{
          return "";
        }
      };
      const highDensityMeasure = () => {
        if (info?.highDensityLipoprotein) {
          if (patient?.gender && info?.highDensityLipoprotein === "")
          return "";
        if (patient?.gender === "0") {
          if (
            info?.highDensityLipoprotein >= Number(1.15) &&
            info?.highDensityLipoprotein <= Number(2.3)
          )
            return "норма";
          if (info?.highDensityLipoprotein < Number(1.15))
            return "дислипидемия ";
          else return "выще нормы";
        }
        if (patient?.gender === "1") {
          if (
            info?.highDensityLipoprotein >= Number(0.9) &&
            info?.highDensityLipoprotein <= Number(1.7)
          )
            return "норма";
          if (info?.highDensityLipoprotein < Number(0.9))
            return "дислипидемия";
          else return "выще нормы";
        }
        }else{
          return "";
        }
      };
      const coeffAtherogenicityMeasure = () => {
        if (info?.highDensityLipoprotein>0) {
          let coef = info?.coeffAtherogenicity
          if (patient?.gender==1) {
            if (coef<2.2) {
              return "";
            }
            if (coef > 2.2 && coef< 3.5) {
              return "в норме"
            }
            if (coef>3.5) {
              return "гиперлипидемия"
            }
          }
          if (patient?.gender==0) {
            if (coef<2.2) {
              return ""
            }
            if (coef>2.2 && coef<3.3) {
              return " в норме"
            }
            if (coef>3.3) {
              return "гиперлипидемия"
            }
          }
        }
      };
      const prothrombinTimeMeasure = () => {
       if (info?.prothrombinTime) {
        if (patient?.gender && info?.prothrombinTime === "")
        return "";
      if (patient?.gender) {
        if (
          info?.prothrombinTime >= parseFloat(12.0) &&
          info?.prothrombinTime <= parseFloat(18.0)
        )
          return "норма";
        if (info?.prothrombinTime < parseFloat(12.0)) return "ниже нормы";
        else return "выше нормы";
      }
        
       }else{
          return "";
       }
      };
      const homocysteineMeasure = () => {
        if (info?.homocysteine) {
          if (patient?.gender && info?.homocysteine === "") return "";
        if (patient?.gender === "0") {
          if (
            info?.homocysteine >= parseFloat(4.6) &&
            info?.homocysteine <= parseFloat(12.4)
          )
            return "норма";
          if (info?.homocysteine < parseFloat(4.6)) return "ниже нормы";
          else return "выше нормы";
        }
        if (patient?.gender === "1") {
          if (
            info?.homocysteine >= parseFloat(6.2) &&
            info?.homocysteine <= parseFloat(15)
          )
            return "норма";
          if (info?.homocysteine < parseFloat(6.2)) return "ниже нормы";
          else return "выше нормы";
        }
          
        }else{
          return "";
        }
      };
      const rapidGlomFiltMeasure = () => {
        let ckdEpi;
        if (patient?.gender && info?.creatinine === "") return "";
        // Women
        if (patient?.gender === "1") {
          if (info?.creatinine === "") return "";
          if (info?.creatinine <= 62) {
            return (ckdEpi =
              ((144 *
                (0.993 * patient?.age) *
                (info?.creatinine / 88.4)) /
                0.7) **
              (-0.328)).toFixed(2);
          }
          if (info?.creatinine >= 62) {
            return (ckdEpi =
              ((144 *
                (0.993 * patient?.age) *
                (info?.creatinine / 88.4)) /
                (0.7)) **
              (-1.210)).toFixed(2);
          }
        }
        // Men
        if (patient?.gender === "0") {
          if (info?.creatinine === "") return "";
          if (info?.creatinine <= 80) {
            return (ckdEpi =
              ((141 *
                (0.993 * patient?.age) *
                (info?.creatinine / 88.4)) /
                0.9) **
              -0.412).toFixed(2);
          }
          if (info?.creatinine >= 80) {
            return (ckdEpi =
              ((144 *
                (0.993 * patient?.age) *
                (info?.creatinine / 88.4)) /
                0.7) **
              -1.21).toFixed(2);
          }
        }
      };
      const redBloodCellsMeasure = () => {
        if (info?.redBloodCells) {
          if (patient?.gender && info?.redBloodCells) {
            if (info?.gender=="1") {
              if (info?.redBloodCells >= Number.parseFloat(4.0) && info?.redBloodCells <= Number.parseFloat(5.0)) {
                return "в норме";
              }else if(info?.redBloodCells < Number.parseFloat(4.0)){
                return "снижение эритроцитов";
              }
            }else{
              if (info?.redBloodCells >= Number.parseFloat(4.5) && info?.redBloodCells <= Number.parseFloat(5.5)) {
                return "в норме";
              }else if(info?.redBloodCells < Number.parseFloat(4.5)){
                return "снижение эритроцитов";
              }
            }
          }
        }else{
          return "";
        }
      } 
      const leukocytesMeasure = () => {
        if (String(info?.leukocytes)) {
          if (String(info?.leukocytes)< Number.parseFloat(5.0)) {
            return "снижение ниже";
          }else if(String(info?.leukocytes) >=Number.parseFloat(5.0) && String(info?.leukocytes) <=Number.parseFloat(10.0)){
            return "в норме";
          }else if(String(info?.leukocytes) > Number.parseFloat(10.0)){
            return "повышение";
          }
        }else{
          return "";
        }
      }
      const plateletsMeasure = () => {
        if (info?.platelets) {
          if (info?.platelets < Number.parseFloat(150)) {
            return "снижение ниже";
          }else if (info?.platelets>Number.parseFloat(400)) {
            return "повышение выше";
          }else if (info?.platelets<=Number.parseFloat(150) || info?.platelets <= Number.parseFloat(400)) {
            return "в норме";
          }
          }else{
            return "";
          }
        }
        const speedBloodMeasure = () => {

          if (info?.speedBlood) {
            if (patient?.gender && info?.speedBlood){
              if (patient?.gender=="1") {
               if (info?.speedBlood>Number.parseFloat(10)) {
                  return "повышение";
                }else if (info?.speedBlood<Number.parseFloat(2)) {
                  return "снижение ниже";
                }else if (info?.speedBlood>=Number.parseFloat(2) && info?.speedBlood<=Number.parseFloat(10)) {
                  return "в норме";
                }
                }else{
                  if (info?.speedBlood>=Number.parseFloat(2) && info?.speedBlood<=Number.parseFloat(15)) {
                    return "в норме";
                  }else if (info?.speedBlood>Number.parseFloat(15)) {
                    return "повышение";
                  }else if (info?.speedBlood<Number.parseFloat(2)) {
                    return "снижение ниже";
                  }
                }
              }
            }else{
              return "";
            }
          }
          const glucoseMeasure = () => {
            if (info?.glucose) {
              if (info?.glucose>=Number.parseFloat(4.1) && info?.glucose<=Number.parseFloat(6.1)) {
                return "в норме";
              }else if (info?.glucose>Number.parseFloat(6.1)) {
                return "повышение выше";
              }else if (info?.glucose<Number.parseFloat(4.1)) {
                return "снижение ниже";
              }
            }else{
              return "";
            }
          }
      return (
        <div>
          <div>
            <h6 className="mt-1 fw-bold" style={{ fontSize: "10px" }}>
              7. Лабораторные данные:
            </h6>
            <table
              className="table table-bordered p-0"
              style={{ fontSize: "15px" }}
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
                  <td>1</td>
                  <td>Гемоглобин,г/л </td>
                  <td>
                    <p>{info?.hb}-{hBmeasure()}</p>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Эритроциты,1012/л</td>
                  <td>
                  {info?.redBloodCells}-{redBloodCellsMeasure()}
                    
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Лейкоциты, 109/л </td>
                  <td>
                  {info?.leukocytes}-{leukocytesMeasure()}
                    
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Тромбоциты, 109/л</td>
                  <td>
                  {info?.platelets}-{plateletsMeasure()}
                   
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>СОЭ, мм/час</td>
                  <td>
                  {info?.speedBlood}-{speedBloodMeasure()}
                    
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Глюкоза в крови, ммоль/л</td>
                  <td>
                  {info?.glucose}-{glucoseMeasure()}
                    
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>С-реактивный белок, мг/л</td>
                  <td>
                  {info?.cReactive}-
                    {patient?.gender && info?.cReactive === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : info?.cReactive >= 0 && info?.cReactive <= 5
                      ? "в норме"
                      : info?.cReactive > 5
                      ? "повышение"
                      : ""}
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Мочевина, ммоль/л</td>
                  <td>
                  {info?.urea}-
                    {patient?.gender && info?.urea === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : info?.urea >= "2.5" && info?.urea <= "7.5"
                      ? "в норме"
                      : info?.urea > "7.5"
                      ? "повышение"
                      : ""}
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Креатинин, мкмоль/л</td>
                  <td>{info?.creatinine}-{creataninMeasure()}</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>СКФ, мл/мин/1,73 м2</td>
                  <td>{info?.rapidGlomFilt}{' мкмоль/л'}
                  -{
                    info?.rapidGlomFilt> 90 ? "Нормальная СКФ-ХБП-1"
                    : info?.rapidGlomFilt < 90 && info?.rapidGlomFilt > 60 ?  " Признаки нефропатии, легкое снижение СКФ-ХБП-2"
                    : info?.rapidGlomFilt < 60 && info?.rapidGlomFilt >=45 ? " Умеренное снижение СКФ-ХБП-3A "
                    : info?.rapidGlomFilt < 45 && info?.rapidGlomFilt > 30 ? " Выраженное снижение СКФ-ХБП-3Б"
                    : info?.rapidGlomFilt < 31 && info?.rapidGlomFilt > 15 ? " Тяжелое снижение СКФ-ХБП-4"
                    : info?.rapidGlomFilt < 16 ? "Терминальная хроническая почечная недостаточность-ХБП-5"
                    :""
                  }</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>АЛТ, ед/л</td>
                  <td>{info?.alt}</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>АСТ, ед/л</td>
                  <td>{info?.ast}</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Мочевая кислота мкмоль/л</td>
                  <td>{info?.levelUricAcidSer}-{levelUricAcidMeasure()}</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Общий холестерин ммоль/л</td>
                  <td>{info?.totalCholesterol}-{totalCholesMeasure()}</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Триглицериды, ммоль/л</td>
                  <td>{info?.triglycerides}-{triglyCeriyMeasure()}</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>ЛПНП, ммоль/л</td>
                  <td>{info?.lowDensityLipoprotein}-{lowDensityMeasure()}</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>ЛПВП, ммоль/л</td>
                  <td>{info?.highDensityLipoprotein}-{highDensityMeasure()}</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>ХС-неЛПВП</td>
                  <td>
                    {info?.cHighDensityLipoprotein}
                  </td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Коэффицент атерогенности</td>
                  <td>{info?.coeffAtherogenicity}-{coeffAtherogenicityMeasure()}</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Протромбиновое время, сек</td>
                  <td>{info?.prothrombinTime}-{prothrombinTimeMeasure()}</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>ПТИ, %</td>
                  <td>
                  {info?.pti}-
                    {patient?.gender && info?.pti === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : (patient?.gender &&
                          info?.pti >= 80 &&
                          info?.pti <= 127 &&
                          "в норме") ||
                        (info?.pti > 127 && "повышена") ||
                        (info?.pti < 80 && "снижена")}
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Межд нормализованное отношение</td>
                  <td>
                  {info?.interNormRel}-
                    {patient?.gender && info?.interNormRel === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : (patient?.gender &&
                          info?.interNormRel >= parseFloat(0.85) &&
                          info?.interNormRel <= parseFloat(1.15) &&
                          "в норме") ||
                        (info?.interNormRel < parseFloat(0.85) && "снижен ") ||
                        (info?.interNormRel > parseFloat(1.15) && "повыщен")}
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Фибриноген</td>
                  <td>
                  {info?.fibrinogen}-
                    {patient?.gender && info?.fibrinogen === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : (patient?.gender &&
                          info?.fibrinogen >= parseFloat(2.0) &&
                          info?.fibrinogen <= parseFloat(4.0) &&
                          "в норме") ||
                        (info?.fibrinogen < parseFloat(2.0) && "ниже нормы ") ||
                        (info?.fibrinogen > parseFloat(4.0) && "выще нормы ")}
                  </td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Гомоцистеин</td>
                  <td>{info?.homocysteine} мкмоль/л  {homocysteineMeasure()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
}
export default View7