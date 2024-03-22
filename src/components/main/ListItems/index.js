import { El } from '@/components/shared/El';
import { Edit_modal } from '@/components/shared/Modal/AddAndEdit';

export const ListItems = () => {
  return El({
    element: 'table',
    className: 'w-full border border-slate-300',
    children: [
      El({
        element: 'thead',
        children: [
          El({
            element: 'tr',
            children: [
              El({
                element: 'th',
                className: 'border border-slate-300 py-5 text-start pl-3',
                innerHTMl: 'Task Name',
              }),
              El({
                element: 'th',
                className: 'border border-slate-300',
                innerHTMl: 'Priority',
              }),
              El({
                element: 'th',
                className: 'border border-slate-300',
                innerHTMl: 'Status',
              }),
              El({
                element: 'th',
                className: 'border border-slate-300',
                innerHTMl: 'Deadline',
              }),
              El({
                element: 'th',
                className: 'border border-slate-300',
                innerText: 'Actions',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'tbody',
        id: 'tbody',
        children: [
          El({
            element: 'tr',
            children: [
              El({
                element: 'td',
                className: 'border border-slate-300 text-start pl-3 py-5',
                children: 'walk the dog',
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'bg-neutral-200 rounded-2xl px-3 py-2',
                    children: 'Low',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'bg-red-600 text-[#FFF] rounded-2xl px-3 py-2',
                    children: 'Todo',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'rounded-md font-medium Vazir',
                    children: '1403/01/02',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'div',
                    className: 'flex gap-3 justify-center',
                    children: [
                      El({
                        element: 'div',
                        className:
                          'bg-red-600 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Delete',
                            src: '../../../../src/assets/img/trash-bin-minimalistic-2-svgrepo-com.svg',
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        className:
                          'bg-blue-500 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Edit',
                            src: '../../../../src/assets/img/edit-svgrepo-com.svg',
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        className:
                          'bg-gray-500 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Edit',
                            src: '../../../../src/assets/img/eye-svgrepo-com.svg',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'tr',
            children: [
              El({
                element: 'td',
                className: 'border border-slate-300 text-start pl-3 py-5',
                children: 'walk the dog',
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'bg-amber-400 rounded-2xl px-3 py-2',
                    children: 'Medium',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'bg-amber-400 rounded-2xl px-3 py-2',
                    children: 'Doing',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'rounded-md font-medium Vazir',
                    children: '1403/01/02',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'div',
                    className: 'flex gap-3 justify-center',
                    children: [
                      El({
                        element: 'div',
                        className:
                          'bg-red-600 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Delete',
                            src: '../../../../src/assets/img/trash-bin-minimalistic-2-svgrepo-com.svg',
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        className:
                          'bg-blue-500 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Edit',
                            src: '../../../../src/assets/img/edit-svgrepo-com.svg',
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        className:
                          'bg-gray-500 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Edit',
                            src: '../../../../src/assets/img/eye-svgrepo-com.svg',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'tr',
            children: [
              El({
                element: 'td',
                className: 'border border-slate-300 text-start pl-3 py-5',
                children: 'walk the dog',
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'bg-red-600 text-[#FFF] rounded-2xl px-3 py-2',
                    children: 'High',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'bg-green-700 text-[#fff] rounded-2xl px-3 py-2',
                    children: 'Doing',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'span',
                    className: 'rounded-md font-medium Vazir',
                    children: '1403/01/02',
                  }),
                ],
              }),
              El({
                element: 'td',
                className: 'border border-slate-300 text-center',
                children: [
                  El({
                    element: 'div',
                    className: 'flex gap-3 justify-center',
                    children: [
                      El({
                        element: 'div',
                        className:
                          'bg-red-600 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Delete',
                            src: '../../../../src/assets/img/trash-bin-minimalistic-2-svgrepo-com.svg',
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        className:
                          'bg-blue-500 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Edit',
                            src: '../../../../src/assets/img/edit-svgrepo-com.svg',
                          }),
                        ],
                      }),
                      El({
                        element: 'div',
                        className:
                          'bg-gray-500 py-1 px-2 rounded-md cursor-pointer',
                        children: [
                          El({
                            element: 'img',
                            className: 'w-6',
                            alt: 'icon_Edit',
                            src: '../../../../src/assets/img/eye-svgrepo-com.svg',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'tfoot',
      }),
    ],
  });
};
