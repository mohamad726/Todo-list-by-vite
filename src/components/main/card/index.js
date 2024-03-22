import { El } from '@/components/shared/El';
import { Footer } from '@/layout/footer';
import { Header } from '@/layout/header';


 export const Card=(card) => {
    return card= El({
      element: 'div',
      className: 'bg-green-400',
      children: 'card',
    });
  };
  

// const Card=(card) => {
//     return card= El({
//       element: 'div',
//       className: 'bg-green-400',
//       children: 'card',
//     });
//   };
  
// export const MainLayoutCard = (children) => {
//     return El({
//       element: 'div',
//       children: [
//        Header(),
//         Card(children),
//         Footer()
//           ],
//     });
//   };
  

