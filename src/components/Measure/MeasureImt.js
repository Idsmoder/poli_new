export const MeasureImt = (infoImt) => {
    const height = infoImt?.height;
    const bodyMass = infoImt?.bodyMass;
    const imt = bodyMass / (height * height);
    return imt.toFixed(2);
}