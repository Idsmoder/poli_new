import React, { useEffect, useState } from "react";
import {CanculateAp} from "../../utils/CanculateAp";
import {CanculateScore2} from "../../utils/CanculateScore2";

export const View11 = ({ info,patient,info5,info6,info7,info2,info4 }) => {
  const [canAp,setCanAp]=useState(0);
  useEffect(() => {
  if (patient && info5 && info6) {
    let view = {
      patient: patient,
      info5: info5,
      info6: info6,
    }
    
     let item =  CanculateAp(view);
     setCanAp(item);
  }
}, [patient,info5,info6]);
useEffect(() => {
  if (patient && info5 && info7 && info2 && info4) {
      let viewScore = {
        main: patient,
        info5: info5,
        tab7: info7,
        tab2: info2,
        tab4: info4,
      }
      let item =  CanculateScore2(viewScore);
      console.log(item,"itemScore");
    }
  }, [patient,info5,info7,info2,info4]);
   const [score, setScore] = useState(0);
  

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
                <p>{canAp}-
                {canAp < parseFloat(2.6) ? "удовлетворительная адаптация" 
                : canAp >=parseFloat(2.6) && canAp <=parseFloat(3.9) ? "напряжение механизмов адаптации"
                : canAp <=parseFloat(3.10) && canAp <=parseFloat(3.49) ? "неудовлетворительная адаптация" 
                : canAp >= parseFloat(3.5) ? "срыв адаптации" : "" }</p>
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
