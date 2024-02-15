
export const CanculateGroupRisk = (view) => {
    const  info2 = view?.info2
    const  info4 = view?.info4
    const  info6 = view?.info6
    const   info7 = view?.info7
    const score2 = view?.score2
   
    if (
        info2?.b
        && info2?.c 
        && info2?.d
        && info2?.e
        && info2?.f
        && info7?.totalCholesterol>6.2
        && info4?.smoking==1
        && info7?.rapidGlomFilt<30
        && score2>=10 ) {
            
        return "Очень высокий риск"
    }else if (
        info7?.totalCholesterol>8.0 
        && info6?.sad>=140 
        && info6?.dad>=90
        && info2?.i
        && info7?.glucose>6.1
        && info2?.m
        && info7?.rapidGlomFilt>29
        && info7?.rapidGlomFilt<60
        && score2>=5
        && score2<=9
    ) {
        return "Высокий риск"  
    }else if (score2>=1 && score2<5) {
        return "Умеренный риск"
    }else if (score2<=1) {
        return "Низкий риск"
    }else{
        return "Риск не определен"
    }
    
}
export default CanculateGroupRisk;