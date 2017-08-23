import fetcher from 'util/HTTPUtil.js';
export default {
    getAccount : (queryParams,bodyParams) => fetcher.get('/account',queryParams,bodyParams),
    saveAccount : (queryParams,bodyParams) => fetcher.post('/account',queryParams,bodyParams),
    changePassword : (queryParams,bodyParams) => fetcher.post('/account/change-password',queryParams,bodyParams),
    finishPasswordReset : (queryParams,bodyParams) => fetcher.post('/account/reset_password/finish',queryParams,bodyParams),
    requestPasswordReset : (queryParams,bodyParams) => fetcher.post('/account/reset_password/init',queryParams,bodyParams),
    activateAccount : (queryParams,bodyParams) => fetcher.get('/activate',queryParams,bodyParams),
    login : (queryParams,bodyParams) => fetcher.post('/authenticate',queryParams,bodyParams),
    isAuthenticated : (queryParams,bodyParams) => fetcher.get('/authenticate',queryParams,bodyParams),
    resetPassword : (queryParams,bodyParams) => fetcher.post('/forget/resetPassword',queryParams,bodyParams),
    registerAccount : (queryParams,bodyParams) => fetcher.post('/register',queryParams,bodyParams)
};
