// export const submit=document.getElementById('formModal')
// console.log(submit);
// submit.addEventListener('submit', handleSubmit);

import { sendUserData } from "@/library/axios/sendDataToUser";

export const handleSubmit = () => {
  const submit = document.getElementById('formModal');
  submit.addEventListener('submit', (e) => {
    e.preventDefault();
    const {userName}=e.target
console.log(taskName.value);
sendUserData()


  });
};
// function handleSubmit(e) {
//    

//     let date = new Date().toLocaleDateString('fa-IR');

//     const user = {
//       taskNameObj: taskName.value,
//       descriptionObj: description.value,
//       priorityObj: selectPriority.value,
//       statusObj: selectStatus.value,
//       dateObj: date,
//       id: Date.now(),
//     };
//     handleError();
//     if (validateInputs()) {
//       listTtem.push(user);
//       let setlistTtem = JSON.stringify(listTtem);
//       localStorage.setItem('user', setlistTtem);
//       renderData();
//       emptyValueForm();
//       // sortData();
//     }
//   }
