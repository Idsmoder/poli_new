import CanculateGender from "./CanculateGender";
export const CanculateScore2 = (viewScore) => {
    const item = {
        age:viewScore?.main?.age,
        smoking:viewScore?.tab4?.smoking,
        sad:viewScore?.tab5?.sad,
        gender:viewScore?.main?.gender,
        hd:viewScore?.tab7?.cHighDensityLipoprotein,
    }
    if (!(viewScore?.tab2?.b &&
                viewScore?.tab2?.c &&
                viewScore?.tab2?.d &&
                viewScore?.tab2?.e &&
                viewScore?.tab2?.f &&
                viewScore?.tab2?.g &&
                viewScore?.tab2?.h &&
                viewScore?.tab2?.t)){
            return CanculateGender(item);
    }
};

export default CanculateScore2;