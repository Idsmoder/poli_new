const tshxMeasure = (info) => {
    const tshx = info.tshx;
    const gender= info?.gender;
    if (tshx) {
      if (gender == "0") {
        if (tshx <= parseFloat(300)) return 1;
        if (tshx >= 301 && tshx <= 385)
          return 2
        if (tshx >= 386 && tshx <= 471)
          return 3
        if (tshx >= 472 && tshx <= 556)
          return 4
        if (tshx >= 557) return 5
      }
      if (gender === "1") {
        if (tshx <= 300) return 1;
        if (tshx >= 301 && tshx <= 400)
          return 2
        if (tshx >= 401 && tshx <= 500)
          return 3
        if (tshx >= 501 && tshx <= 600)
          return 4
        if (tshx >= 601) return 5
      }
    }else{
      return ""
    }
};
export default tshxMeasure;