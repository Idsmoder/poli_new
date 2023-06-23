
export const CanculateAp = (view) => {

    if (view.info6?.chcc && view.info6?.sad && view.info6?.dad && view.info5?.bodyMass && view.info5?.height && view.patient?.age) {
        let item = ((0.0011 * view.info6?.chcc) + (0.014 * view.info6?.sad) + (0.008 * view.info6?.dad) + (0.009 * view.info5?.bodyMass) + (0.009 * view.info5?.height) + (0.014 * view.patient?.age) - 0.27);
        return parseFloat(item).toFixed(2);
    }
    return 0;
}
export default CanculateAp;