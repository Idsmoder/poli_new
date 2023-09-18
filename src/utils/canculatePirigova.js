export const canculatePirigova = (view) => {
    // Для женщин: Идеальный вес = (Рост (в сантиметрах) – 110) * 1,15. Для мужчин: Идеальный вес = (Рост (в сантиметрах) – 100) * 1,15
    const info5 = view.info5;
    const info6 = view.info6;
    const info = view.info8;
    const patient = view.patient;
   let natureWork = parseFloat(info?.natureWork)
    let ag = patient?.age
   let age = ag<21 ? 20 
   : ag>20 && ag<26 ? 18
   : ag>25 && ag<31 ? 16
   : ag>30 && ag<36 ? 14
    : ag>35 && ag<41 ? 12
    : ag>40 && ag<46 ? 10
    : ag>45 && ag<51 ? 8
    : ag>50 && ag<56 ? 6
    : ag>55 && ag<61 ? 4
    : ag>60 && ag<66 ? 2
    : ag>65 && ag<71 ? 0
    :"" 
   let physicalExercise = parseInt(info?.physicalExercise)
   let massBody = info5?.bodyMass
   let body = (patient?.gender==1 ? (((info5?.height*100) - 100) * 1.15) : (((info5?.height*100) - 110) * 1.15)).toFixed(0)
   let resultBody = parseInt(massBody-body)
   let resBody = resultBody >6 && resultBody < 14 ? 6 : resultBody>15 ? 0 : 0
   let chcc = info6?.chcc>=90 ? 0 : info6?.chcc < 90 ? parseInt(90-info6?.chcc) : ""
   let sad = info6?.sad
   let dad = info6?.dad
   let ad = sad==130 && dad==80 ? 20:0 
   let resultAd  = ad!=20 ? sad>130 && dad>80 ? (parseInt((sad-130)/10)*5) + (parseInt((dad-80)/10)*5) 
   : sad>130 ? parseInt((sad-130)/10)*5 
   : dad>80 ? parseInt((dad-80)/10)*5 
   : "" 
   : ""
  let complaints = Math.floor(info?.complaints)
  let final = parseInt(natureWork + age + physicalExercise + resBody + chcc + resultAd) + parseInt(complaints)
    return final
  }