import axios from 'axios';
const baseUrl = '/api/paths';

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request =  axios.get(baseUrl);
  return request.then(response => response.data);
};

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then(response => response.data);
};

export default { getAll, setToken, getOne };
