import { El } from '../El';

export function btn(innreHtml, className) {
  return El({
    element: 'button',
    className: `py-2 px-6 border rounded-sm duration-300 hover:shadow-[#a78bfa] shadow-md ${className} `,
    children: `${innreHtml}`,
  });
}
