import axios from 'axios';

export default axios.create({
  baseURL: "http://10.140.17.148:3000/api/v1",
  responseType: "json"
});