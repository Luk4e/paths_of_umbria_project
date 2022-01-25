import axios from 'axios';
const baseUrl = 'https://salty-coast-68919.herokuapp.com/api/paths';

const getAll = () => {
  const request =  axios.get(baseUrl);
  return request.then(response => response.data);
};

export default { getAll };
