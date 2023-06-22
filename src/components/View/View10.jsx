import React from "react";

const View10 = ({ info }) => {
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
                <p>
                  {parseFloat(
                    (Number(info?.stress1) +
                      Number(info?.stress2) +
                      Number(info?.stress3) +
                      Number(info?.stress4) +
                      Number(info?.stress5) +
                      Number(info?.stress6) +
                      Number(info?.stress7)) /
                      7
                  ).toFixed(4)}
                </p>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Анкета оценки здоровья и качества жизни EQ–-5D</td>
              <td>{}</td>
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
                {parseFloat(
                  (Number(info?.mobility) +
                    Number(info?.personalCare) +
                    Number(info?.dailyActivities) +
                    Number(info?.painDiscomfort) +
                    Number(info?.anxietyDepression)) /
                    5
                ).toFixed(4)}
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
