
import { sendUserData } from '@/library/axios/sendDataToUser';

export const handleSubmit = () => {
  const submit = document.getElementById('formModal');
  submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);

    let dataList = {
      taskName: taskName?.value,
      priority: priority.value,
      description: description?.value,
      statusTask: statusmodaladd.value,
      date: new Date().toLocaleDateString('fa-IR'),
    };
    sendUserData(obj);
    Show_modal.style.display = 'none';
   
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