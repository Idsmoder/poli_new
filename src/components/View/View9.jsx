import React from "react";

const View9 = ({ patient,info }) => {
  const measureSi = () => {
    const age = patient?.age;
    const si = info?.si;
    if (!info?.si) {
      return "";
    }
    if (age<=40) {
      if (si>=6.5 && si<=10) {
        return 1
      }else if(si>10){
        return 2
      }
    }else if(age>40){
      console.log(si,"siiii");
      if (si>=8 && si<11.5) {
        return 1
      }else if(si>11.5){
          return 2
      }
    }
  
  }
  console.log(measureSi(),"test SI");
  const measurePv = () =>{
    const  a = info?.pvA
    const  b = info?.pvB
    const  c = info?.pvC
    const age = patient?.age;
    const si = measureSi();
    if (c==1 ) {
      return "хорошей эластичности артерий"
    }
    if (a==1 || b==1) {
      if (si==2) {
        return "начальные признаки снижения эластичности сосудистой стенки"
      }  
        return "признаки снижения эластичности сосудистой стенки, повышение риска развития сердечно-сосудистых заболеваний, необходимо проведение допплерография экстракраниальных брахиоцефальных артерий."
      
         
    }
  }
  return (
    <div>
      <div>
        <h6 className="mt-3 fw-bold" style={{ fontSize: "15px" }}>
          9. Инструментальные методы исследования :
        </h6>
        <h6 className="mt-3 fw-bold" style={{ fontSize: "15px" }}>
          9.1. Плетизмография (Ангиоскан-1)
        </h6>
        <table
          className="table table-bordered p-0"
          style={{ fontSize: "15px" }}
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
              <td>Индекс отражения RI</td>
              <td>
                <p>{info?.ri}</p>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Индекс ригидности (скорость пульсовой волны) SI</td>
              <td>
                {info?.si} м/с-{measureSi()==1 ? "нормальный индекс жесткости" : measureSi()==2 ? "высокий индекс жесткости" : ""}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Биологический возраст сосудов, VA </td>
              <td>{info?.va}-хронологический возраст при этом - {patient?.age} 
                {!info?.va
                  ? ""
                  : info?.va > patient?.age
                  ? " указывает на небольшое старение сосудов, снижение эластичности, увеличение жесткости. При отсутствии сердечно-сосудистой патологии может быть связан с наличием факторов риска ССС (курение, ожирение, АГ), либо с отсутствием физической нагрузки, малоподвижным образом жизни и ассоциирована с повышением сердечно-сосудистого риска"
                  : " свидетельствует о хорошей эластичности артерий и низком риске сердечно-сосудистых осложнений"}
              </td>
            </tr>
            <tr>
              <td>4 </td>
              <td>Тип ПВ (тип пульсовой волны А, В, С)</td>
              <td>
                <p>{measurePv()}</p>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>ЭКГ: Ритм</td>
              <td>
                {info?.ecgRhythm==1 ? "синусовый, " : info?.ecgRhythm==2 ? "несинусовый, " : ""}
                {info?.ecgCorrect==1 ? "правильный, " : info?.ecgCorrect==2 ? "неправильный, " : ""}
                {info?.ecgRhythm==2 ? info?.ecgRhythmNonSin==1 ? " фибрилляция предсердий" : info?.ecgRhythmNonSin==2 ? " эктопический ритм" : "" : ""}
                </td>
            </tr>
            <tr>
              <td>6</td>
              <td>ЧСС</td>
              <td>{info?.heartRate}</td>
            </tr>
            {info?.conclusion && (
                 <tr>
                 <td>7</td>
                 <td>Заключение</td>
                 <td>{info?.conclusion}</td>
               </tr>
            )}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default View9;
