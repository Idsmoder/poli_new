import React, { useEffect, useState } from "react";
import {CanculateAp} from "../../utils/CanculateAp";
import {CanculateScore2} from "../../utils/CanculateScore2";

export const View11 = ({ info,patient,info5,info6,info7,info2,info4,info8,info10 }) => {
  const [canAp,setCanAp]=useState(0);
  const [score2,setScore2]=useState(0);
  const [factors,setFactors]=useState([]);


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
    factorsMeasure();

      let viewScore = {
        main: patient,
        tab5: info6,
        tab7: info7,
        tab2: info2,
        tab4: info4,
      }
      let item =  CanculateScore2(viewScore);
      setScore2(item);
    }
  }, [patient,info5,info7,info2,info4]);
  
  const lynxMeasure = () =>{
    if (score2 && info2 && info7 && info5) {
      if (info?.b 
        && info2?.c 
        && info2?.d 
        && info2?.t 
        && info2?.e 
        && info2?.f 
        && info2?.g 
        && info2?.h 
        && info?.h 
        && info2?.i 
        && info4?.smoking==1 
        && info?.a 
        && info7?.totalCholesterol > parseFloat(6.2)
        && info7?.rapidGlomFilt < parseFloat(30)
        && score2 >= parseFloat(10)
        ) {
          return "Очень высокий риск";
      }
      if (
        info7?.totalCholesterol > parseFloat(8) 
        && info6?.sad >parseFloat(140)
        && info?.dad > parseFloat(90)
        && info2?.i
        && info7?.glucose > parseFloat(6.1)
        && info2?.m
        && info7?.rapidGlomFilt > parseFloat(30) 
        && info7?.rapidGlomFilt<parseFloat(59)
        && score2 >=parseFloat(5) 
        && score2 < parseFloat(10)) {
        return "Высокий риск";
      }
      if (score2 >=parseFloat(1) && score2 < parseFloat(5)) {
        return "Умеренный риск";
      }
      if (score2 < parseFloat(1)) {
        return "Низкий риск";
      }
    }
  }
  const factorsMeasure = () =>{
    let item = ((info8?.rufierDixontest_p2 -70) + (info8?.rufierDixontest_p3 - info8?.rufierDixontest_p1))/10;

    if (patient?.gender=="0") {
      if (info5?.waistHipRatio > parseFloat(0.85) && info5?.presenceDegreeImt > parseFloat(30) && info5?.internalFat > parseFloat(12)){
        setFactors([...factors,"ожирение"]);
      }
        
    }else{
      if ( info5?.waistHipRatio > parseFloat(1.0) && info5?.presenceDegreeImt > parseFloat(30) && info5?.internalFat > parseFloat(12)){
        setFactors([...factors,"ожирение"]);
      }
    }
    if (info2?.k && info2?.i && info7?.totalCholesterol > parseFloat(6.2)) {
      setFactors([...factors,"сахарный диабет"]);
    }
    if(info8?.tshx< parseFloat(300)){
      if (item > parseFloat(15)) {
        setFactors([...factors,"недостаточная физическая активность"]);
      }
    }
    if (info4?.smoking==1 && info4?.smoking > parseFloat(3)) {
      setFactors([...factors,"курение"]);
    }
    if(info?.levelStrees>parseFloat(2.0)){
      setFactors([...factors,"психологический стресс"]);
    }
    if (info4?.gb!=1) {
      setFactors([...factors,"семейный анамнез ранней заболеваемости"]);
    }
    if(info6?.sad > 140 && info7?.cHighDensityLipoprotein && info?.coeffAtherogenicity && info?.prothrombinTime){
      setFactors([...factors,"Гиперлипидемия и дислипидемия"]);
    }
    if(info7?.levelUricAcidSer){
      setFactors([...factors,"Гиперурекемия"]);
    }
    console.log(info6?.sad,info6?.dad);
    if(info6?.sad > 140 && info6?.dad > 90){
      setFactors([...factors,"артериальная гипертензия"]);
    }
    if (info2?.m ) {
      setFactors([...factors,"хроническая болезнь почек"]);
    }
    if (info6?.chcc > parseFloat(80)) {
      setFactors([...factors,"ЧСС боле 80 в мин"]);
    }
    if(info7?.totalCholesterol && info?.triglycerides && info7?.lowDensityLipoprotein && info7?.highDensityLipoprotein && info7?.cHighDensityLipoprotein && info?.coeffAtherogenicity && info?.prothrombinTime){
      setFactors([...factors,"Гиперлипидемия и дислипидемия"]);
    }
    if(info7?.levelUricAcidSer){
      setFactors([...factors,"Гиперурекемия"]);
    }
        
  }
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
              <td>{patient?.age < 40 ? "Риск сердечно-сосудистых заболеваний (младше 40 лет)" : "SCORE2-OP (старше 40 лет)"}</td>
              <td>{score2} </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Группа риска </td>
              <td>{lynxMeasure()}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Факторы риска</td>
              <td></td>
            </tr>
            {factors.map((item, i) => (
              <tr key={i}>
                <td></td>
                <td>{item}</td>
                <td></td>
              </tr>
            ))}
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View11;
