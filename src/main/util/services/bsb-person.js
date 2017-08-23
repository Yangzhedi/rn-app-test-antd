import fetcher from 'util/HTTPUtil.js';
export default {
    getPersonInfo: (queryParams,bodyParams) => fetcher.get('/bsb-person-infos',queryParams,bodyParams),
    updatePersonInfo: (queryParams,bodyParams) => fetcher.put('/bsb-person-infos',queryParams,bodyParams),
    personInfoNameCheck: (queryParams,bodyParams) => fetcher.post('/bsb-person-infos/name-check',queryParams,bodyParams),
    getParticipantsAll: (queryParams,bodyParams) => fetcher.get('/bsb-person-infos/participants-all',queryParams,bodyParams),
    personInfoRename: (queryParams,bodyParams) => fetcher.post('/bsb-person-infos/rename',queryParams,bodyParams),
    personInfoRenameTSportName: (queryParams,bodyParams) => fetcher.post('/bsb-person-infos/rename/t-sport-name',queryParams,bodyParams),
    getSeriesAll: (queryParams,bodyParams) => fetcher.get('/bsb-person-infos/series-all',queryParams,bodyParams),
    getTournamentsAll: (queryParams,bodyParams) => fetcher.get('/bsb-person-infos/tournaments-all',queryParams,bodyParams),
    getTournamentsAllHistory: (queryParams,bodyParams) => fetcher.get('/bsb-person-infos/tournaments-all/history',queryParams,bodyParams),
    getUJTAll: (queryParams,bodyParams) => fetcher.get('/bsb-person-infos/uJT-all',queryParams,bodyParams),
    updateOSSPersonAvatarURL: (queryParams,bodyParams) => fetcher.put('/bsb-person-infos/updateOSSPersonAvatarURL',queryParams,bodyParams),
    updatePersonAvatarURL: (queryParams,bodyParams) => fetcher.put('/bsb-person-infos/updatePersonAvatarURL',queryParams,bodyParams),
    getImageUploadToken: (queryParams,bodyParams) => fetcher.get('/bsb-person-infos/{key}/getImageUploadToken',queryParams,bodyParams),
    getOSSUploadUrl: (queryParams,bodyParams) => fetcher.get('/bsb-person-infos/{key}/getOSSUploadUrl',queryParams,bodyParams)
};
