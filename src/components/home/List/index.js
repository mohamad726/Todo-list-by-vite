import { El } from '@/components/shared/El';
import { Modal } from '@/components/shared/Modal/AddAndEdit';
import { ListItems } from '@/components/main/ListItems';
import { ViewDataModal } from '@/components/shared/Modal/View';
import { getData } from '@/library/axios/getUser';

export const List = () => {
  return El({
    element: 'div',
    children: [
      Modal(
        'Add Data to list',
        'Show_modal',
        'Add To List',
        'formModal',
        'taskName',
        'description',
        'priority',
        'statusmodaladd'
      ),
      Modal(
        'Edit  list',
        'Edit_modal',
        'Save Edit List ',
        'submitEditForm',
        'inputEditTaskName',
        'inputEditDescription',
        'editValueSelectPriority',
        'editValueSelectStatus'
      ),
      ViewDataModal('View_modal'),
      ListItems(),
    ],
  });
};

const data = await getData();

export const Edit_Item = (e) => {
  Edit_modal.style.display = 'grid';
  //console.log(data);
  const finedItem = data.find((itme) => itme.id == e.target.id);
  inputEditTaskName.value = finedItem.taskName;
  inputEditDescription.value = finedItem.description;
  editValueSelectPriority.value = finedItem.priority;
  editValueSelectStatus.value = finedItem.statusTask;

};

export const Show_Item = () => {
  View_modal.style.display = 'grid';
};
