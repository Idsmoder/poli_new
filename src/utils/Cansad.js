import CanAge from "./CanAge";
export const Cansad = (item)=>{
    if (item?.sad>=100 && item?.sad<=119) {
        const item_s = {
            type_sad:1,
            age:item?.age,
            hd:item?.hd,
        }
        return CanAge(item_s);
    }else if (item?.sad>=120 && item?.sad<=139) {
        const item_s = {
            type_sad:2,
            age:item?.age,
            hd:item?.hd,
        }
        return CanAge(item_s);
    }else if (item?.sad>=140 && item?.sad<=159) {
        const item_s = {
            type_sad:3,
            age:item?.age,
            hd:item?.hd,
        }
        return CanAge(item_s);
    }else if (item?.sad>=160 && item?.sad<=179) {
        const item_s = {
            type_sad:4,
            age:item?.age,
            hd:item?.hd,
        }
        return CanAge(item_s);
    }
};
export default Cansad;