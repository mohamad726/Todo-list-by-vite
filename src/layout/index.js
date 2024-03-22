import { El } from '@/components/shared/El';
import { Header } from './header';
import { Footer } from './footer';

export const MainLayout = (children) => {
  return El({
    element: 'div',
    children: [
      Header(),
      children(),
      Footer()
        ],
  });
};
