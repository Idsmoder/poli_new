export const CanAge = (item_s) => {
    const item = item_s
    if (item?.age >= 40) {
        if (item?.age>40 && item?.age<=44) {
            if (item?.type_sad==1) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 5;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 6;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 6;
                }else if (item?.hd>=6.0) {
                    return 7;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 7;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 8;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 9;
                }else if (item?.hd>=6.0) {
                    return 10;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 9;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 11;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 12;
                }else if (item?.hd>=6.0) {
                    return 14;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd>=3.0 && item?.hd<=3.9) {
                    return 11;
                }else if (item?.hd>=4.0 && item?.hd<=4.9) {
                    return 13;
                }else if (item?.hd>=5.0 && item?.hd<=5.9) {
                    return 15;
                }else if (item?.hd>=6.0) {
                    return 17;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>44 && item?.age<=49) {
            if (item?.type_sad==1) {
                if (item?.hd<=3.9) {
                    return 7;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 8;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 9;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 10;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.9) {
                    return 9;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 10;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 12;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 13;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.9) {
                    return 12;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 14;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 15;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 17;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.9) {
                    return 16;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 18;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 21;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 23;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>49 && item?.age<=54) {
            if (item?.type_sad==1) {
                if (item?.hd<=3.9) {
                    return 9;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 10;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 11;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 13;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.9) {
                    return 12;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 13;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 15;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 17;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.9) {
                    return 16;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 18;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 19;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 22;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.9) {
                    return 21;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 23;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 15;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 28;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>54 && item?.age<=59) {
            if (item?.type_sad==1) {
                if (item?.hd<=3.9) {
                    return 13;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 14;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 15;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 16;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.9) {
                    return 16;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 18;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 19;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 21;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.9) {
                    return 21;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 23;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 24;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 26;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.9) {
                    return 26;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 28;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 31;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 33;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>59 && item?.age<=64) {
            if(item?.type_sad==1){
                if (item?.hd<=3.9) {
                    return 17
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 18
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 20
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 21
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.9) {
                    return 22
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 23
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 25
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 26
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.9) {
                    return 27
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 29
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 30
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 32
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.9) {
                    return 33
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 35
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 37
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 39
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>64 && item?.age<=69) {
            if(item?.type_sad==1){
                if (item?.hd<=3.9) {
                    return 23;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 24;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 26;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 27;
                }else{
                    return "не возможно посчитать";
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.9) {
                    return 28;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 30;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 31;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 33;
                }else{
                    return "не возможно посчитать";
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.9) {
                    return 34;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 36;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 37;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 39;
                }else{
                    return "не возможно посчитать";
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.9) {
                    return 41;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 42;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 44;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 46;
                }else{
                    return "не возможно посчитать";
                }
            }
        }else if (item?.age>69 && item?.age<=74) {
            if (item?.type_sad==1) {
                if (item?.hd<=3.9) {
                    return 34;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 36;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 37;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 38;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.9) {
                    return 39;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 40;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 41;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 43;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.9) {
                    return 43;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 44;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 46;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 47;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.9) {
                    return 48;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 49;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 51;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 52;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>74 && item?.age<=79) {
            if (item?.type_sad==1) {
                if (item?.hd<=3.9) {
                    return 42;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 43;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 44;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 46;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.9) {
                    return 46;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 47;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 48;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 49;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.9) {
                    return 49;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 51;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 52;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 53;
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.9) {
                    return 53;
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 55;
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 56;
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 58;
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>79 && item?.age<=84) {
            if (item?.type_sad==1) {
                if (item?.hd<=3.9) {
                    return 50
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 51
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 53
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 54
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==2) {
                if (item?.hd<=3.9) {
                    return 53
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 54
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 56
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 57
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==3) {
                if (item?.hd<=3.9) {
                    return 56
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 57
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 59
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 60
                }else{
                    return "не возможно посчитать"
                }
            }else if (item?.type_sad==4) {
                if (item?.hd<=3.9) {
                    return 59
                }else if (item?.hd>3.9 && item?.hd<=4.9) {
                    return 60
                }else if (item?.hd>4.9 && item?.hd<=5.9) {
                    return 62
                }else if (item?.hd>5.9 && item?.hd<=6.9) {
                    return 63
                }else{
                    return "не возможно посчитать"
                }
            }
        }else if (item?.age>84 && item?.age<=89) {
            if(item?.type_sad==1){
                if(item?.hd<=3.9){
                    return 59
                }else if(item?.hd>3.9 && item?.hd<=4.9){
                    return 60
                }else if(item?.hd>4.9 && item?.hd<=5.9){
                    return 61
                }else if(item?.hd>5.9 && item?.hd<=6.9){
                    return 63
                }else{
                    return "не возможно посчитать"
                }
            }else if(item?.type_sad==2){
                if(item?.hd<=3.9){
                    return 61
                }else if(item?.hd>3.9 && item?.hd<=4.9){
                    return 62
                }else if(item?.hd>4.9 && item?.hd<=5.9){
                    return 63
                }else if(item?.hd>5.9 && item?.hd<=6.9){
                    return 65
                }else{
                    return "не возможно посчитать"
                }
            }else if(item?.type_sad==3){
                if(item?.hd<=3.9){
                    return 63
                }else if(item?.hd>3.9 && item?.hd<=4.9){
                    return 64
                }else if(item?.hd>4.9 && item?.hd<=5.9){
                    return 65
                }else if(item?.hd>5.9 && item?.hd<=6.9){
                    return 66
                }else{
                    return "не возможно посчитать"
                }
            }else if(item?.type_sad==4){
                if(item?.hd<=3.9){
                    return 65
                }else if(item?.hd>3.9 && item?.hd<=4.9){
                    return 66
                }else if(item?.hd>4.9 && item?.hd<=5.9){
                    return 67
                }else if(item?.hd>5.9 && item?.hd<=6.9){
                    return 68
                }else{
                    return "не возможно посчитать"
                }
            }
        }
    }else {
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
export default CanAge;