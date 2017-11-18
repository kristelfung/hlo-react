import rp from 'request-promise'
import axios from 'axios';
import queryString from 'query-string';

axios.defaults.withCredentials = true;

//const baseUrl = "http://13.228.121.24:1337"
const baseUrl = "http://localhost:1337"

export function login(creds){
    const data = new FormData();
    for(var key in creds)
        data.append(key, creds[key]);
    return axios.post(baseUrl + '/user/login', data);
}
export function getPerson(){
    return axios.get(baseUrl + '/caregiver/featured');
}
export function logout(){
    return axios.post(baseUrl + '/user/logout');
}

export function signup(creds){
    creds.location = JSON.stringify(creds.location);
    const data = new FormData();
    for(var key in creds)
        data.append(key, creds[key]);
    return axios.post(baseUrl + '/user/signup', data);    
}
export function getFeaturedCaregivers(){
    return axios.get(baseUrl + '/caregiver/featured');
}

export function getFeaturedJobs(){
    return axios.get(baseUrl + '/job/featured');
}
//TODO put URL of actual randomizers
export function getRandomCaregivers(){
    return axios.get(baseUrl + '/caregiver');
}

export function getRandomJobs(){
    return axios.get(baseUrl + '/job');
    
}

export function getJobData(id){
    return axios.get(baseUrl + '/job/'+id);    
}

export function getUser(id){
    if(id===undefined) id="";
    return axios.get(baseUrl + '/user/' + id);
}

export function getInbox(id){
    return axios.get(baseUrl + '/message/inbox/');
}


export function sendMessage(message){
    console.log(message);
    message.replies = JSON.stringify(message.replies);
    const data = new FormData();
    for(var key in message)
        data.append(key, message[key]);
    return axios.post(baseUrl + '/message/', data);
}

export function replyMessage(message){
    console.log(message);
    const data = new FormData();
    for(var key in message)
        data.append(key, message[key]);
    return axios.post(baseUrl + '/message/reply', data);
}

export function getThread(threadID){
    return axios.get(baseUrl + '/message/'+threadID);
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
    const data = new FormData();
    for(var key in information)
        data.append(key, information[key]);
    return axios.post(baseUrl + '/user/updateCustomer', data);
}

export function updateCaregiverProfile(information){
    const data = new FormData();
    for(var key in information)
        data.append(key, information[key]);
    return axios.post(baseUrl + '/user/updateCaregiver', data);
}

export function updateSettings(information) {
    const data = new FormData();
    for(var key in information)
        data.append(key, information[key]);
    return axios.post(baseUrl + '/user/updateSettings', data);
}

export function saveJob(information, coverPic, profilePic) {
    const data = new FormData();
    for(var key in information)
        data.append(key, information[key]);

    axios.post(baseUrl + '/job', data).then(json => {   
        const data2 = new FormData();
        data2.append('profilePic', profilePic);
        axios.post(baseUrl + '/job/uploadProfilePic/'+json.data.id, data2).then(json => {
            console.log("Profile pic posted!");
        }).catch (err => {
            console.log("Profile pic err!", err);
        });

        const data3 = new FormData();    
        data3.append('coverPic', coverPic);
        axios.post(baseUrl + '/job/uploadCoverPic/'+json.data.id, data3).then(json => {
            console.log("coverPic posted!");            
        }).catch(err => {
            console.log("coverPic err!", err);            
        });
    }).catch(err => {
        console.log("Job err!", err);   
    });
}
export function hireCaregiver(information){
    const data = new FormData();
    for(var key in information)
        data.append(key, information[key]);
    return axios.post(baseUrl + '/caregiver/hire/', data);
}
export function getHiredCaregiver(id){
    return axios.get(baseUrl + '/caregiver/' + id);
}
function serialize(obj, prefix) {
  var str = [], p;
  for(p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        serialize(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
}
export function searchCaregivers(information){
    //var data = serialize(information);
    //var data = queryString.stringify(information);
    console.log(information);
    //return axios.get(baseUrl + '/user/searchCaregiver?'+ data);
}   
