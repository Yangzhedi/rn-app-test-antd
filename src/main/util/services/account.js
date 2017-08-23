import fetcher from 'util/HTTPUtil.js';
export default {
    getAccount : fetcher.wrapper('GET','/account'),
    saveAccount : fetcher.wrapper('POST','/account'),
    changePassword : fetcher.wrapper('POST','/account/change-password'),
    finishPasswordReset : fetcher.wrapper('POST','/account/reset_password/finish'),
    requestPasswordReset : fetcher.wrapper('POST','/account/reset_password/init'),
    activateAccount : fetcher.wrapper('GET','/activate'),
    login : fetcher.wrapper('POST','/authenticate'),
    isAuthenticated : fetcher.wrapper('GET','/authenticate'),
    resetPassword : fetcher.wrapper('POST','/forget/resetPassword'),
    registerAccount : fetcher.wrapper('POST','/register')
};
