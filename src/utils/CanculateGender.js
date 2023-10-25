import CanSmoking from "./CanSmoking";
import CanSmokingMale from "./CanSmokingMale";
export const CanculateGender = (item) => {
    if (item.gender==0) {
        return CanSmoking(item)
    }else{
        return CanSmokingMale(item);
    }
}
export default CanculateGender;