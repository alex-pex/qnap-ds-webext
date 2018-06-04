import axios from 'axios';
import qs from 'qs';

const domain = 'http://192.168.0.20:8080';
const user = 'admin';
const pass = btoa('ali+pex');

const clientConfig = {
  baseURL: `${domain}/downloadstation/V4`,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [
    (data, headers) => {
      if (data && headers['Content-Type'] === 'application/x-www-form-urlencoded') {
        return qs.stringify(data);
      }

      return data;
    },
  ],
};

const client = axios.create(clientConfig);

client.interceptors.request.use(async config => {
  const response = await axios.post('/Misc/Login', { user, pass }, clientConfig);
  const { sid } = response.data;
  return { ...config, data: { ...config.data, sid } };
});

export const getTaskList = () => client.post('/Task/Query');
export const addTask = ({ url, temp = 'Download', move = 'Download' }) =>
  client.post('/Task/AddUrl', { url, temp, move });
