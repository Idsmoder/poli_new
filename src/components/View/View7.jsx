const View7 = ({patient,info,setInfo})=>{
    const hBmeasure = () => {
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
      };
      const creataninMeasure = () => {
        if (patient?.gender && info?.creatinine === "") return "";
        if (patient?.gender === "1") {
          if (info?.creatinine >= 53 && info?.creatinine <= 97)
            return "в норме";
          if (info?.creatinine < 53) return "ниже нормы";
          if (info?.creatinine > 97) return "повышение креатинина";
        }
        if (patient?.gender === "0") {
          if (info?.creatinine >= 44 && info?.creatinine <= 80)
            return "в норме";
          if (info?.creatinine < 44) return "ниже нормы";
          if (info?.creatinine > 80) return "повышение креатинина";
        }
      };
      const levelUricAcidMeasure = () => {
        if (patient?.gender && info?.levelUricAcidSer === "")
          return "";
        if (patient?.gender === "1") {
          if (
            patient?.age > 14 &&
            info?.levelUricAcidSer >= 150 &&
            info?.levelUricAcidSer <= 405
          )
            return "в норме";
          if (info?.levelUricAcidSer > 405) return "гиперурекимия";
          else return "ниже нормы";
        }
        if (patient?.gender === "0") {
          if (
            patient?.age > 14 &&
            info?.levelUricAcidSer >= 210 &&
            info?.levelUricAcidSer <= 458
          )
            return "в норме";
          if (info?.levelUricAcidSer > 458) return "гиперурекимия";
          else return "ниже нормы";
        }
      };
      const totalCholesMeasure = () => {
        if (patient?.gender && info?.totalCholesterol === "")
          return "";
        if (patient?.gender) {
          if (
            info?.totalCholesterol >= parseFloat(3.2) &&
            info?.totalCholesterol <= parseFloat(5.4)
          )
            return "в норме";
          if (info?.totalCholesterol < parseFloat(3.2)) return "ниже нормы";
          else return "гиперхолостеринемия";
        }
      };
      const triglyCeriyMeasure = () => {
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
      };
      const lowDensityMeasure = () => {
        if (patient?.gender && info?.lowDensityLipoprotein === "")
          return "";
        if (patient?.gender === "1") {
          if (
            info?.lowDensityLipoprotein >= Number(1.9) &&
            info?.lowDensityLipoprotein <= Number(3.5)
          )
            return "норма";
          if (info?.lowDensityLipoprotein > Number(3.5))
            return "гиперлипидемия";
          else return "ниже нормы";
        }
        if (patient?.gender === "0") {
          if (
            info?.lowDensityLipoprotein >= Number(2.2) &&
            info?.lowDensityLipoprotein <= Number(3.38)
          )
            return "норма";
          if (info?.lowDensityLipoprotein > Number(3.38))
            return "гиперлипидемия";
          else return "ниже нормы";
        }
      };
      const highDensityMeasure = () => {
        if (patient?.gender && info?.highDensityLipoprotein === "")
          return "";
        if (patient?.gender === "1") {
          if (
            info?.highDensityLipoprotein >= Number(1.15) &&
            info?.highDensityLipoprotein <= Number(2.3)
          )
            return "норма";
          if (info?.highDensityLipoprotein < Number(1.15))
            return "дислипидемия ";
          else return "выще нормы";
        }
        if (patient?.gender === "0") {
          if (
            info?.highDensityLipoprotein >= Number(0.9) &&
            info?.highDensityLipoprotein <= Number(1.7)
          )
            return "норма";
          if (info?.highDensityLipoprotein < Number(0.9))
            return "дислипидемия";
          else return "выще нормы";
        }
      };
      const coeffAtherogenicityMeasure = () => {
        if (patient?.gender && info?.coeffAtherogenicity === "")
          return "";
        if (patient?.gender === "1") {
          if (
            info?.coeffAtherogenicity >= parseFloat(2.2) &&
            info?.coeffAtherogenicity <= parseFloat(3.3)
          )
            return "в норме";
          if (info?.coeffAtherogenicity < parseFloat(2.2))
            return "ниже нормы";
          else return "гиперлипидемия";
        }
        if (patient?.gender === "0") {
          if (
            info?.coeffAtherogenicity >= parseFloat(2.2) &&
            info?.coeffAtherogenicity <= parseFloat(3.5)
          )
            return "в норме";
          if (info?.coeffAtherogenicity < parseFloat(2.2))
            return "ниже нормы";
          else return "гиперлипидемия";
        }
      };
      const prothrombinTimeMeasure = () => {
        if (patient?.gender && info?.prothrombinTime === "")
          return "";
        if (patient?.gender) {
          if (
            info?.prothrombinTime >= parseFloat(12.0) &&
            info?.prothrombinTime <= parseFloat(18.0)
          )
            return "норма";
          if (info?.prothrombinTime < parseFloat(12.0)) return "ниже нормы";
          else return "выще нормы";
        }
      };
      const homocysteineMeasure = () => {
        if (patient?.gender && info?.homocysteine === "") return "";
        if (patient?.gender === "1") {
          if (
            info?.homocysteine >= parseFloat(4.6) &&
            info?.homocysteine <= parseFloat(12.4)
          )
            return "норма";
          if (info?.homocysteine < parseFloat(4.6)) return "ниже нормы";
          else return "вище нормы";
        }
        if (patient?.gender === "0") {
          if (
            info?.homocysteine >= parseFloat(6.2) &&
            info?.homocysteine <= parseFloat(15)
          )
            return "норма";
          if (info?.homocysteine < parseFloat(6.2)) return "ниже нормы";
          else return "вище нормы";
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
                0.7) *
              -0.328).toFixed(2);
          }
          if (info?.creatinine >= 62) {
            return (ckdEpi =
              ((144 *
                (0.993 * patient?.age) *
                (info?.creatinine / 88.4)) /
                0.7) *
              -1.21).toFixed(2);
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
                0.9) *
              -0.412).toFixed(2);
          }
          if (info?.creatinine >= 80) {
            return (ckdEpi =
              ((144 *
                (0.993 * patient?.age) *
                (info?.creatinine / 88.4)) /
                0.7) *
              -1.21).toFixed(2);
          }
        }
      };
      return (
        <div>
          <div>
            <h6 className="mt-3 fw-bold" style={{ fontSize: "10px" }}>
              7. Лабораторные данные:
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
                  <td>1</td>
                  <td>Гемоглобин</td>
                  <td>
                    <p>{hBmeasure()}-({info?.hb})</p>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Эритроциты</td>
                  <td>
                    {patient?.gender && info?.redBloodCells === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : patient?.gender === "1" &&
                        info?.redBloodCells >= "4.0" &&
                        info?.redBloodCells <= "5.0"
                      ? "в норме"
                      : "снижение эритроцитов" &&
                        info?.redBloodCells >= "4.5" &&
                        info?.redBloodCells <= "5.5"
                      ? "в норме"
                      : "снижение эритроцитов"}-({info?.redBloodCells})
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Лейкоциты </td>
                  <td>
                    {patient?.gender && info?.leukocytes === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : patient?.gender &&
                        info?.leukocytes >= 5 &&
                        info?.leukocytes <= 10
                      ? "в норме"
                      : info?.leukocytes > 10
                      ? "повышение лейкоцитов"
                      : "снижение лейкоцитов"}-({info?.leukocytes})
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Тромбоциты</td>
                  <td>
                    {patient?.gender && info?.platelets === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : patient?.gender &&
                        info?.platelets >= 150 &&
                        info?.platelets <= 400
                      ? "в норме"
                      : info?.platelets > 400
                      ? "повышение тромбоциты"
                      : "снижение тромбоциты"}-({info?.platelets})
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>СОЭ</td>
                  <td>
                    {patient?.gender && info?.speedBlood === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : patient?.gender === "1"
                      ? info?.speedBlood >= 2 &&
                        info?.speedBlood <= 15
                        ? "в норме"
                        : info?.speedBlood > 15
                        ? "повышение "
                        : "снижение "
                      : info?.speedBlood >= 2 &&
                        info?.speedBlood <= 10
                      ? "в норме"
                      : info?.speedBlood > 10
                      ? "повышение "
                      : "снижение "}-({info?.speedBlood})
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Глюкоза в крови</td>
                  <td>
                    {patient?.gender && info?.glucose === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : patient?.gender &&
                        info?.glucose >= "4.1" &&
                        info?.glucose <= "6.1"
                      ? "в норме"
                      : info?.glucose >= "6.2"
                      ? "гиперликемия"
                      : "снижение глюкозы"}-({info?.glucose})
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>С-реактивный белок</td>
                  <td>
                    {patient?.gender && info?.cReactive === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : info?.cReactive > 0 && info?.cReactive <= 5
                      ? "в норме"
                      : info?.cReactive > 5
                      ? "повышения"
                      : ""}-({info?.cReactive})
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Мочевина</td>
                  <td>
                    {patient?.gender && info?.urea === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : info?.urea >= "2.5" && info?.urea <= "7.5"
                      ? "в норме"
                      : info?.urea > "7.5"
                      ? "повышения"
                      : ""}-({info?.urea})
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Креатинин</td>
                  <td>{creataninMeasure()}-({info?.creatinine})</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>СКФ</td>
                  <td>{rapidGlomFiltMeasure()}-({info?.rapidGlomFilt})</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>АЛТ</td>
                  <td>{info?.alt}</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>АСТ</td>
                  <td>{info?.ast}</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Уров. мочевой кис. в сыворотке крови</td>
                  <td>{levelUricAcidMeasure()}-({info?.levelUricAcidSer})</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Общий холестерин</td>
                  <td>{totalCholesMeasure()}-({info?.totalCholesterol})</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Триглицериды</td>
                  <td>{triglyCeriyMeasure()}-({info?.triglycerides})</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>ЛПНП</td>
                  <td>{lowDensityMeasure()}-{info?.lowDensityLipoprotein}</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>ЛПВП</td>
                  <td>{highDensityMeasure()}-({info?.highDensityLipoprotein})</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>ХС-ЛПВП</td>
                  <td>
                    {(
                      info?.totalCholesterol -
                      info?.highDensityLipoprotein
                    ).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Коэффицент атерогенности</td>
                  <td>{coeffAtherogenicityMeasure()}-({info?.coeffAtherogenicity})</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Протромбиновое время</td>
                  <td>{prothrombinTimeMeasure()}-({info?.prothrombinTime})</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>ПТИ</td>
                  <td>
                    {patient?.gender && info?.pti === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : (patient?.gender &&
                          info?.pti >= 80 &&
                          info?.pti <= 127 &&
                          "в норме") ||
                        (info?.pti > 127 && "повышена") ||
                        (info?.pti < 80 && "снижена")}-({info?.pti})
                  </td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Межд нормализованное отношение</td>
                  <td>
                    {patient?.gender && info?.interNormRel === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : (patient?.gender &&
                          info?.interNormRel >= "0.85" &&
                          info?.interNormRel <= "1.15" &&
                          "в норме") ||
                        (info?.interNormRel < "0.85" && "снижен ") ||
                        (info?.interNormRel > "1.15" && "повыщен")}-({info?.interNormRel})
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Фибриноген</td>
                  <td>
                    {patient?.gender && info?.fibrinogen === ""
                      ? ""
                      : !patient?.gender
                      ? ""
                      : (patient?.gender &&
                          info?.fibrinogen >= "2.0" &&
                          info?.fibrinogen <= "4.0" &&
                          "в норме") ||
                        (info?.fibrinogen < "2.0" && "ниже нормы ") ||
                        (info?.fibrinogen > "4.0" && "выще нормы ")}-({info?.fibrinogen})
                  </td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Гомоцистеин</td>
                  <td>{homocysteineMeasure()}-({info?.homocysteine})</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
}
export default View7