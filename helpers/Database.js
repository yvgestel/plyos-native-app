import Axios from 'axios';
export default class DatabaseHelper {
    constructor(){
        this.baseURL = "http://192.168.1.103:3000";
    };

    async logIn (user) {
      let data = '';
      let error = {};
        try {
          const response = await Axios.post(`${this.baseURL}/user/login`, user);
          data = response.data;
        } catch (e) {
          error = e;   
        }
      return [data, error]
    };

    async privateFetch (path, token) {
      let response = "";
      let error = {};
      const header = {
        headers: {
          Authorization: "Bearer "+token
        }
      }
        try {
          response = await Axios.get(this.baseURL+path, header);
        } catch (err) {
          error = err;     
        }
      return [response, error];
    };

    async fetch (path) {
      let response = "";
      let error = {};
      try {
        response = await Axios.get(this.baseURL+path);
      } catch (err) {
        error = err;
      }
      return [response, error];
    };
}

