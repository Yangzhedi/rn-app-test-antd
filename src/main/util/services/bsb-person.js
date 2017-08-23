import fetcher from 'util/HTTPUtil.js';
export default {
    getPersonInfo: fetcher.wrapper('GET','/bsb-person-infos'),
    updatePersonInfo: fetcher.wrapper('PUT','/bsb-person-infos'),
    personInfoNameCheck: fetcher.wrapper('POST','/bsb-person-infos/name-check'),
    getParticipantsAll: fetcher.wrapper('GET','/bsb-person-infos/participants-all'),
    personInfoRename: fetcher.wrapper('POST','/bsb-person-infos/rename'),
    personInfoRenameTSportName: fetcher.wrapper('POST','/bsb-person-infos/rename/t-sport-name'),
    getSeriesAll: fetcher.wrapper('GET','/bsb-person-infos/series-all'),
    getTournamentsAll: fetcher.wrapper('GET','/bsb-person-infos/tournaments-all'),
    getTournamentsAllHistory: fetcher.wrapper('GET','/bsb-person-infos/tournaments-all/history'),
    getUJTAll: fetcher.wrapper('GET','/bsb-person-infos/uJT-all'),
    updatePersonAvatarURL: fetcher.wrapper('PUT','/bsb-person-infos/updatePersonAvatarURL'),
    getImageUploadToken: fetcher.wrapper('GET','/bsb-person-infos/{key}/getImageUploadToken')
};
