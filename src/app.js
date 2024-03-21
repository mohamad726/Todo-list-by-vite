import { El } from './components/shared/El';
import { btn } from './components/shared/button';

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
      btn('Add To list', 'border mr-5 mt-5'),
      btn('closed', 'border '),
    ],
  });
};
