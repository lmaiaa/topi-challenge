import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

const onError = () => {
  console.log('emitir error');
};

api.interceptors.response.use(({ data }) => data, onError);

export default { api };
