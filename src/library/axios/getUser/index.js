// export const GetUserForm=()=>{
//     formModal.eventListener('submit',(e)=>{

import axios from 'axios';

//     })
//     console.log(formModal);
// }
export const getData = async () => {
  const { data } = await axios.get('http://localhost:3000/user');
  return data;
};

