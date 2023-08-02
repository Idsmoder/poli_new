

const View5 = ({ patient,info,setInfo }) => {
  console.log(info?.waistHipRatio,"test");
    const adipPoseTissueMeasure = () => {
        if (
          patient?.gender &&
          info?.adiposeTissue &&
          patient?.age === ""
        )
          return "";
        // Women
        if (patient?.gender === "0") {
          if (info?.adiposeTissue === "") return "";
          // Nedostatochno
          if (patient?.age <= 19 && info?.adiposeTissue <= 18)
            return "Ваш процент жира в организме недостаточен";
          if (
            patient?.age >= 20 &&
            patient?.age <= 39 &&
            info?.adiposeTissue <= 20
          )
            return "Ваш процент жира в организме недостаточен";
          if (
            patient?.age >= 40 &&
            patient?.age <= 59 &&
            info?.adiposeTissue <= 22
          )
            return "Ваш процент жира в организме недостаточен";
          if (patient?.age >= 60 && info?.adiposeTissue <= 23)
            return "Ваш процент жира в организме недостаточен";
          // Norma
          if (
            patient?.age <= 19 &&
            info?.adiposeTissue >= 19 &&
            info?.adiposeTissue <= 31
          )
            return "Ваш процент жира-  в организме в норме";
          if (
            patient?.age >= 20 &&
            patient?.age <= 39 &&
            info?.adiposeTissue >= 21 &&
            info?.adiposeTissue <= 32
          )
            return "Ваш процент жира в организме в норме";
          if (
            patient?.age >= 40 &&
            patient?.age <= 59 &&
            info?.adiposeTissue >= 23 &&
            info?.adiposeTissue <= 33
          )
            return "Ваш процент жира в организме в норме";
          if (
            patient?.age >= 60 &&
            info?.adiposeTissue >= 24 &&
            info?.adiposeTissue <= 35
          )
            return "Ваш процент жира в организме в норме";
          // Izbitok
          if (
            patient?.age <= 19 &&
            info?.adiposeTissue >= 31 &&
            info?.adiposeTissue <= 36
          )
            return "Ваш процент жира в организме – Избыток";
          if (
            patient?.age >= 20 &&
            patient?.age <= 39 &&
            info?.adiposeTissue >= 33 &&
            info?.adiposeTissue <= 38
          )
            return "Ваш процент жира в организме – Избыток";
          if (
            patient?.age >= 40 &&
            patient?.age <= 59 &&
            info?.adiposeTissue >= 34 &&
            info?.adiposeTissue <= 39
          )
            return "Ваш процент жира в организме – Избыток";
          if (
            patient?.age >= 60 &&
            info?.adiposeTissue >= 36 &&
            info?.adiposeTissue <= 41
          )
            return "Ваш процент жира в организме – Избыток";
          // Ojireniye
          if (
            patient?.age <= 19 &&
            info?.adiposeTissue >= 36 &&
            info?.adiposeTissue <= 50
          )
            return "Ваш процент жира в организме – Ожирение";
          if (
            patient?.age >= 20 &&
            patient?.age <= 39 &&
            info?.adiposeTissue >= 39 &&
            info?.adiposeTissue <= 50
          )
            return "Ваш процент жира в организме – Ожирение";
          if (
            patient?.age >= 40 &&
            patient?.age <= 59 &&
            info?.adiposeTissue >= 40 &&
            info?.adiposeTissue <= 50
          )
            return "Ваш процент жира в организме – Ожирение";
          if (
            patient?.age >= 60 &&
            info?.adiposeTissue >= 42 &&
            info?.adiposeTissue <= 50
          )
            return "Ваш процент жира в организме – Ожирение";
        }
        // Men
        if (patient?.gender === "1") {
          if (info?.adiposeTissue === "") return "";
          // Nedostatochno
          if (patient?.age <= 19 && info?.adiposeTissue > 9)
            return "Ваш процент жира в организме недостаточен";
          if (
            patient?.age >= 20 &&
            patient?.age <= 39 &&
            info?.adiposeTissue <= 7
          )
            return "Ваш процент жира в организме недостаточен";
          if (
            patient?.age >= 40 &&
            patient?.age <= 59 &&
            info?.adiposeTissue <= 10
          )
            return "Ваш процент жира в организме недостаточен";
          if (patient?.age >= 60 && info?.adiposeTissue <= 12)
            return "Ваш процент жира в организме недостаточен";
          // Norma
          if (
            patient?.age <= 19 &&
            info?.adiposeTissue >= 9 &&
            info?.adiposeTissue <= 19
          )
            return "Ваш процент жира в организме в норме";
          if (
            patient?.age >= 20 &&
            patient?.age <= 39 &&
            info?.adiposeTissue >= 8 &&
            info?.adiposeTissue <= 19
          )
            return "Ваш процент жира в организме в норме";
          if (
            patient?.age >= 40 &&
            patient?.age <= 59 &&
            info?.adiposeTissue >= 11 &&
            info?.adiposeTissue <= 21
          )
            return "Ваш процент жира в организме в норме";
          if (
            patient?.age >= 60 &&
            info?.adiposeTissue >= 13 &&
            info?.adiposeTissue <= 24
          )
            return "Ваш процент жира в организме в норме";
          // Izbitok
          if (
            patient?.age <= 19 &&
            info?.adiposeTissue >= 20 &&
            info?.adiposeTissue <= 23
          )
            return "Ваш процент жира в организме – Избыток";
          if (
            patient?.age >= 20 &&
            patient?.age <= 39 &&
            info?.adiposeTissue >= 20 &&
            info?.adiposeTissue <= 24
          )
            return "Ваш процент жира в организме – Избыток";
          if (
            patient?.age >= 40 &&
            patient?.age <= 59 &&
            info?.adiposeTissue >= 22 &&
            info?.adiposeTissue <= 27
          )
            return "Ваш процент жира в организме – Избыток";
          if (
            patient?.age >= 60 &&
            info?.adiposeTissue >= 25 &&
            info?.adiposeTissue <= 29
          )
            return "Ваш процент жира в организме – Избыток";
          // Ojireniye
          if (
            patient?.age <= 19 &&
            info?.adiposeTissue >= 24 &&
            info?.adiposeTissue <= 50
          )
            return "Ваш процент жира в организме – Ожирение";
          if (
            patient?.age >= 20 &&
            patient?.age <= 39 &&
            info?.adiposeTissue >= 25 &&
            info?.adiposeTissue <= 50
          )
            return "Ваш процент жира в организме – Ожирение";
          if (
            patient?.age >= 40 &&
            patient?.age <= 59 &&
            info?.adiposeTissue >= 28 &&
            info?.adiposeTissue <= 50
          )
            return "Ваш процент жира в организме – Ожирение";
          if (
            patient?.age >= 60 &&
            info?.adiposeTissue >= 30 &&
            info?.adiposeTissue <= 50
          )
            return "Ваш процент жира в организме – Ожирение";
        }
      };

      const boneMeasure = () => {
        if (
          info?.bone &&
          patient?.gender &&
          info?.bodyMass === ""
            
        )
          return "";
        // Woman
        if (patient?.gender === "1") {
          if (info?.bone && info?.bodyMass === "") return "";
    
          // till 50
          if (info?.bodyMass <= 50 && info?.bone === "1.95")
            return "Количество костной массы в норме";
          if (info?.bodyMass <= 50 && info?.bone > "1.95")
            return "Количество костной массы выще нормы";
          if (info?.bodyMass <= 50 && info?.bone < "1.95")
            return "Количество костной массы снижена";
    
          // between 50-75
          if (
            info?.bodyMass > 50 &&
            info?.bodyMass <= 75 &&
            info?.bone === "2.40"
          )
            return "Количество костной массы в норме";
          if (
            info?.bodyMass > 50 &&
            info?.bodyMass <= 75 &&
            info?.bone > "2.40"
          )
            return "Количество костной массы выще нормы";
          if (
            info?.bodyMass > 50 &&
            info?.bodyMass <= 75 &&
            info?.bone < "2.40"
          )
            return "Количество костной массы снижена";
    
          //upto 75
          if (info?.bodyMass > 75 && info?.bone === "2.95")
            return "Количество костной массы в норме";
          if (info?.bodyMass > 75 && info?.bone > "2.95")
            return "Количество костной массы выще нормы";
          if (info?.bodyMass > 75 && info?.bone < "2.95")
            return "Количество костной массы снижена";
        }
        // Men
        if (patient?.gender === "0") {
          if (info?.bone && info?.bodyMass === "") return "";
    
          // till 65
          if (info?.bodyMass <= 65 && info?.bone === "2.66")
            return "Количество костной массы в норме";
          if (info?.bodyMass <= 65 && info?.bone > "2.66")
            return "Количество костной массы выще нормы";
          if (info?.bodyMass <= 65 && info?.bone < "2.66")
            return "Количество костной массы снижена";
    
          // between 65-95
          if (
            info?.bodyMass > 65 &&
            info?.bodyMass <= 95 &&
            info?.bone === "3.29"
          )
            return "Количество костной массы в норме";
          if (
            info?.bodyMass > 65 &&
            info?.bodyMass <= 95 &&
            info?.bone > "3.29"
          )
            return "Количество костной массы выще нормы";
          if (
            info?.bodyMass > 65 &&
            info?.bodyMass <= 95 &&
            info?.bone < "3.29"
          )
            return "Количество костной массы снижена";
    
          //upto 95
          if (info?.bodyMass > 95 && info?.bone === "3.69")
            return "Количество костной массы в норме";
          if (info?.bodyMass > 95 && info?.bone > "3.69")
            return "Количество костной массы выще нормы";
          if (info?.bodyMass > 95 && info?.bone < "3.69")
            return "Количество костной массы снижена";
        }
      };


    return (
    <div>
      <h6 className="mt-3 fw-bold" style={{ fontSize: "10px" }}>
        5. Антропометрические данные и данные Tanita:
      </h6>
      <table className="table table-bordered p-0" style={{ fontSize: "10px" }}>
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
            <td>Рост (Р), м</td>
            <td>{info?.height}</td>
          </tr>
          {/* 2 */}
          <tr>
            <td>2</td>
            <td>Масса тела (МТ) кг</td>
            <td>{info?.bodyMass}</td>
          </tr>
          {/* 3 */}
          <tr>
            <td>3</td>
            <td>Окружность талии, см</td>
            <td>
            {info?.waistCircumference}-
              {patient?.gender =="0" 
                ? info?.waistCircumference > parseFloat(0) 
                && info?.waistCircumference <= parseFloat(80)
                ? "в норме"
                : info?.waistCircumference > parseFloat(88)
                ? "Повышенный риск"
                : ""

                : info?.waistCircumference > parseFloat(0)
                && info?.waistCircumference <= parseFloat(94)
                ? "в норме"
                : info?.waistCircumference > parseFloat(102)
                ? "Повышенный риск"
                : ""}
                    

            </td>
          </tr>
          {/* 4 */}
          <tr>
            <td>4</td>
            <td>Окружность бедер, см</td>
            <td>{info?.hipCircumference}</td>
          </tr>
          {/* 5 */}
          <tr>
            <td>5</td>
            <td>Соотношение окружность талии/окружность бедер</td>
            <td>
            {info?.waistHipRatio}-
              {isNaN(info?.waistHipRatio)
                ? ""
                : !patient?.gender
                ? ""
                : patient?.gender === "1" && info?.waistHipRatio <= 0.85
                ? "норма"
                : patient?.gender === "0" && info?.waistHipRatio <= 1.0
                ? "норма"
                : "абдоминально-висцерального ожирения"}
                   
            </td>
          </tr>

          {/* 6 */}
          <tr>
            <td>6</td>
            <td>ИМТ</td>
            <td>{isNaN(info?.imt) ? "" : info?.imt}</td>
          </tr>

          {/* 7 */}
          <tr>
            <td>7</td>
            <td>Наличие и степень ожирения по ИМТ</td>
            <td>
            {info?.imt}- 
              {!info?.imt
                ? ""
                : (info?.imt >= 19 && info?.imt < "24.9" && "нормальная масса тела") ||
                  (info?.imt >= 25 && info?.imt < "29.9" && "предожирение ") ||
                  (info?.imt >= 30 && info?.imt < "34.9" && "первая степень ожирения") ||
                  (info?.imt >= 35 && info?.imt < "39.9" && "вторая  степень ожирения") ||
                  (info?.imt >= 40 && info?.imt < "44.9" && "третья степень ожирения") ||
                  (info?.imt >= 45 && "четвертая  степень ожирения")}
                
            </td>
          </tr>

          {/* 8 */}
          <tr>
            <td>8</td>
            <td>% жировой ткани</td>
            <td>{adipPoseTissueMeasure()}({info?.adiposeTissue})</td>
          </tr>

          {/* 9 */}
          <tr>
            <td>9</td>
            <td>Внутренний жир</td>
            <td>
            {info?.internalFat}-
              {info?.internalFat === ""
                ? ""
                : (info?.internalFat <= 12 && "в пределах нормы") ||
                  (info?.internalFat >= 13 &&
                    info?.internalFat <= 59 &&
                    "выше нормы")}
                    
            </td>
          </tr>

          {/* 10 */}
          <tr>
            <td>10</td>
            <td>Мышечная масса</td>
            <td>{info?.muscleMass}</td>
          </tr>
          {/* 11 */}
          <tr>
            <td>11</td>
            <td>Тип телосложения</td>
            <td>{info?.bodyType}-
              {(info?.bodyType === "1" && "скрытое ожирение") ||
                (info?.bodyType === "2" && "Тучный") ||
                (info?.bodyType === "3" && "Крепко-сложенный") ||
                (info?.bodyType === "4" && "Недостаточно натренированный") ||
                (info?.bodyType === "5" && "Стандарт") ||
                (info?.bodyType === "6" && "Стандарт мускулистый") ||
                (info?.bodyType === "7" && "Тонкий") ||
                (info?.bodyType === "8" && "Тонкий и мускулистый") ||
                (info?.bodyType === "9" && "очень мускулистый")}
            </td>
          </tr>
          {/* 12 */}
          <tr>
            <td>12</td>
            <td>Костная ткань</td>
            <td>{info?.bone}-{boneMeasure()}</td>
          </tr>
          {/* 13 */}
          <tr>
            <td>13</td>
            <td>Скорость обмена</td>
            <td>{info?.exchangeRate}-{info?.exchangeRate ? "Уровень скорости обмена веществ" :""}</td>
          </tr>
          {/* 14 */}
          <tr>
            <td>14</td>
            <td>Метаболический возраст</td>
            <td>Метаболический возраст-{info?.metabolicAge} Билогический возраст-{patient?.age} </td>
          </tr>
          {/* 15 */}
          <tr>
            <td>15</td>
            <td>% воды в организме</td>
            <td>Ваше содержание воды в организме-
            {info?.waterInBody}-
              {patient?.gender === "0"
                ? info?.waterInBody <= 50 ?
                  "сниженное" :"нормальное"
                : info?.waterInBody <= 60 ?
                  "сниженное" :"нормальное"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    );
    }
export default View5;