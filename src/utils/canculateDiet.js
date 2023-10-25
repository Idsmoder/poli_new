export  const canculateDiet =(view)=>{
    const info = view.info5;
    const patient = view.patient;
    let gender = patient?.gender;
      let height = info?.height*100;
      let bodyMass = info?.bodyMass;
      let age = patient?.age;
        let bmr = 0;
        if (gender=="0") {
            // BMR = 447.593 + (9.247 x вес в кг) + (3.098 x рост в сантиметрах) - (4.330 x возраст в годах)
            bmr = 447.593 + (9.247 * bodyMass) + (3.098 * height) - (4.330 * age);
        }else{
        // BMR = 88.362 + (13.397 x вес в кг) + (4.799 x рост в сантиметрах) - (5.677 x возраст в годах)
            bmr = 88.362 + (13.397 * bodyMass) + (4.799 * height) - (5.677 * age);
        }
    if (info?.exchangeRate) {
        return "Test Rate";
    }else{
        if (bmr<=1250) {
            return "Диетотерапия при метаболическом синдроме. 1200";
        }else if (bmr>1250 && bmr<=1350) {
        return "Диетотерапия при метаболическом синдроме. 1300";
        }else if (bmr>1350 && bmr<=1450) {
        return "Диетотерапия при метаболическом синдроме. 1400";
        }else if (bmr>1450 && bmr<=1550) {
        return "Диетотерапия при метаболическом синдроме. 1500";
        }else if (bmr>1550 && bmr<=1650) {
        return "Диетотерапия при метаболическом синдроме. 1600";
        }else if (bmr>1650 && bmr<=1750) {
        return "Диетотерапия при метаболическом синдроме. 1700";
        }else if (bmr>1750) {
        return "Диетотерапия при метаболическом синдроме. 1800 >";
        }

    }
}