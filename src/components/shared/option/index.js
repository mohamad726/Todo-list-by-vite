import { El } from '@/components/shared/El';

export const option = (value, innerHtml, selected) => {
  const isSelected = selected ? selected : '';
  return El({
    element: 'option',
    selected:isSelected,
    value: value,
    children: innerHtml,
  });
};
