import Global from './global.js';
var HTTPUtil = {};
/**
 * 基于 fetch 封装的 GET请求
 * @param uri
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.get = function(uri, params) {
    url = Global.hostApi + uri
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function (resolve, reject) {
        console.log(url,Global.token);
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + Global.token }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((err)=> {
                console.log(err);
                reject({status:-1});
            })
    })
}


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param uri
 * @param formData
 * @param headers
 * @returns {Promise}
 */
HTTPUtil.post = function (uri, formData) {
    url = Global.hostApi + uri;
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + Global.token },
            body:JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
};

export default HTTPUtil;
