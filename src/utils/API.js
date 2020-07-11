import axios from 'axios';

export default axios.create({
  baseURL: "https://jasminechan.xyz:3001/api/v1",
  responseType: "json"
});