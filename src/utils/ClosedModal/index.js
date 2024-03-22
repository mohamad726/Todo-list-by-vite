export const closedModal = () => {
  const btnclosedModal = document.querySelectorAll('.btnClosedModal');
btnclosedModal.forEach((itme) => {
  itme.addEventListener('click', ()=>{
View_modal.style.display = 'none';
Show_modal.style.display = 'none';
Edit_modal.style.display = 'none';
  });
});

};
