import axios from "axios";

export const commonAPI = async (httpMethod, url, reqBody) => {
    // reqBody always object
    // any name use in reqConfig but not any type name in key
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return await axios(reqConfig).then(
        (res) => {
            return res
        }
    ).catch(err => {
        return err
    })
}