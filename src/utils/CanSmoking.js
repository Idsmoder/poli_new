import CanSad from "./Cansad";
import { CanSadNoSmoking } from "./NoSmoking/CanSadNoSmoking";
export const CanSmoking = (item) => {
    if (item.smoking == 1) {
        return CanSad(item);
    } else {
        return CanSadNoSmoking(item);
    }
    }
    export default CanSmoking;