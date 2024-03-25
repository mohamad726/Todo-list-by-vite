import axios from 'axios';

export async function sendUserData(obj) {
  return await axios.post('http://localhost:3000/user', obj);
}
