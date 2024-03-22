import { El } from '@/components/shared/El';
import { Footer } from '@/layout/footer';
import { Header } from '@/layout/header';


 export const products=(products) => {
  return products = El({
    element: 'div',
    className: 'bg-red-400',
    children: 'products',
  });
};


// const products=(products) => {
//   return products = El({
//     element: 'div',
//     className: 'bg-red-400',
//     children: 'products',
//   });
// };


// export const MainLayoutproducts = (children) => {
//   return El({
//     element: 'div',
//     children: [
//       Header(),
//       products(children),
//       Footer()
//         ],
//   });
// };



