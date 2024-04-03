import { Edit_Item, Show_Item } from '@/components/home/List';
import { El } from '@/components/shared/El';

import { delete_Item, getData } from '@/library/axios/getUser';

const data = await getData();

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
                innerText: 'Task Name',
              }),
              El({
                element: 'th',
                className: 'border border-slate-300',
                innerText: 'Priority',
              }),
              El({
                element: 'th',
                className: 'border border-slate-300',
                innerText: 'Status',
              }),
              El({
                element: 'th',
                className: 'border border-slate-300',
                innerText: 'Deadline',
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
        children: [...items()],
      }),
      El({
        element: 'tfoot',
      }),
    ],
  });
};

function items() {
  return data.map((items) => {
    return El({
      element: 'tr',
      children: [
        El({
          element: 'td',
          className: 'border border-slate-300 text-start pl-3 py-5',
          innerText: items.taskName,
        }),
        El({
          element: 'td',
          className: 'border border-slate-300 text-center',
          children: [
            El({
              element: 'span',
              className: `rounded-2xl px-3 py-2 ${
                items.priority == 'Low'
                  ? 'bg-neutral-200'
                  : items.priority == 'High'
                  ? 'bg-red-600'
                  : items.priority == 'Medium'
                  ? 'bg-amber-400'
                  : ''
              }`,
              innerText: items.priority,
            }),
          ],
        }),
        El({
          element: 'td',
          className: 'border border-slate-300 text-center',
          children: [
            El({
              element: 'span',
              className: `text-[#FFF] rounded-2xl px-3 py-2 ${
                items.statusTask == 'Todo'
                  ? 'bg-red-600 text-[#FFF] '
                  : items.statusTask == 'Doing'
                  ? 'bg-amber-400 text-[#000]'
                  : items.statusTask == 'Done'
                  ? 'bg-green-700 text-[#FFF]'
                  : ''
              }`,
              innerText: items.statusTask,
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
              children: items.date,
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
                  className: 'bg-red-600 py-1 px-2 rounded-md cursor-pointer',
                  children: [
                    El({
                      element: 'img',
                      className: 'w-6',
                      alt: 'icon_Delete',
                      src: '../../../../src/assets/img/trash-bin-minimalistic-2-svgrepo-com.svg',
                      id: items.id,
                      eventListener: [
                        {
                          event: 'click',
                          callback: delete_Item,
                        },
                      ],
                    }),
                  ],
                }),
                El({
                  element: 'div',
                  className: 'bg-blue-500 py-1 px-2 rounded-md cursor-pointer',
                  children: [
                    El({
                      element: 'img',
                      className: 'w-6',
                      alt: 'icon_Edit',
                      src: '../../../../src/assets/img/edit-svgrepo-com.svg',
                      id: items.id,
                      eventListener: [
                        {
                          event: 'click',
                          callback: Edit_Item,
                        },
                      ],
                    }),
                  ],
                }),
                El({
                  element: 'div',
                  className: 'bg-gray-500 py-1 px-2 rounded-md cursor-pointer',
                  children: [
                    El({
                      element: 'img',
                      className: 'w-6',
                      alt: 'icon_Edit',
                      src: '../../../../src/assets/img/eye-svgrepo-com.svg',
                      id: items.id,
                      eventListener: [
                        {
                          event: 'click',
                          callback: Show_Item,
                        },
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  });
}


