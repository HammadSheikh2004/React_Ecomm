const addToCart = (e) => {
    const carts = localStorage.getItem("carts");
    if (carts) {
        let parseData = JSON.parse(carts);
        let isAlreadyExist = parseData.find((val) => {
            return val.id == e.id;
        });
        if (isAlreadyExist) {
            return false;
        } else {
            localStorage.setItem("carts", JSON.stringify([...parseData, e]));
            return true;
        }
    } else {
        localStorage.setItem("carts", JSON.stringify([e]));
        return true;
    }
}

export { addToCart }