import axios from 'axios';
import envConfig from '../../env-config';
import { hostname, port } from './hostnameServerApi';

const api = axios.create({
  baseURL: `http://${hostname}:${port}/${envConfig.LOCAL_API_VERSION}`,
  headers: {
    'content-type': 'application/json',
  },
});

//
//debug
console.log(
  `http://${hostname}:${envConfig.LOCAL_API_PORT}/${envConfig.LOCAL_API_VERSION}`,
);

export default api;
