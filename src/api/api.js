import rp from 'request-promise'
import axios from 'axios';
axios.defaults.withCredentials = true;

const baseUrl = "http://localhost:1337"

export function login(creds){
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

export function getListedJobs(id){
    var options = {
        uri: baseUrl + '/job/customer/' + id ,
        body : {
            id : id
        },
        json: true
    };
    return rp(options);
}
export function getSettings(id){
    var options = {
        uri: baseUrl + '/job',
        json: true
    };
    return rp(options);
}

export function getUser(id){
    if(id===undefined) id="";
    return axios.get(baseUrl + '/user/' + id);
}

/* message funcs */
export function getInbox(id){
    return axios.get(baseUrl + '/message/inbox/');
}

export function sendMessage(message){
    return axios.post(baseUrl + '/message/', message);
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
        uri: baseUrl + '/user/searchName?user='+search,
        body: {search: search},
        json: true
    };
    return rp(options);
}
export function updateCustomerProfile(information){
        var options = {
        uri: baseUrl + '/user/updateCustomer',
        body: information,
        method:'POST',
        json: true
    };
    return rp(options);
}
export function updateCaregiverProfile(information){
    var options = {
        uri: baseUrl + '/user/updateCaregiver',
        body: information,
        method:'POST',
        json: true
    };
    return rp(options);
}
export function updateSettings(information) {
    var options = {
        uri: baseUrl + '/user/updateSettings',
        body: information,
        method:'POST',
        json: true
    };
    return rp(options);
}