export * from './constants';



export const setItemInLocalStorage = (key, value) => {
    if (!value || !key) {
        return console.error("Can not store in LS");
    }

    const valueStore = typeof value !== "string" ? JSON.stringify(value) : value
    localStorage.setItem(key, valueStore);
}

export const getItemFromLocalStorage = (key) => {
    if (!key) {
        return console.error("Can get the value from LS")
    }

    localStorage.getItem(key);
}

export const removeItemFromLocalStorage = (key, value) => {
    if (!key) {
        return console.error("Can get the value from LS")
    }

    localStorage.removeItem(key);
}

export const getFormBody = (params) => {

    let fromBody = [];

    for (let property in params) {
        let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]); //sushil 123 => sushil%2020123

        fromBody.push(encodedKey + "=" + encodedValue)
    }

    return fromBody.join('&');  // username=sushil&password=123123
}
