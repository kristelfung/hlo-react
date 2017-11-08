import rp from 'request-promise'

const baseUrl = "http://localhost:1337"

//TODO put URL of actual randomizers
export function getRandomCaregivers(){
    var options = {
        uri: baseUrl + '/caregiver',
        json: true
    };
    return rp(options);
}

export function getRandomJobs(){
    var options = {
        uri: baseUrl + '/job',
        json: true
    };
    return rp(options);
}

export function getProfile(id){
    var options = {
        uri: baseUrl + '/user/' + id,
        json: true
    };
    return rp(options);
} 
export function getListedJobs(id){

}
export function getSettings(id){
    var options = {
        uri: baseUrl + '/job',
        json: true
    };
    return rp(options);
}

export function getUser(id){
    var options = {
        uri: baseUrl + '/user/' + id,
        json: true
    };
    return rp(options);
}

export function getInbox(id){
    var options = {
        uri: baseUrl + '/message/inbox/' + id,
        json: true
    };
    return rp(options);
}