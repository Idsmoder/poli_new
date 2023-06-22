import React from "react";

export const View11 = ({ info }) => {
  return (
    <div>
      <div>
        <h6 className="mt-3 fw-bold" style={{ fontSize: "10px" }}>
          11. Расчетные показатели:
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
              <td>АП</td>
              <td>
                <p>{info?.stressLevel}</p>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>SCORE2-OP (старше 40 лет)</td>
              <td>{info?.score2OPResult}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Риск сердечно-сосудистых заболеваний (младше 40 лет)</td>
              <td>{info?.riskCardioDisease}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View11;
