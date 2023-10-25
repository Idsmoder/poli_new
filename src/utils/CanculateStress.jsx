import './style.css'
import { useEffect, useState } from 'react';
const CanculateStress = (info10,patient) => {
    const [type, setType] = useState(null);
    useEffect(() => {

    if (patient?.gender=="0") {
        if (info10?.stressLevel >=parseFloat(0.00) && info10?.stressLevel <= parseFloat(1.17)) {
            setType(1);
        }
        if (info10?.stressLevel >= parseFloat(1.18) && info10?.stressLevel <= parseFloat(2.17)) {
          return "Средний";
        }
        if (info10?.stressLevel >= parseFloat(2.18) && info10?.stressLevel <= parseFloat(3.00)) {
            setType(1);
        }
      }else{
        if (info10?.stressLevel >=parseFloat(0.00) && info10?.stressLevel <= parseFloat(0.99)) {
          return "Низкий";
        }
        if (info10?.stressLevel >= parseFloat(1.00) && info10?.stressLevel <= parseFloat(1.99)) {
          return "Средний";
        }
        if (info10?.stressLevel >= parseFloat(2.00) && info10?.stressLevel >= parseFloat(3.00)) {
            setType(1);
        }
      }
    }, [])
    return (
        <div>
            {type==1 &&
            <p className='header_title'>
                Программа антистресс
            </p>
            }
           
            
        </div>
    );
}
export default CanculateStress;