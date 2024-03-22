import { El } from '../El';
export const Btn = (innreHtml, type, className) => {
  return El({
    element: 'button',
    className: className,
    innerText: innreHtml,
    type: type,
  });
};
