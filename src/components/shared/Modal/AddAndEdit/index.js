import { option } from '@/components/shared/option';
import { El } from '../../El';
import { input } from '../../input';
import { Btn } from '../../button';

export const showMadal = () => {
  const Show_modal = document.getElementById('Show_modal');
  Show_modal.style.display = 'grid';
};



 const modalAddAndEdit = (btnName,idForm,id_InputTask,id_InputDescription) => {
  return El({
    element: 'form',
    className: 'flex flex-col w-full gap-5',
    id: idForm,
    children: [
      input(`${id_InputTask}`, 'Text', 'taskName', 'Task Name'),
      input(`${id_InputDescription}`, 'Text', 'description', 'Description'),
      El({
        element: 'select',
        className: 'text-black p-2',
        id: 'priority',
        children: [
          option('', 'Select Priority'),
          option('Low', 'Low'),
          option('Medium', 'Medium'),
          option('High', 'High', 'selected'),
        ],
      }),

      El({
        element: 'select',
        className: 'text-black p-2',
        id: 'priority',
        children: [
          option('', 'Select Status', 'selected'),
          option('Todo', 'Todo'),
          option('Doing', 'Doing'),
          option('Done', 'Done'),
        ],
      }),
      El({
        element: 'div',
        className: 'flex justify-around mt-2',
        children: [
          Btn(
            `${btnName}`,
            'submit',
            'py-2 px-6 border rounded-sm duration-300 hover:shadow-[#a78bfa] shadow-md'
          ),
          Btn(
            ' Cancel',
            'button',
            'btnClosedModal py-2 px-6 border rounded-sm duration-300 hover:shadow-[#a78bfa] shadow-md'
          ),
        ],
      }),
    ],
  });
};



export const Modal = (titleModal, id_modal, btnName,idForm,id_InputTask,id_InputDescription) => {
  return El({
    element: 'section',
    className:
      'hidden  w-full h-full absolute top-0 bg-[rgba(0,0,0,0.60)] justify-center items-center',
    id: `${id_modal}`,
    children: [
      El({
        element: 'div',
        className:
          'modal w-[600px] rounded-md shadow-[0_0_20px] shadow-[#a78bfa] border bg-black text-cyan-50 flex flex-col p-10 gap-2 items-center',
        children: [
          El({
            element: 'h3',
            innerHtml: `${titleModal}`,
            
          }),
          modalAddAndEdit(btnName,idForm,id_InputTask,id_InputDescription),
        ],
      }),
    ],
  });
};
