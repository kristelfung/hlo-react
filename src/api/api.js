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