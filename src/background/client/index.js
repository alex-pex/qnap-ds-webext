import axios from 'axios';
import qs from 'qs';

export const STATE_PAUSED = 1;
export const STATE_STOPPED = 2;
export const STATE_COMPLETED = 5;
export const STATE_SEEDING = 100;
export const STATE_DOWNLOADING = 104;

let sid = null;

const makeClient = ({ domain, user, pass }) => {
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
    if (!sid) {
      const response = await axios.post('/Misc/Login', { user, pass }, clientConfig);
      sid = response.data.sid;
      setTimeout(() => {
        sid = null;
      }, 300000);
    }

    return { ...config, data: { ...config.data, sid } };
  });

  return {
    getTaskList: () => client.post('/Task/Query'),
    addTask: ({ url, temp = 'Download', move = 'Download' }) =>
      client.post('/Task/AddUrl', { url, temp, move }),
  };
};

export default makeClient;
