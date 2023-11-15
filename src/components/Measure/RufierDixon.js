const  RufierDixon = (body) => {
    const p1 = body?.p1
    const p2 = body?.p2
    const p3 = body?.p3
    const item = ((p2 -70) + (p3 - p1))/10;
    return (
        item
    )

}
export  default RufierDixon;