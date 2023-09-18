import React, { useEffect, useState } from "react";
import {CanculateAp} from "../../utils/CanculateAp";
import {CanculateScore2} from "../../utils/CanculateScore2";
import {canculatePirigova} from "../../utils/canculatePirigova";

export const View11 = ({ info,patient,info5,info6,info7,info2,info4,info8,info10 }) => {
  const [canAp,setCanAp]=useState(0);
  const [score2,setScore2]=useState(0);
  const [factors,setFactors]=useState([]);
  const [piragova,setPiragova]=useState(0);
  const [strees1,setStrees1]=useState(null);
  const [nausea,setNausea]=useState(null);
  const [diabetes,setDiabetes]=useState(null);
  const [physicalActivity,setPhysicalActivity]=useState(null);
  const [smoking,setSmoking]=useState(null);
  const [gb,setGb]=useState(null);
  const [dyslipidemia,setDyslipidemia]=useState(null);
  const [hyperurecemia,setHyperurecemia]=useState(null);
  const [hypertension,setHypertension]=useState(null);
  const [diseaseKidney,setDiseaseKidney]=useState(null);
  const [chcc,setChcc]=useState(null);


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
  factorsMeasure();

  if (patient && info5 && info7 && info2 && info4) {
      let viewScore = {
        main: patient,
        tab5: info6,
        tab7: info7,
        tab2: info2,
        tab4: info4,
      }
      let item =  CanculateScore2(viewScore);
      setScore2(item);
    }else{
      setScore2(0);
    }
  }, [patient,info5,info7,info2,info4]);
  useEffect(() => {
    const view = {
      patient: patient,
      info5: info5,
      info6: info6,
      info8: info8,
    }
    let item =  canculatePirigova(view);
    setPiragova(item);
  }, [patient,info5,info6,info7]);
  const lynxMeasure = () =>{

    if (info2 && info7 && info5) {
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
    const imt = (info5?.bodyMass / (info5?.height * info5?.height)).toFixed(0);
    if (patient?.gender=="0") {
      if (info5?.waistHipRatio > parseFloat(0.85) && imt > parseFloat(30) && info5?.internalFat > parseFloat(12)){
        setNausea("ожирение");
      }
    }else{
      if ( info5?.waistHipRatio > parseFloat(1.0) && imt > parseFloat(30) && info5?.internalFat > parseFloat(12)){
        setNausea("ожирение");
      }
    }
    if (info2?.k && info2?.i && info7?.totalCholesterol > parseFloat(6.2)) {
      setDiabetes("сахарный диабет");
    }
    if(info8?.tshx< parseFloat(300)){
      if (item > parseFloat(15) && piragova>44) {
        setPhysicalActivity("недостаточная физическая активность");
      }
    }
    if (info4?.smoking==1 || info4?.smoking==3) {
      setSmoking("курение");
    }
    if(info10?.stressLevel>=2.0){
      setStrees1("психологический стресс")
      // setFactors({...factors,factor5:"психологический стресс"});
    }
    if (info4?.gb!=1) {
      if (patient?.gender=='0' && patient?.age<60) {
        setHyperurecemia("семейный анамнез ранней заболеваемости ССЗ");
      }else if(patient?.gender=='1' && patient?.age<55){
        setHyperurecemia("семейный анамнез ранней заболеваемости ССЗ");
      }
    }
    
    if(info7?.levelUricAcidSer){
     
    }
    if(info6?.sad >= 140 && info6?.dad > 90){
      setHypertension("артериальная гипертензия");
    }
    if (info2?.m ) {
      setDiseaseKidney("хроническая болезнь почек");
    }
    if (info6?.chcc > parseFloat(80)) {
      setChcc("ЧСС боле 80 в мин");
    }
    if(info7?.totalCholesterol && info?.triglycerides && info7?.lowDensityLipoprotein && info7?.highDensityLipoprotein && info7?.cHighDensityLipoprotein && info?.coeffAtherogenicity && info?.prothrombinTime){
      setFactors({...factors,factor12:"Гиперлипидемия и дислипидемия"});
    }
    if(info7?.levelUricAcidSer){
      setFactors({...factors,factor13:"Гиперурекемия"});
    }

        
  }
  console.log(factors,"factors");

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
              <td>Индекс адаптационного потенциала ССС Р.М. Баевского</td>
              <td>
                <p>{canAp}-
                {canAp < parseFloat(2.6) ? "удовлетворительная адаптация" 
                : canAp >=parseFloat(2.6) && canAp <=parseFloat(3.09) ? "напряжение механизмов адаптации"
                : canAp <=parseFloat(3.10) && canAp <=parseFloat(3.49) ? "неудовлетворительная адаптация" 
                : canAp >= parseFloat(3.5) ? "срыв адаптации" : "" }</p>
              </td>
            </tr>
            <tr>
              
              <td>2</td>
              <td>{patient?.age < 40 ? "Риск сердечно-сосудистых заболеваний (младше 40 лет)" : "SCORE2-OP (старше 40 лет)"}</td>
              <td>{score2}-{score2==0 ? "SCORE2 не возможно посчитать":""} </td>
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
            {nausea && <tr>
              <td></td>
              <td>{nausea}</td>
              <td></td>
            </tr>}
            {diabetes && 
            <tr>
              <td></td>
              <td>{diabetes}</td>
              <td></td>
            </tr>}
            {physicalActivity && <tr>
              <td></td>
              <td>{physicalActivity}</td>
              <td></td>
            </tr>}
            {factors.factior4 && <tr>
              <td></td>
              <td>{factors.factor4}</td>
              <td></td>
            </tr>}
            {factors.factor5 && <tr>
              <td></td>
              <td>{factors.factor5}</td>
              <td></td>
            </tr>}
            {factors.factor6 && <tr>
              <td></td>
              <td>{factors.factor6}</td>
              <td></td>
            </tr>}
            {factors.factor7 && <tr>
              <td></td>
              <td>{factors.factor7}</td>
              <td></td>
            </tr>}
            {factors.factor8 && <tr>
              <td></td>
              <td>{factors.factor8}</td>
              <td></td>
            </tr>}
            {factors.factor9 && <tr>
              <td></td>
              <td>{factors.factor9}</td>
              <td></td>
            </tr>}
            {factors.factor10 && <tr>
              <td></td>
              <td>{factors.factor10}</td>
              <td></td>
            </tr>}
            {factors.factor11 && <tr>
              <td></td>
              <td>{factors.factor11}</td>
              <td></td>
            </tr>}
            {factors.factor12 && <tr>
              <td></td>
              <td>{factors.factor12}</td>
              <td></td>
            </tr>}
            {factors.factor13 && <tr>
              <td></td>
              <td>{factors.factor13}</td>
              <td></td>
            </tr>}
            

            

            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View11;
