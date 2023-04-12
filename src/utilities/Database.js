// Functionalities to manage database..

const addToDb = detail => {
    // let appliedBin = getAppliedBin();

    // // const quantity = appliedBin[id];
    // if (!newDetails) {
    //     appliedBin = newDetails;
    // }
    // else {
    //     // const newQuantity = quantity + 1;
    //     // appliedBin[id] = newQuantity;
    // }
    let appliedBin = getAppliedBin();
    
    // console.log(detail)

    const exist = appliedBin[detail]
    if (!exist) {
        appliedBin = detail;
    }
    localStorage.setItem('applied-bin', JSON.stringify(appliedBin));
}

const removeFromDb = id => {
    const appliedBin = getAppliedBin();
    if (id in appliedBin) {
        delete appliedBin[id];
        localStorage.setItem('applied-bin', JSON.stringify(appliedBin));
    }
}

const getAppliedBin = () => {
    let appliedBin = {};

    //get the applied bin from local storage
    const storedBin = localStorage.getItem('applied-bin');
    if (storedBin) {
        appliedBin = JSON.parse(storedBin);
    }
    return appliedBin;
}

const deleteAppliedBin = () => {
    localStorage.removeItem('applied-bin');
}

export {
    addToDb,
    removeFromDb,
    getAppliedBin,
    deleteAppliedBin
}