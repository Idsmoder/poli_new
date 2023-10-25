export const MeasureDegreeImt = (imt) => {
    if (imt >= 19 && imt < "24.9") {
        return "нормальная масса тела"
    }
    else if (imt >= 25 && imt < "29.9") {
        return "предожирение "
    }
    else if (imt >= 30 && imt < "34.9") {
        return"первая степень ожирения"
    }
    else if (imt >= 35 && imt < "39.9") {
        return "вторая  степень ожирения"
    }
    else if (imt >= 40 && imt < "44.9") {
        return "третья степень ожирения"
    }
    else if (imt >= 45) {
        return "четвертая  степень ожирения"
    }
}
export default MeasureDegreeImt;