import { El } from '@/components/shared/El';
import { Modal } from '@/components/shared/Modal/AddAndEdit';
import { ListItems } from '@/components/main/ListItems';
import { ViewDataModal } from '@/components/shared/Modal/View';

export const List = () => {
  return El({
    element: 'div',
    children: [
      Modal('Add Data to list', 'Show_modal', 'Add To List'),
      Modal('Edit  list', 'Edit_modal', 'Save Edit List '),
      ViewDataModal("View_modal"),
      ListItems(),
    ],
  });
};
