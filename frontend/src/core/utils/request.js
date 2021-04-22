import axios from "axios"
import qs from "qs";
import { CLIENT_ID, CLIENT_SECRET, getSessionData } from "./auth";

export const makeRequest = (params) => {
    return axios({
      ...params,
    });
}

export const makePrivateRequest = (params) => {
    const sessionData = getSessionData();
  
    const headers = {
      'Authorization': `Bearer ${sessionData.access_token}`
    }
  
    return makeRequest({ ...params, headers });
  }

export const makeLogin = data => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;
  
    const headers = {
      Authorization: `Basic ${window.btoa(token)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  
    const payload = qs.stringify({ ...data, grant_type: 'password' });
    return makeRequest({ url: 'http://localhost:8080/oauth/token', data: payload, method: 'POST', headers})
  }