import rp from 'request-promise'
import axios from 'axios';

const baseUrl = "http://localhost:1337"

export function login(creds){
    // var options = {
    //     uri: baseUrl + '/user/login',
    //     method: 'POST',
    //     body: creds,
    //     json: true
    // };
    // return rp(options);
    return axios.post(baseUrl + '/user/login', creds);
}

export function signup(creds){
    var options = {
        uri: baseUrl + '/user/signup',
        method: 'POST',
        body: creds,
        json: true
    };
    return rp(options);
}

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


/* message funcs */
export function getInbox(id){
    // var options = {
    //     uri: baseUrl + '/message/inbox/',
    //     json: true
    // };
    // return rp(options);
    return axios.get(baseUrl + '/message/inbox/', {withCredentials: true});
}

export function sendMessage(message){
    var options = {
        uri: baseUrl + '/message/',
        method: 'POST',
        body: message,
        json: true
    };
    return rp(options);
}

export function replyMessage(message){
    var options = {
        uri: baseUrl + '/message/reply',
        method: 'POST',
        body: message,
        json: true
    };
    return rp(options);
}

export function getThread(threadID){
    var options = {
        uri: baseUrl + '/message/'+threadID,
        method: 'GET',
        json: true
    };
    return rp(options);
}

export function searchUser(search){
    var options = {
        uri: baseUrl + '/user/search?user='+search,
        body: {search: search},
        json: true
    };
    return rp(options);
}