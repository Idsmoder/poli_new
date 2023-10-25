import CanSadSmokingMale from './Smoking/CanSadSmokingMale';
import CanSadNoSmokingMale from './NoSmoking/CanSadNoSmokingMale';

export const CanSmokingMale = (item) => {
    if (item?.smoking==1) {
        return CanSadSmokingMale(item);
    }else{
        return CanSadNoSmokingMale(item);
    }
}
export default CanSmokingMale;