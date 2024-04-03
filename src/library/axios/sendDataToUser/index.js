import axios from 'axios';

export async function sendUserData(dataList) {
  return await axios.post('http://localhost:3000/user', dataList);
}
