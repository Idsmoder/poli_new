

export const CanAgeSmokingMale = (item_s) => {
const item = item_s;

    if (item?.age>40) {
        if (item?.age>40 && item?.age<=44) {
            if (item?.sad_type==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 6;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 7;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 9;
                }else if (item?.hd>=6.0) {
                    return 11;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.sad_type==2) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 8;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 10;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 12;
                }else if (item?.hd>=6.0) {
                    return 14;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.sad_type==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 11;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 13;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 16;
                }else if (item?.hd>=6.0) {
                    return 19;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.sad_type==4) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 14;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 17;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 20;
                }else if (item?.hd>=6.0) {
                    return 24;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>44 && item?.age<=49) {
            if (item?.type_sad==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 8;
                }else if (item>=4.0 && item<=4.9) {
                    return 9;
                }else if (item>=5.0 && item<=5.9) {
                    return 11;
                }else if (item>=6.0) {
                    return 13;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 10;
                }else if (item>=4.0 && item<=4.9) {
                    return 12;
                }else if (item>=5.0 && item<=5.9) {
                    return 14;
                }else if (item>=6.0) {
                    return 17;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 13;
                }else if (item>=4.0 && item<=4.9) {
                    return 16;
                }else if (item>=5.0 && item<=5.9) {
                    return 18;
                }else if (item>=6.0) {
                    return 22;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 17;
                }else if (item>=4.0 && item<=4.9) {
                    return 20;
                }else if (item>=5.0 && item<=5.9) {
                    return 24;
                }else if (item>=6.0) {
                    return 28;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>49 && item?.age<=55) {
            if (item?.type_sad==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 10;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 12;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 14;
                }else if (item?.hd>=6.0) {
                    return 16;
                }else{
                    return "не возможно посчитать"
                }
                    
            }else if (item?.type_sad==2) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 13;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 15;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 17;
                }else if (item?.hd>=6.0) {
                    return 20;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 17;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 19;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 22;
                }else if (item?.hd>=6.0) {
                    return 25;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd>=3.0 && item?.hd>=3.9) {
                    return 21;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 24
                }else if (item?.hd>5.0 && item?.hd<=5.9) {
                    return 28;
                }else if (item?.hd>6.0) {
                    return 31;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>55 && item?.age<=60) {
            if (item?.type_sad==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 13;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 15;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 17;
                }else if (item?.hd>=6.0) {
                    return 19;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 17;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 19;
                }else if (item?.hd<=5.0 && item>=5.9) {
                    return 21;
                }else if (item?.hd>= 6.0) {
                    return 24;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 21
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 23
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 26
                }else if (item?.hd>=6.0 ) {
                    return 29;
                }else{
                    return "не возможно посчитать"
                }
            }else if(item?.type_sad==4){
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 25
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 28
                }else if(item?.hd>=5.0 && item?.hd<=5.9){
                    return 32
                }else if (item?.hd>=6.0) {
                    return 35;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>60 && item?.age<=65) {
            if (item?.type_sad==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 17;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 19;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 21;
                }else if (item?.hd>=6.0) {
                    return 23;
                }else{
                    return "не возможно посчитать"
                }
                    
            }else if (item?.hd>=3.0 && item?.hd<=3.9) {
                if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 21;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 23;
                }else if (item?.hd>=6.0) {
                    return 25;
                }else if (item?.hd>=6.0) {
                    return 28;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 25;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 28;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 31;
                }else if (item?.hd>=6.0) {
                    return 33;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 31;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 33;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 36;
                }else if (item?.hd>=6.0) {
                    return 38;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>65 && item?.age<=70) {
            if (item?.type_sad==1) {
                if(item?.hd>=3.0 && item?.hd<=3.9){
                    return 22;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 24;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 26;
                }else if (item?.hd>=6.0) {
                    return 28;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if(item?.hd>=3.0 && item?.hd<=3.9){
                    return 26;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 28;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 30;
                }else if (item?.hd>=6.0) {
                    return 33;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if(item?.hd>=3.0 && item?.hd<=3.9){
                    return 31;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 33;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 36;
                }else if (item?.hd>=6.0) {
                    return 38;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if(item?.hd>=3.0 && item?.hd<=3.9){
                    return 36;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 39;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 42;
                }else if (item?.hd>=6.0) {
                    return 44;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>70 && item?.age<=75) {
            if (item?.type_sad==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 31;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 33;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 34;
                }else if (item?.hd>=6.0) {
                    return 36;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 35;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 36;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 38;
                }else if (item?.hd>=6.0) {
                    return 40;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 39;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 41;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 42;
                }else if (item?.hd>=6.0) {
                    return 44;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 43
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 45
                }else if(item?.hd>=5.0 && item?.hd<=5.9){
                    return 47
                }else if (item?.hd>=6.0) {
                    return 49
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>75 && item?.age<=80) {
            if (item?.type_sad==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 36;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 38;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 41;
                }else if (item?.hd>=6.0) {
                    return 43
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 39;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 41;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 44;
                }else if (item?.hd>=6.0) {
                    return 47;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 42;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 44;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 47;
                }else if (item?.hd>=6.0) {
                    return 50;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 45;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 48;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 51;
                }else if (item?.hd>=6.0) {
                    return 54;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>80 && item?.age<=85 ) {
            if (item?.type_sad==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 40;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 44;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 48;
                }else if (item?.hd>=6.0) {
                    return 51;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 43;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 46;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 50;
                }else if (item?.hd>=6.0) {
                    return 54;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 45;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 49;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 52;
                }else if (item?.hd>=6.0) {
                    return 56;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 47;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 51;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 55;
                }else if (item?.hd>=6.0) {
                    return 59;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>85) {
            if (item?.type_sad==1) {
                if (item?.hd<=3.0 && item?.hd<=3.9) {
                    return 46;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 50;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 55;
                }else if (item?.hd>=6.0) {
                    return  60;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.0 && item?.hd<=3.9) {
                    return 47;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 52;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 56;
                }else if (item?.hd>=6.0) {
                    return 61;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.0 && item?.hd<=3.9) {
                    return 48;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 53;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 58;
                }else if (item?.hd>=6.0) {
                    return 63;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.0 && item?.hd<=3.9) {
                    return 49;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 54;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 59;
                }else if (item?.hd>=6.0) {
                    return 64;
                }else{
                    return "не возможно посчитать"
                }
            }
        }
    }else{
        if (item?.type_sad==1) {
            if (item?.hd<=4.9) {
                return 2;
            }else if (item?.hd>4.9 && item?.hd<=5.9) {
                return 2;
            }else if (item?.hd>6.0 && item?.hd<=6.9) {
                return 3;
            }else if (item?.hd>7.0 && item?.hd<=7.9) {
                return 3;
            }else if (item?.hd>8.0 && item?.hd<=8.9) {
                return 4;
            }else{
                return "не возможно посчитать"
            }
        }else if (item?.type_sad==2) {
            if (item?.hd<=4.9) {
                return 3;
            }else if (item?.hd>4.9 && item?.hd<=5.9) {
                return 3;
            }else if (item?.hd>6.0 && item?.hd<=6.9) {
                return 4;
            }else if (item?.hd>7.0 && item?.hd<=7.9) {
                return 5;
            }else if (item?.hd>8.0 && item?.hd<=8.9) {
                return 6;
            }else{
                return "не возможно посчитать"
            }
        }else if (item?.type_sad==3) {
            if (item?.hd<=4.9) {
                return 4;
            }else if (item?.hd>4.9 && item?.hd<=5.9) {
                return 5;
            }else if (item?.hd>6.0 && item?.hd<=6.9) {
                return 6;
            }else if (item?.hd>7.0 && item?.hd<=7.9) {
                return 7;
            }else if (item?.hd>8.0 && item?.hd<=8.9) {
                return 8;
            }else{
                return "не возможно посчитать"
            }
        }else if (item?.type_sad==4) {
            if (item?.hd<=4.9) {
                return 6;
            }else if (item?.hd>4.9 && item?.hd<=5.9) {
                return 7;
            }else if (item?.hd>6.0 && item?.hd<=6.9) {
                return 8;
            }else if (item?.hd>7.0 && item?.hd<=7.9) {
                return 10;
            }else if (item?.hd>8.0 && item?.hd<=8.9) {
                return 12;
            }else{
                return "не возможно посчитать"
            }
        }
    }
}
export default CanAgeSmokingMale;