import rp from 'request-promise'
import axios from 'axios';
axios.defaults.withCredentials = true;

const baseUrl = "http://localhost:1337"

export function login(creds){
    return axios.post(baseUrl + '/user/login', creds);
}

export function logout(){
    return axios.post(baseUrl + '/user/logout');
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
    return axios.post(baseUrl + '/message/reply', message);
}

export function getThread(threadID){
    return axios.get( baseUrl + '/message/'+threadID);
}

export function markRead(threadID){
    return axios.post(baseUrl + '/message/markRead/'+threadID);
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
export function saveJob(information, coverPic, profilePic) {
    axios.post(baseUrl + '/job', information).then(json => {   
        const data = new FormData();
        data.append('profilePic', profilePic);
        axios.post(baseUrl + '/job/uploadProfilePic/'+json.data.id, data).then(json => {
            console.log("Profile pic posted!");
        }).catch (err => {
            console.log("Profile pic err!", err);
        });

        const data2 = new FormData();    
        data2.append('coverPic', coverPic);
        axios.post(baseUrl + '/job/uploadCoverPic/'+json.data.id, data2).then(json => {
            console.log("coverPic posted!");            
        }).catch(err => {
            console.log("coverPic err!", err);            
        });
    }).catch(err => {
        console.log("Job err!", err);   
    });
}

export function saveCoverPic(information) {
    var options = {
        uri: baseUrl + '/job/uploadCoverPic',
        body: information,
        method:'POST',
        json: true
    };
    return rp(options);
}
export function saveProfilePic(information) {
    var options = {
        uri: baseUrl + '/job/uploadProfilePic',
        body: information,
        method:'POST',
        json: true
    };
    return rp(options);
}