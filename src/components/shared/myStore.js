export default (key, prop, value) => {
    let data = sessionStorage.getItem(key);
    let parsedData = JSON.parse(data)
    parsedData.user[prop] = value;
    let stringifiedData = JSON.stringify(parsedData)
    sessionStorage.setItem(key, stringifiedData)   
}
