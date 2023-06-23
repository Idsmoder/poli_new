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
        if (info?.stressLevel >= parseFloat(2.18) && info?.stressLevel >= parseFloat(3.00)) {
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
              <td>А</td>
              <td>{info?.mobility}</td>
            </tr>
            <tr>
              <td></td>
              <td>Б</td>
              <td>{info?.personalCare}</td>
            </tr>
            <tr>
              <td></td>
              <td>В</td>
              <td>{info?.dailyActivities}</td>
            </tr>
            <tr>
              <td></td>
              <td>Г</td>
              <td>{info?.painDiscomfort}</td>
            </tr>
            <tr>
              <td></td>
              <td>Д</td>
              <td>{info?.anxietyDepression}</td>
            </tr>
            <tr>
              <td></td>
              <td>Общий балл</td>
              <td>
                {info?.totalGrade}
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
