import { El } from '../../El';

export const ViewDataModal = (idViewModal) => {
  return El({
    element: 'section',
    className:
      'hidden   w-full h-full absolute top-0 bg-[rgba(0,0,0,0.60)] justify-center items-center',
    id: idViewModal,
    children: [
      El({
        element: 'div',
        className:
          'modal relative w-[600px] rounded-md shadow-[0_0_20px] shadow-[#a78bfa] border bg-black text-cyan-50 flex flex-col p-10 pt-4 gap-3 items-center',
        children: [
          El({
            element: 'h3',
            className: 'mb-3',
            innerText: 'View Data list',
          }),
          El({
            element: 'div',
            className:
              'border w-3/5 py-2 px-10 rounded-md bg-[rgb(9_103_255_/_19%)]',
            children: [
              El({
                element: 'label',
                innerText: 'TaskName : ',
              }),
              El({
                element: 'span',
                id: 'taskNameModal',
                innerText: 'Rollins',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'border w-3/5 py-2 px-10 rounded-md bg-[rgb(9_103_255_/_19%)]',
            children: [
              El({
                element: 'label',
                innerText: 'Priority :  ',
              }),
              El({
                element: 'span',
                id: 'priorityModal',
                className:
                  'rounded-lg px-[5px] py-[2px] text-black bg-amber-400',
                innerText: 'Medium',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'border w-3/5 py-2 px-10 rounded-md bg-[rgb(9_103_255_/_19%)]',
            children: [
              El({
                element: 'label',
                innerText: 'Status :  ',
              }),
              El({
                element: 'span',
                id: 'statusModal',
                className:
                  'bg-green-700 text-[#fff] rounded-md px-[5px] py-[2px]',
                innerText: 'Done',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'border mb-10 w-3/5 py-2 px-10 rounded-md bg-[rgb(9_103_255_/_19%)]',
            children: [
              El({
                element: 'label',
                innerText: 'Description :  ',
              }),
              El({
                element: 'span',
                id: 'descriptionModal',
                innerText: 'dgdshdfbgdjtffhfd',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              'border absolute left-0 bottom-0 py-2 px-5 mb-5 ml-5 rounded-md bg-[rgb(9_103_255_/_19%)]',
            children: [
              El({
                element: 'label',
                innerText: 'Deta :  ',
              }),
              El({
                element: 'span',
                id: 'detaModal',
                innerText: '۱۴۰۳/۱/۳',
              }),
            ],
          }),
          El({
            element: 'div',
            className:
              ' btnClosedModal border cursor-pointer duration-300 hover:shadow-[0px_0_10px_#a10022] absolute right-0 mb-5 mr-5 bottom-0 py-2 px-5 rounded-md bg-[rgb(9_103_255_/_19%)]',
            children: [
              El({
                element: 'button',
                innerText: 'Closed ',
              }),
            ],
          }),
        ],
      }),
    ],
  });
};


