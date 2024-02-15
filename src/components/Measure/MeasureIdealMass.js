const IdealMass = (info) => {
    const height = info.height * 100;
    const gender = info.gender;
    let ideal
    if (gender==0){
        return  ideal =  ((height - 110) * 1.15);
    }else{
        return ideal =  ((height - 100) * 1.15);
    }
}
    export default IdealMass
    