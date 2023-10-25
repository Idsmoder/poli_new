export const MeasureHarris = (infoHarris) => {
    const age = infoHarris?.age;
    const height = infoHarris?.height;
    const bodyMass = infoHarris?.bodyMass;
    const gender = infoHarris?.gender;
    if (gender=="0") {
        // BMR = 447.593 + (9.247 x вес в кг) + (3.098 x рост в сантиметрах) - (4.330 x возраст в годах)
        const bmr = 447.593 + (9.247 * bodyMass) + (3.098 * height) - (4.330 * age);
       return bmr.toFixed(0);
       
    }else{
      // BMR = 88.362 + (13.397 x вес в кг) + (4.799 x рост в сантиметрах) - (5.677 x возраст в годах)
      const bmr = 88.362 + (13.397 * bodyMass) + (4.799 * height) - (5.677 * age);
      return bmr.toFixed(0);
      
    }
}
export default MeasureHarris;
