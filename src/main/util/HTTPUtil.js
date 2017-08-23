import Global from './global.js';
var HTTPUtil = {};
var getPathVariable = txt => {
    let matches = [];
    let regex = /{(.*?)}/g;
    let match = regex.exec(txt);
    while (match != null) {
        matches.push(match);
        match = regex.exec(txt);
    }
    return matches;
}
HTTPUtil.api = (type, uri, queryParams, bodyParams) => {
    let url = Global.hostApi + uri
    if (queryParams) {
        //check for path variables first
        let pathVariables = getPathVariable(uri);
        if (pathVariables.length > 0) {
            pathVariables.forEach(item => {
                url.replace(item[0],queryParams[item[1]]);
                queryParams[item[1]] = undefined;
            })
        }
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(queryParams).forEach(key => paramsArray.push(key + '=' + queryParams[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (Global.token) headers.Authorization = 'Bearer ' + Global.token;
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method:type,
            headers: headers,
            body: bodyParams ? JSON.stringify(bodyParams) : null,
        })
            .then((response) => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } else {
                    console.log(Global.token);
                    reject(response)
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject(err)
            })
    })
}
/**
 * 基于 fetch 封装的 GET请求
 * @param uri
 * @param params {}
 * @returns {Promise}
 */
HTTPUtil.get = (uri, params) => HTTPUtil.api('GET',uri,params);


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param uri
 * @param formData
 * @returns {Promise}
 */
HTTPUtil.post = (uri, queryParams, bodyParams) => HTTPUtil.api('POST',uri,queryParams,bodyParams);

export default HTTPUtil;
