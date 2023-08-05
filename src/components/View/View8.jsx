import React, { useCallback, useEffect, useState } from "react";

const View8 = ({ info,patient,setInfo,info5,info6 }) => {
  const [vem, setVem ]= useState();
  const [testMas, setTestMas] = useState();
  useEffect(() => {
    console.log(((200 - patient?.age) * 0.85).toFixed(2),"vem");
    setVem(((200 - patient?.age) * 0.85).toFixed(2));
  }, [])
  useEffect(() => {
    let item = testMass();
    setTestMas(item);
  }, [info])
  const tshxMeasure = () => {
    
    if (info?.tshx) {
      if (patient?.gender == "0") {
        if (info?.tshx <= parseFloat(300)) return "Низкая";
        if (info?.tshx >= 301 && info?.tshx <= 385)
          return "Умеренно низкая";
        if (info?.tshx >= 386 && info?.tshx <= 471)
          return "Средняя";
        if (info?.tshx >= 472 && info?.tshx <= 556)
          return "Хорошая";
        if (info?.tshx >= 557) return "Высокая";
      }
      if (patient?.gender === "1") {
        if (info?.tshx <= 300) return "Низкая";
        if (info?.tshx >= 301 && info?.tshx <= 400)
          return "Умеренно низкая";
        if (info?.tshx >= 401 && info?.tshx <= 500)
          return "Средняя";
        if (info?.tshx >= 501 && info?.tshx <= 600)
          return "Хорошая";
        if (info?.tshx >= 601) return "Высокая";
      }
    }else{
      return ""
    }

    
  };
  const borgscaleMeasure = () => {
    if (patient?.gender && info?.borgscale === "") return "";
    if (patient?.gender) {
      if (info?.borgscale ==='0') return "одышка отсутствует";
      if (info?.borgscale <= 0.5) return "очень-очень легкая";
      if (info?.borgscale <= 1) return "очень легкая";
      if (info?.borgscale <= 2) return "легкая";
      if (info?.borgscale <= 3) return "умеренная";
      if (info?.borgscale <= 4) return "несколько тяжелая";
      if (info?.borgscale <= 5) return "тяжелая";
      if (info?.borgscale <= 6.7) return "очень тяжелая";
      if (info?.borgscale <= 8.9) return "очень-очень тяжелая";
      if (info?.borgscale <= 10) return "максимальная";
    }
  };
  const rufierDixontestMeasure = () => {
    if (info?.rufierDixontest_p1 && info?.rufierDixontest_p2 && info?.rufierDixontest_p3) {
      let p1 = info?.rufierDixontest_p1
      let p2 = info?.rufierDixontest_p2
      let p3 = info?.rufierDixontest_p3
      let item = ((info?.rufierDixontest_p2 -70) + (info?.rufierDixontest_p3 - info?.rufierDixontest_p1))/10;
      if (item < 5)
      return "отличная работоспособность сердца";
    if (item > 5 && item <= 10)
      return "средняя работоспособность сердца";
    if (item > 10 && item <= 15)
      return "удовлетворительная работоспособность сердца";
    if (item > 15)
      return "неудовлетворительная работоспособность сердца";
    }
    
  };
  const bemSempleMeasure = () => {
    const bemSemple = ((200 - patient?.age) * 0.85).toFixed(2);
    
    if (bemSemple <= 25) return "Очень низкая";
    if (bemSemple <= 50) return "низкая";
    if (bemSemple <= 75) return "средняя";
    if (bemSemple <= 100) return "высокая";
    if (bemSemple >= 125) return "Очень высокая";
  };
  const stepenMeasure = ()=> {
    let tshx = info?.tshx
    if (vem) {
      if (patient?.gender==1) {
        if (vem>125 && tshx>600) {
          return 5
        }else if(vem>100 && vem<125 && tshx>500 && tshx<601){
            return 4
        }else if(vem>75 && vem <101 && tshx>400 && tshx<501){
          return 3
        }else if(vem>50 && vem <76 && tshx>300 && tshx<401){
          return 2
        }else if (vem<50 && tshx<300) {
          return 1
        }else{
          return measureTshx(tshx) 
        }
      }else{
        if (vem>125 && tshx>600) {
          return 5
        }else if(vem>100 && vem<125 && tshx>500 && tshx<601){
            return 4
        }else if(vem>75 && vem <101 && tshx>400 && tshx<501){
          return 3
        }else if(vem>50 && vem <76 && tshx>300 && tshx<401){
          return 2
        }else if (vem<50 && tshx<300) {
          return 1
        }else{
          return measureTshx(tshx) 
        }

      }
    }
      
  }
  const measureTshx =  (tshx) =>{
    if (patient?.gender==1) {
      if (tshx>600) {
        return 5
      }
      if (tshx>500 && tshx<601) {
        return 4
      }
      if (tshx>400 && tshx<501) {
        return 3
      }
      if (tshx>300 && tshx<401) {
        return 2
      }
      if (tshx<301) {
        return 1
      }
    }else{
      if (tshx>557) {
        return 5
      }
      if (tshx>472 && tshx<557) {
        return 4
      }
      if (tshx>385 && tshx<472) {
        return 3
      }
      if (tshx>300 && tshx<386) {
        return 2
      }
      if (tshx<301) {
        return 1
      }
    }
    
  } 
  
  const testMass = () => {

    if (info?.natureWork && info?.physicalExercise && info?.complaints ) {
      let natureWork = parseFloat(info?.natureWork);
      let physicalExercise = parseFloat(info?.physicalExercise);
      let complaints = parseFloat(info?.complaints);
      console.log(natureWork,physicalExercise,complaints);
      let age = 
           patient?.age <= 20 && patient?.age<=24 ? 20 
        :  patient?.age >= 25 && patient?.age <= 29 ? 18
        :  patient?.age >= 30 && patient?.age <= 34 ? 16
        :  patient?.age >= 35 && patient?.age <= 39 ? 14
        :  patient?.age >= 40 && patient?.age <= 44 ? 12
        :  patient?.age >= 45 && patient?.age <= 49 ? 10
        :  patient?.age >= 50 && patient?.age <= 54 ? 8
        :  patient?.age >= 55 && patient?.age <= 59 ? 6
        :  patient?.age >= 60 && patient?.age <= 64 ? 4
        :  patient?.age >= 65 && patient?.age <= 69 ? 2
        :  patient?.age >= 70  ? 0
        :  0;
      let itemBodyMass = patient?.gender=="0" ?
        ((info5?.height *100) - 110) * 1.15
        :((info5?.height *100) - 100) * 1.15; 
      let itemBody =  info5?.bodyMass - itemBodyMass;

      let itemBodyfull  = itemBody >= 6 && itemBody <= 14 ? 6 //Масса тела, кг
        : itemBody >= 15 ? 0
        : 0;
      let chcc = String(info6?.chcc);
      let itemChcc = chcc >=90 ? 0 //ЧСС, уд/мин
        : chcc <=89 ? Math.abs(90 - chcc)
        : patient?.age> 60 ? 0
        : 0;
      let dad = String(info6?.dad);
      let sad = String(info6?.sad);
      let itemDad = sad == 130 && dad == 80 ? 20 // АД, мм рт.ст.
      : sad>130 && dad>80 ? ((sad - 130) + (dad - 80)) * 0.5
      : 0;
      let final = natureWork + physicalExercise + complaints + age + itemBodyfull + itemChcc + itemDad;
      setInfo(final);
      return final;
    }
  }


  return (
    <div>
      <div>
        <h6 className="mt-3 fw-bold" style={{ fontSize: "10px" }}>
          8. Определение толерантности к физической нагрузке:
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
              <td>ТШХ</td>
              <td>
                <p>{info?.tshx}-{tshxMeasure()}</p>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Шкала одышки Борга</td>
              <td>{info?.borgscale}-{borgscaleMeasure()}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Проба Руфье-Диксона</td>
              <td>{rufierDixontestMeasure()}</td>
            </tr>
            <tr>
              <td>a</td>
              <td>P1</td>
              <td>{info?.rufierDixontest_p1}</td>
            </tr>
            <tr>
              <td>b</td>
              <td>P2</td>
              <td>{info?.rufierDixontest_p2}</td>
            </tr>
            <tr>
              <td>c</td>
              <td>P3</td>
              <td>{info?.rufierDixontest_p3}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Для тренированных больных – ВЭМ проба</td>
              <td>{bemSempleMeasure()}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                Ступень физической подготовленности (от 1 мин до 5 максимальная)
                расчетная
              </td>
              <td>
                {stepenMeasure()}-{stepenMeasure()==1 ? "Низкая"
                  :stepenMeasure()==2 ? "Умеренно низкая"
                  :stepenMeasure()==3 ? "Средняя"
                  :stepenMeasure()==4 ? "Хорошая"
                  :stepenMeasure()==5 ? "Высокая"
                  :""
                }
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Массовый тест определения физического состояния</td>
              <td>{testMass()}-{testMass() <=45 ? "Низкое": testMass() >=46 && testMass() <=74 ? "Среднее" : testMass() >=75? "Высокое":"" }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View8;
