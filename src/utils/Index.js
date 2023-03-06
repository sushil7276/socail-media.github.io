export * from './constants';


export const getFormBody = (params) => {

    let fromBody = [];

    for (let property in params) {
        let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]); //sushil 123 => sushil%2020123

        fromBody.push(encodedKey + "=" + encodedValue)
    }

    return fromBody.join('&');  // username=sushil&password=123123
}
