import { El } from '@/components/shared/El';

export const Footer = () => {
 
  return El({
    element: 'div',
    className: 'flex justify-end mt-8',
    children: [
      El({
        element: 'div',
        id:"qw",
        className: 'ml-5',
        children: 'Rows per page:',
      }),
      El({
        element: 'select',
        className: 'ml-5 cursor-pointer',
        children: [
          El({
            element: 'option',
            selected: 'selected',
            children: 'All',
          }),
          El({
            element: 'option',
            children: '1-3',
          }),
          El({
            element: 'option',
            children: '1-6',
          }),
          El({
            element: 'option',
            children: '1-10',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'ml-8',
        children: '1-3 of 3',
      }),
      El({
        element: 'span',
        className: 'ml-6 cursor-pointer',
        children: '<',
      }),
      El({
        element: 'span',
        className: 'ml-6 mr-2 cursor-pointer',
        children: '>',
      }),
    ],
  });
};


