// Functionalities to manage database..

const addToDb = id => {
    let appliedBin = getAppliedBin();
    // add quantity
    const quantity = appliedBin[id];
    if (!quantity) {
        appliedBin[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedBin[id] = newQuantity;
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
    const storedCart = localStorage.getItem('applied-bin');
    if (storedCart) {
        appliedBin = JSON.parse(storedCart);
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