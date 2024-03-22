import { El } from '../El';

export const Btn = (innreHtml, type, className) => {
  return El({
    element: 'button',
    className: className,
    children: innreHtml,
    type: type,
  });
};
