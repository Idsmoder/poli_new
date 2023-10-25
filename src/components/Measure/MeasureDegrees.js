export const MeasureDegrees = (infoDegrees) => {
    const sad  = infoDegrees?.sad;
    const dad = infoDegrees?.dad;
    if (sad<120 && dad<80) {
        return "Оптимальное АД"
    }else if (sad>120 && sad<130 || dad<85) {
        return "Нормальное АД"
    }else if (sad>129 && sad<140 && dad>84 && dad<90) {
        return "Высокое нормальное АД"
    }else if (sad>139 && sad<160 && dad>=90 && dad<100) {
        return "АГ 1 степени"
    }else if (sad>159 && sad<180 || dad>99 && dad<110) {
        return "АГ 2 степени"
    }else if (sad>179 || dad>109) {
        return "АГ 3 степени"
    }else if (sad>=140 && dad<90) {
        return "Изолированная систолическая АГ"
    } 
}
    export default MeasureDegrees;