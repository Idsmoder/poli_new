import React from "react";

const View10 = ({ info,patient }) => {


  const stressLevelMeasure = () => {
    if (info?.stressLevel) {
      if (patient?.gender=="0") {
        if (info?.stressLevel >=parseFloat(0.00) && info?.stressLevel <= parseFloat(1.17)) {
          return "Низкий";
        }
        if (info?.stressLevel >= parseFloat(1.18) && info?.stressLevel <= parseFloat(2.17)) {
          return "Средний";
        }
        if (info?.stressLevel >= parseFloat(2.18) && info?.stressLevel <= parseFloat(3.00)) {
          return "Высокий ";
        }
      }else{
        if (info?.stressLevel >=parseFloat(0.00) && info?.stressLevel <= parseFloat(0.99)) {
          return "Низкий";
        }
        if (info?.stressLevel >= parseFloat(1.00) && info?.stressLevel <= parseFloat(1.99)) {
          return "Средний";
        }
        if (info?.stressLevel >= parseFloat(2.00) && info?.stressLevel >= parseFloat(3.00)) {
          return "Высокий ";
        }
          
      }
    }
  }
  const measure5d = (value) => {
    if (value) {
      if (value == 1) {
        return "нет нарушений";
      }
      if (value == 2) {
        return "есть умеренные нарушения";
      }
      if (value == 3) {
        return "есть выраженные нарушения";
      }
    }
  };
  const measureTotalGrade = (value) => {
    if (value) {
      if (value <= 5) {
        return "баллов нет нарушений";
      }
      if (value >= 6 && value <= 10) {
        return "баллов умеренные нарушения здоровья";
      }
      if (value >= 11 && value <= 15) {
        return "баллов выраженные нарушения здоровья";
      }
    }};
  return (
    <div>
      <div>
        <h6 className="mt-3 fw-bold" style={{ fontSize: "10px" }}>
          10. Оценка качеств жизни и уровня стресса.
        </h6>

        <table
          className="table table-bordered p-0"
          style={{ fontSize: "10px" }}
        >
          <thead>
            <tr>
              <th className="p-0 col-1">№</th>
              <th className="p-0">Показатели</th>
              <th className="p-0">Исходно</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Уровень стресса (Reeder L.)</td>
              <td>
                <p>{info?.stressLevel}-{stressLevelMeasure()}
                  
                </p>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Анкета оценки здоровья и качества жизни EQ–-5D</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>А. Подвижность (передвижение в пространстве)</td>
              <td>{info?.mobility}-{measure5d(info?.mobility)}</td>
            </tr>
            <tr>
              <td></td>
              <td>Б.Самообслуживание</td>
              <td>{info?.personalCare}-{measure5d(info?.personalCare)}</td>
            </tr>
            <tr>
              <td></td>
              <td>В. Активность в повседневной жизни</td>
              <td>{info?.dailyActivities}-{measure5d(info?.dailyActivities)}</td>
            </tr>
            <tr>
              <td></td>
              <td>Г. Наличие боли</td>
              <td>{info?.painDiscomfort}-{measure5d(info?.painDiscomfort)}</td>
            </tr>
            <tr>
              <td></td>
              <td>Д. Наличие дискомфорта и тревоги/депрессии</td>
              <td>{info?.anxietyDepression}-{measure5d(info?.anxietyDepression)}</td>
            </tr>
            <tr>
              <td></td>
              <td>Общий балл</td>
              <td>
                {info?.totalGrade}-{measureTotalGrade(info?.totalGrade)}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>EQ–VAS</td>
              <td>{info?.eqvas}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View10;
