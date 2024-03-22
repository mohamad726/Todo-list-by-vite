import { List } from './components/home/List';
import { El } from './components/shared/El';
import { Btn } from './components/shared/button';
import { MainLayout } from './layout';
export const App = () => {
  return El({
    element: 'div',
    className: ' gap-10 ',
    children: [
      El({
        element: 'div',
        children: 'slam',
        className: 'bg-red-200',
      }),

      El({
        element: 'div',
        children: 'slam111',
        className: 'bg-green-400',
      }),
      Btn('Add To', 'border mr-5 mt-5'),
      Btn('closed', 'border '),
    ],
  });
};

