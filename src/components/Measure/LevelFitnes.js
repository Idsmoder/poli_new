const  LevelFitnes = (body) => {
    let tshx = body?.tshx
    let vem = body?.vem
    if (vem) {
        if (patient?.gender==1) {
            if (vem>125 && tshx>600) {
                return 5
            }else if(vem>100 && vem<125 && tshx>500 && tshx<601){
                return 4
            }else if(vem>75 && vem <101 && tshx>400 && tshx<501){
                return 3
            }else if(vem>50 && vem <76 && tshx>300 && tshx<401){
                return 2
            }else if (vem<50 && tshx<300) {
                return 1
            }else{
                return measureTshx(tshx)
            }
        }else{
            if (vem>125 && tshx>600) {
                return 5
            }else if(vem>100 && vem<125 && tshx>500 && tshx<601){
                return 4
            }else if(vem>75 && vem <101 && tshx>400 && tshx<501){
                return 3
            }else if(vem>50 && vem <76 && tshx>300 && tshx<401){
                return 2
            }else if (vem<50 && tshx<300) {
                return 1
            }else{
                return measureTshx(tshx)
            }

        }
    }

}
export default LevelFitnes;