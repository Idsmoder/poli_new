
const View6 = ({patient,info,setInfo,height1} )=>{
    const count = 1;
  const measurePsv = () => {
    const gender = patient?.gender;
    const age = patient?.age;
    const height = height1 * 100;
    if (gender==0) {
      if (age>=15 && age<=19) {
        if (height<=140) {
          return "348";
        }
        if (height>140 && height<=145) {
          return "355"
        }
        if (height>145 && height<=150) {
          return "360"
        }
        if (height>150 && height<=155) {
          return "366"
        }
        if (height>155 && height<=160) {
          return "371"
        }
        if (height>160 && height<=165) {
          return "376"
        }
        if (height>165 && height<=170) {
          return "381"
        }
        if (height>170 && height<=175) {
          return "385"
        }
        if (height>175 && height<=180) {
          return "390"
        }
        if (height>180 && height<=185) {
          return "394"
        }
        if (height>185 && height<=190) {
          return "398"
        }
      }
      if (age>=20 && age<=24) {
        if (height<=140) {
          return "369";
        }
        if (height>140 && height<=145) {
          return "376"
        }
        if (height>145 && height<=150) {
          return "382"
        }
        if (height>150 && height<=155) {
          return "388"
        }
        if (height>155 && height<=160) {
          return "393"
        }
        if (height>160 && height<=165) {
          return "398"
        }
        if (height>165 && height<=170) {
          return "403"
        }
        if (height>170 && height<=175) {
          return "408"
        }
        if (height>175 && height<=180) {
          return "413"
        }
        if (height>180 && height<=185) {
          return "417"
        }
        if (height>185 && height<=190) {
          return "421"
        }
      }
      if (age>=25 && age<=29) {
        if (height<=140) {
          return "380";
        }
        if (height>140 && height<=145) {
          return "387"
        }
        if (height>145 && height<=150) {
          return "393"
        }
        if (height>150 && height<=155) {
          return "399"
        }
        if (height>155 && height<=160) {
          return "405"
        }
        if (height>160 && height<=165) {
          return "410"
        }
        if (height>165 && height<=170) {
          return "415"
        }
        if (height>170 && height<=175) {
          return "420"
        }
        if (height>175 && height<=180) {
          return "425"
        }
        if (height>180 && height<=185) {
          return "429"
        }
        if (height>185 && height<=190) {
          return "433"
        }
      }
      if (age>=30 && age<=34) {
        if (height<=140) {
          return "384";
        }
        if (height>140 && height<=145) {
          return "391"
        }
        if (height>145 && height<=150) {
          return "397"
        }
        if (height>150 && height<=155) {
          return "403"
        }
        if (height>155 && height<=160) {
          return "409"
        }
        if (height>160 && height<=165) {
          return "414"
        }
        if (height>165 && height<=170) {
          return "419"
        }
        if (height>170 && height<=175) {
          return "424"
        }
        if (height>175 && height<=180) {
          return "429"
        }
        if (height>180 && height<=185) {
          return "433"
        }
        if (height>185 && height<=190) {
          return "438"
        }
      }
      if (age>=35 && age<=39) {
        if (height<=140) {
          return "383";
        }
        if (height>140 && height<=145) {
          return "390"
        }
        if (height>145 && height<=150) {
          return "396"
        }
        if (height>150 && height<=155) {
          return "402"
        }
        if (height>155 && height<=160) {
          return "408"
        }
        if (height>160 && height<=165) {
          return "413"
        }
        if (height>165 && height<=170) {
          return "418"
        }
        if (height>170 && height<=175) {
          return "423"
        }
        if (height>175 && height<=180) {
          return "428"
        }
        if (height>180 && height<=185) {
          return "432"
        }
        if (height>185 && height<=190) {
          return "436"
        }
      }
      if (age>=40 && age<=44) {
        if (height<=140) {
          return "379";
        }
        if (height>140 && height<=145) {
          return "385"
        }
        if (height>145 && height<=150) {
          return "391"
        }
        if (height>150 && height<=155) {
          return "397"
        }
        if (height>155 && height<=160) {
          return "403"
        }
        if (height>160 && height<=165) {
          return "406"
        }
        if (height>165 && height<=170) {
          return "413"
        }
        if (height>170 && height<=175) {
          return "418"
        }
        if (height>175 && height<=180) {
          return "423"
        }
        if (height>180 && height<=185) {
          return "427"
        }
        if (height>185 && height<=190) {
          return "432"
        }
      }
      if (age>=45 && age<=49) {
        if (height<=140) {
          return "371";
        }
        if (height>140 && height<=145) {
          return "378"
        }
        if (height>145 && height<=150) {
          return "384"
        }
        if (height>150 && height<=155) {
          return "390"
        }
        if (height>155 && height<=160) {
          return "396"
        }
        if (height>160 && height<=165) {
          return "401"
        }
        if (height>165 && height<=170) {
          return "406"
        }
        if (height>170 && height<=175) {
          return "411"
        }
        if (height>175 && height<=180) {
          return "415"
        }
        if (height>180 && height<=185) {
          return "419"
        }
        if (height>185 && height<=190) {
          return "424"
        }
      }
      if (age>=50 && age<=54) {
        if (height<=140) {
          return "362";
        }
        if (height>140 && height<=145) {
          return "369"
        }
        if (height>145 && height<=150) {
          return "375"
        }
        if (height>150 && height<=155) {
          return "381"
        }
        if (height>155 && height<=160) {
          return "386"
        }
        if (height>160 && height<=165) {
          return "391"
        }
        if (height>165 && height<=170) {
          return "396"
        }
        if (height>170 && height<=175) {
          return "401"
        }
        if (height>175 && height<=180) {
          return "405"
        }
        if (height>180 && height<=185) {
          return "409"
        }
        if (height>185 && height<=190) {
          return "414"
        }
      }
      if (age>=55 && age<=59) {
        if (height<=140) {
          return "351";
        }
        if (height>140 && height<=145) {
          return "358"
        }
        if (height>145 && height<=150) {
          return "364"
        }
        if (height>150 && height<=155) {
          return "370"
        }
        if (height>155 && height<=160) {
          return "375"
        }
        if (height>160 && height<=165) {
          return "380"
        }
        if (height>165 && height<=170) {
          return "385"
        }
        if (height>170 && height<=175) {
          return "389"
        }
        if (height>175 && height<=180) {
          return "394"
        }
        if (height>180 && height<=185) {
          return "398"
        }
        if (height>185 && height<=190) {
          return "402"
        }
      }
      if (age>=60 && age<=64) {
        if (height<=140) {
          return "340";
        }
        if (height>140 && height<=145) {
          return "347"
        }
        if (height>145 && height<=150) {
          return "352"
        }
        if (height>150 && height<=155) {
          return "358"
        }
        if (height>155 && height<=160) {
          return "363"
        }
        if (height>160 && height<=165) {
          return "368"
        }
        if (height>165 && height<=170) {
          return "372"
        }
        if (height>170 && height<=175) {
          return "377"
        }
        if (height>175 && height<=180) {
          return "381"
        }
        if (height>180 && height<=185) {
          return "385"
        }
        if (height>185 && height<=190) {
          return "389"
        }
      }
      if (age>=65 && age<=69) {
        if (height<=140) {
          return "328";
        }
        if (height>140 && height<=145) {
          return "334"
        }
        if (height>145 && height<=150) {
          return "340"
        }
        if (height>150 && height<=155) {
          return "345"
        }
        if (height>155 && height<=160) {
          return "350"
        }
        if (height>160 && height<=165) {
          return "355"
        }
        if (height>165 && height<=170) {
          return "359"
        }
        if (height>170 && height<=175) {
          return "364"
        }
        if (height>175 && height<=180) {
          return "368"
        }
        if (height>180 && height<=185) {
          return "372"
        }
        if (height>185 && height<=190) {
          return "376"
        }
      }
      if (age>=70 && age<=74) {
        if (height<=140) {
          return "316";
        }
        if (height>140 && height<=145) {
          return "321"
        }
        if (height>145 && height<=150) {
          return "327"
        }
        if (height>150 && height<=155) {
          return "332"
        }
        if (height>155 && height<=160) {
          return "337"
        }
        if (height>160 && height<=165) {
          return "341"
        }
        if (height>165 && height<=170) {
          return "346"
        }
        if (height>170 && height<=175) {
          return "350"
        }
        if (height>175 && height<=180) {
          return "354"
        }
        if (height>180 && height<=185) {
          return "358"
        }
        if (height>185 && height<=190) {
          return "362"
        }
      }
      if (age>=75 && age<=79) {
        if (height<=140) {
          return "302";
        }
        if (height>140 && height<=145) {
          return "308"
        }
        if (height>145 && height<=150) {
          return "313"
        }
        if (height>150 && height<=155) {
          return "318"
        }
        if (height>155 && height<=160) {
          return "323"
        }
        if (height>160 && height<=165) {
          return "327"
        }
        if (height>165 && height<=170) {
          return "331"
        }
        if (height>170 && height<=175) {
          return "335"
        }
        if (height>175 && height<=180) {
          return "339"
        }
        if (height>180 && height<=185) {
          return "343"
        }
        if (height>185 && height<=190) {
          return "347"
        }
      }
      if (age>=80 && age<=84) {
        if (height<=140) {
          return "259";
        }
        if (height>140 && height<=145) {
          return "294"
        }
        if (height>145 && height<=150) {
          return "300"
        }
        if (height>150 && height<=155) {
          return "304"
        }
        if (height>155 && height<=160) {
          return "309"
        }
        if (height>160 && height<=165) {
          return "313"
        }
        if (height>165 && height<=170) {
          return "317"
        }
        if (height>170 && height<=175) {
          return "321"
        }
        if (height>175 && height<=180) {
          return "325"
        }
        if (height>180 && height<=185) {
          return "328"
        }
        if (height>185 && height<=190) {
          return "336"
        }
      }
      if (age>=85) {
        if (height<=140) {
          return "276";
        }
        if (height>140 && height<=145) {
          return "281"
        }
        if (height>145 && height<=150) {
          return "286"
        }
        if (height>150 && height<=155) {
          return "290"
        }
        if (height>155 && height<=160) {
          return "295"
        }
        if (height>160 && height<=165) {
          return "299"
        }
        if (height>165 && height<=170) {
          return "303"
        }
        if (height>170 && height<=175) {
          return "307"
        }
        if (height>175 && height<=180) {
          return "310"
        }
        if (height>180 && height<=185) {
          return "314"
        }
        if (height>185 && height<=190) {
          return "318"
        }
      }
    }
    if (gender==1) {
      if (age>=15 && age<=19) {
        if (height<=140) {
          return "414";
        }
        if (height>140 && height<=145) {
          return "423"
        }
        if (height>145 && height<=150) {
          return "432"
        }
        if (height>150 && height<=155) {
          return "440"
        }
        if (height>155 && height<=160) {
          return "448"
        }
        if (height>160 && height<=165) {
          return "456"
        }
        if (height>165 && height<=170) {
          return "463"
        }
        if (height>170 && height<=175) {
          return "469"
        }
        if (height>175 && height<=180) {
          return "476"
        }
        if (height>180 && height<=185) {
          return "482"
        }
        if (height>185 && height<=190) {
          return "488"
        }
      }
      if (age>=20 && age<=24) {
        if (height<=140) {
          return "456";
        }
        if (height>140 && height<=145) {
          return "466"
        }
        if (height>145 && height<=150) {
          return "475"
        }
        if (height>150 && height<=155) {
          return "484"
        }
        if (height>155 && height<=160) {
          return "492"
        }
        if (height>160 && height<=165) {
          return "500"
        }
        if (height>165 && height<=170) {
          return "508"
        }
        if (height>170 && height<=175) {
          return "515"
        }
        if (height>175 && height<=180) {
          return "522"
        }
        if (height>180 && height<=185) {
          return "529"
        }
        if (height>185 && height<=190) {
          return "536"
        }
      }
      if (age>=25 && age<=29) {
        if (height<=140) {
          return "481";
        }
        if (height>140 && height<=145) {
          return "491"
        }
        if (height>145 && height<=150) {
          return "501"
        }
        if (height>150 && height<=155) {
          return "510"
        }
        if (height>155 && height<=160) {
          return "519"
        }
        if (height>160 && height<=165) {
          return "527"
        }
        if (height>165 && height<=170) {
          return "536"
        }
        if (height>170 && height<=175) {
          return "543"
        }
        if (height>175 && height<=180) {
          return "551"
        }
        if (height>180 && height<=185) {
          return "558"
        }
        if (height>185 && height<=190) {
          return "564"
        }
      }
      if (age>=30 && age<=34) {
        if (height<=140) {
          return "494";
        }
        if (height>140 && height<=145) {
          return "504"
        }
        if (height>145 && height<=150) {
          return "514"
        }
        if (height>150 && height<=155) {
          return "524"
        }
        if (height>155 && height<=160) {
          return "533"
        }
        if (height>160 && height<=165) {
          return "542"
        }
        if (height>165 && height<=170) {
          return "550"
        }
        if (height>170 && height<=175) {
          return "558"
        }
        if (height>175 && height<=180) {
          return "566"
        }
        if (height>180 && height<=185) {
          return "573"
        }
        if (height>185 && height<=190) {
          return "580"
        }
      }
      if (age>=35 && age<=39) {
        if (height<=140) {
          return "499";
        }
        if (height>140 && height<=145) {
          return "509"
        }
        if (height>145 && height<=150) {
          return "519"
        }
        if (height>150 && height<=155) {
          return "529"
        }
        if (height>155 && height<=160) {
          return "536"
        }
        if (height>160 && height<=165) {
          return "547"
        }
        if (height>165 && height<=170) {
          return "555"
        }
        if (height>170 && height<=175) {
          return "563"
        }
        if (height>175 && height<=180) {
          return "571"
        }
        if (height>180 && height<=185) {
          return "578"
        }
        if (height>185 && height<=190) {
          return "585"
        }
      }
      if (age>=40 && age<=44) {
        if (height<=140) {
          return "497";
        }
        if (height>140 && height<=145) {
          return "508"
        }
        if (height>145 && height<=150) {
          return "518"
        }
        if (height>150 && height<=155) {
          return "527"
        }
        if (height>155 && height<=160) {
          return "536"
        }
        if (height>160 && height<=165) {
          return "547"
        }
        if (height>165 && height<=170) {
          return "554"
        }
        if (height>170 && height<=175) {
          return "561"
        }
        if (height>175 && height<=180) {
          return "569"
        }
        if (height>180 && height<=185) {
          return "576"
        }
        if (height>185 && height<=190) {
          return "583"
        }
      }
      if (age>=45 && age<=49) {
        if (height<=140) {
          return "491";
        }
        if (height>140 && height<=145) {
          return "501"
        }
        if (height>145 && height<=150) {
          return "511"
        }
        if (height>150 && height<=155) {
          return "520"
        }
        if (height>155 && height<=160) {
          return "530"
        }
        if (height>160 && height<=165) {
          return "538"
        }
        if (height>165 && height<=170) {
          return "546"
        }
        if (height>170 && height<=175) {
          return "554"
        }
        if (height>175 && height<=180) {
          return "562"
        }
        if (height>180 && height<=185) {
          return "569"
        }
        if (height>185 && height<=190) {
          return "576"
        }
      }
      if (age>=50 && age<=54) {
        if (height<=140) {
          return "480";
        }
        if (height>140 && height<=145) {
          return "491"
        }
        if (height>145 && height<=150) {
          return "500"
        }
        if (height>150 && height<=155) {
          return "510"
        }
        if (height>155 && height<=160) {
          return "519"
        }
        if (height>160 && height<=165) {
          return "527"
        }
        if (height>165 && height<=170) {
          return "535"
        }
        if (height>170 && height<=175) {
          return "543"
        }
        if (height>175 && height<=180) {
          return "550"
        }
        if (height>180 && height<=185) {
          return "557"
        }
        if (height>185 && height<=190) {
          return "564"
        }
      }
      if (age>=55 && age<=59) {
        if (height<=140) {
          return "467";
        }
        if (height>140 && height<=145) {
          return "477"
        }
        if (height>145 && height<=150) {
          return "487"
        }
        if (height>150 && height<=155) {
          return "496"
        }
        if (height>155 && height<=160) {
          return "505"
        }
        if (height>160 && height<=165) {
          return "513"
        }
        if (height>165 && height<=170) {
          return "521"
        }
        if (height>170 && height<=175) {
          return "528"
        }
        if (height>175 && height<=180) {
          return "536"
        }
        if (height>180 && height<=185) {
          return "543"
        }
        if (height>185 && height<=190) {
          return "549"
        }
      }
      if (age>=60 && age<=64) {
        if (height<=140) {
          return "452";
        }
        if (height>140 && height<=145) {
          return "462"
        }
        if (height>145 && height<=150) {
          return "471"
        }
        if (height>150 && height<=155) {
          return "480"
        }
        if (height>155 && height<=160) {
          return "489"
        }
        if (height>160 && height<=165) {
          return "497"
        }
        if (height>165 && height<=170) {
          return "504"
        }
        if (height>170 && height<=175) {
          return "512"
        }
        if (height>175 && height<=180) {
          return "519"
        }
        if (height>180 && height<=185) {
          return "525"
        }
        if (height>185 && height<=190) {
          return "530"
        }
      }
      if (age>=65 && age<=69) {
        if (height<=140) {
          return "436";
        }
        if (height>140 && height<=145) {
          return "445"
        }
        if (height>145 && height<=150) {
          return "454"
        }
        if (height>150 && height<=155) {
          return "463"
        }
        if (height>155 && height<=160) {
          return "471"
        }
        if (height>160 && height<=165) {
          return "479"
        }
        if (height>165 && height<=170) {
          return "486"
        }
        if (height>170 && height<=175) {
          return "493"
        }
        if (height>175 && height<=180) {
          return "500"
        }
        if (height>180 && height<=185) {
          return "506"
        }
        if (height>185 && height<=190) {
          return "514"
        }
      }
      if (age>=70 && age<=74) {
        if (height<=140) {
          return "418";
        }
        if (height>140 && height<=145) {
          return "427"
        }
        if (height>145 && height<=150) {
          return "436"
        }
        if (height>150 && height<=155) {
          return "444"
        }
        if (height>155 && height<=160) {
          return "452"
        }
        if (height>160 && height<=165) {
          return "460"
        }
        if (height>165 && height<=170) {
          return "467"
        }
        if (height>170 && height<=175) {
          return "474"
        }
        if (height>175 && height<=180) {
          return "480"
        }
        if (height>180 && height<=185) {
          return "486"
        }
        if (height>185 && height<=190) {
          return "492"
        }
      }
      if (age>=75 && age<=79) {
        if (height<=140) {
          return "400";
        }
        if (height>140 && height<=145) {
          return "408"
        }
        if (height>145 && height<=150) {
          return "417"
        }
        if (height>150 && height<=155) {
          return "425"
        }
        if (height>155 && height<=160) {
          return "432"
        }
        if (height>160 && height<=165) {
          return "440"
        }
        if (height>165 && height<=170) {
          return "447"
        }
        if (height>170 && height<=175) {
          return "453"
        }
        if (height>175 && height<=180) {
          return "459"
        }
        if (height>180 && height<=185) {
          return "465"
        }
        if (height>185 && height<=190) {
          return "472"
        }
      }
      if (age>=80 && age<=84) {
        if (height<=140) {
          return "381";
        }
        if (height>140 && height<=145) {
          return "389"
        }
        if (height>145 && height<=150) {
          return "397"
        }
        if (height>150 && height<=155) {
          return "405"
        }
        if (height>155 && height<=160) {
          return "412"
        }
        if (height>160 && height<=165) {
          return "419"
        }
        if (height>165 && height<=170) {
          return "426"
        }
        if (height>170 && height<=175) {
          return "432"
        }
        if (height>175 && height<=180) {
          return "438"
        }
        if (height>180 && height<=185) {
          return "444"
        }
        if (height>185 && height<=190) {
          return "451"
        }
      }
      if (age>=85) {
        if (height<=140) {
          return "362";
        }
        if (height>140 && height<=145) {
          return "371"
        }
        if (height>145 && height<=150) {
          return "378"
        }
        if (height>150 && height<=155) {
          return "385"
        }
        if (height>155 && height<=160) {
          return "392"
        }
        if (height>160 && height<=165) {
          return "399"
        }
        if (height>165 && height<=170) {
          return "406"
        }
        if (height>170 && height<=175) {
          return "411"
        }
        if (height>175 && height<=180) {
          return "417"
        }
        if (height>180 && height<=185) {
          return "422"
        }
        if (height>185 && height<=190) {
          return "428"
        }
      }
    }
  };
    

  const measureSadAndDad = () => {
    if (info?.sad === "") return "";
    if (info?.sad < 120 && info?.dad < 80)
      return "Оптимальное АД";
    if (info?.sad < 130 && info?.dad < 85) return "Нормальное АД";
    if (
      info?.sad > 130 &&
      info?.sad < 139 &&
      info?.dad > 85 &&
      info?.dad < 89
    )
      return "Высокое нормальное АД";
    if (
      info?.sad > 140 &&
      info?.sad < 159 &&
      info?.dad > 90 &&
      info?.dad < 99
    )
      return "АГ 1 степени";
    if (
      info?.sad > 160 &&
      info?.sad < 179 &&
      info?.dad > 100 &&
      info?.dad < 109
    )
      return "АГ 2 степени";
    if (info?.sad >= 180 && info?.dad >= 110)
      return "АГ 3 степени";
    if (info?.sad >= 140 && info?.dad <= 90)
      return "Изолированная систолическая АГ";
  };

  const adMerge = (ad) => {
    if (ad === 0) return "";
    if (ad === 40 || ad <= 50) return "";
    if (ad < 40) return "";
    if (ad > 50) return "";
    return;
  };
  const pulsMerge = (ad) => {
    if (ad === 0 || ad === "") return "";
    if (ad >= 60 && ad <= 90) return "В норме";
    if (ad < 60) return "брадикардия ";
    if (ad > 90) return "Тахикардия ";
    return;
  };
  return (
    <div>
      <div>
        <h6 className="mt-3 fw-bold" style={{ fontSize: "10px" }}>
          6. Гемодинамические показатели и показатели объективного статуса:
          {/* {age <= 15 && info.grow <= 140 ? info.tab6[0].adp : "no test"} */}
        </h6>
        <table
          className="table table-bordered p-0"
          style={{ fontSize: "10px" }}
        >
          <thead>
            <tr>
              <th className="p-0 col-1">№ п/п</th>
              <th className="p-0">Показатели</th>
              <th className="p-0">Исходно</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>САД мм.рт.ст</td>
              <td>{info?.sad}-{measureSadAndDad()}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ДАД мм.рт.ст</td>
              <td>{info?.dad}-{measureSadAndDad()}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Пульс (ЧСС) уд.в мин</td>
              <td>{info?.chcc}-{pulsMerge(info?.chcc)}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>АД пульсовое (АДП)</td>
              <td>{info?.sad - info?.dad}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>РО2 %</td>
              <td>
              {info?.po2Saturation}-
                {info?.po2Saturation?.length > 0 &&
                info?.po2Saturation > 94
                  ? "Сатурация в норме"
                  : ""}
                {info?.po2Saturation?.length > 0 &&
                info?.po2Saturation < 95
                  ? "Снижение сатурации"
                  : ""}
                 
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>ЧДД</td>
              <td>
              {info?.chdd}-
                {(info?.chdd === "0" && "везикулярное") ||
                  (info?.chdd === "1" && "ослабленное ") ||
                  (info?.chdd === "2" && "усиленное") ||
                  (info?.chdd === "3" && "жесткое")}
                  
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Аускультация легкие</td>
              <td>
                {info?.auscultationBreathing === "1"
                  ? "везикулярное"
                  : "" || info?.auscultationBreathing === "2"
                  ? "ослабленное"
                  : "" || info?.auscultationBreathing === "3"
                  ? "усиленное"
                  : "" || info?.auscultationBreathing === "4"
                  ? "жесткое"
                  : "" || info?.auscultationBreathing === "5"
                  ? "бронхиальное дыхание"
                  : "" || info?.auscultationBreathing === "6"
                  ? "Затрудненный и удлиненный выдох"
                  : ""}
                  {info?.chdd_1 ? "везикулярное, ":""}
                  {info?.chdd_2 ? "ослабленное, ":""}
                  {info?.chdd_3 ? "усиленное, ":""}
                  {info?.chdd_4 ? "жесткое, ":""}
                  {info?.chdd_5 ? "бронхиальное дыхание, ":""}
                  {info?.chdd_6 ? "Затрудненный и удлиненный выдох, ":""}
                  
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>Наличие хрипов</td>
              <td>
                {info?.wheezing_1== "1" ? "нет" : ""}
                {info?.wheezing_2== 1 ? "Хрипы сухие, " :""}
                {info?.wheezing_3== 1 ? "Хрипы влажные, " :"" }
                {info?.wheezing_4== "1" ? "крепитация, " :""}
                {info?.wheezing_5== "1" ? "шум трения плевры, " :""}
                {info?.wheezing_6== "1" ? "плевроперикардиальный шум с точной локализацией найденных шумов по межреберьям и топографическим линиям" : ""
                }
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>Аускультация сердце</td>
              <td>
                {(info?.corTones === "1" && "ясные") ||
                  (info?.corTones === "2" && "приглушены") ||
                  (info?.corTones === "3" && "глухие")}
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Наличие отеков</td>
              <td>
                {
                  info?.presenceEdema === "1"
                  ? "да"
                  : "нет"}
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Шум</td>
              <td>
                {info?.noise=="0" ? "нет" : "Есть"}
              </td>
            </tr>
            {info?.noise=="1" && info?.noise_systolic ? 
              <tr>
                <td></td>
                <td>Шум систолический</td>
                <td>{info?.noise_systolic_top ? "на верхушке, " :""}
                {info?.noise_systolic_aorta ? "на аорте, " :""}
                {info?.noise_systolic_pulmonary ? "на легочной артерии, " :""}
                {info?.noise_systolic_tricuspid ? "на трикуспидальном клапане"
                :""}
              </td>
              </tr>
            :""}
            {info?.noise=="1" && info?.noise_diastolic ?
              <tr>
                <td></td>
                <td>Шум диастолический</td>
                <td>{info?.noise_diastolic_top ? "на верхушке, " :""}
                {info?.noise_diastolic_aorta ? "на аорте, " :""}
                {info?.noise_diastolic_pulmonary ? "на легочной артерии, " :""}
                {info?.noise_diastolic_tricuspid ? "на трикуспидальном клапане"
                :""}
              </td>
              </tr>
            :""}  
          
            <tr>
              <td>12</td>
              <td>Дополнения</td>
              <td>{info?.noiseComment}</td>
            </tr>
            <tr>
              <td>13</td>
              <td>ПСВ мл/мин</td>
              <td>{info?.psv}-{info?.psv >=measurePsv() ? "ПСВ норма" : "ПСВ снижена" }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default View6;