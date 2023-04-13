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



// // use local storage to manage cart data
// const addToDb = id => {
//     let shoppingCart = getShoppingCart();
//     // add quantity
//     const quantity = shoppingCart[id];
//     if (!quantity) {
//         shoppingCart[id] = 1;
//     }
//     else {
//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
// }

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }

// const getShoppingCart = () => {
//     let shoppingCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;
// }

// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

// export {
//     addToDb,
//     removeFromDb,
//     getShoppingCart,
//     deleteShoppingCart
// }