const validateEmail = (email) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
    return regex.test(email);
};

const validateName = (name) => {
    const regex = /^([a-zA-Z ]){2,50}$/;
    return regex.test(name.trim());
};

const validatePassword = (password) => {
    return password.trim().length > 6;
};

const validatePrice = (price) => {};
const validateQuantity = (quantity) => {};

export {
    validateEmail,
    validateName,
    validatePassword,
    validatePrice,
    validateQuantity,
};
