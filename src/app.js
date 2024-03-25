import { List } from './components/home/List';
import { MainLayout } from './layout';

export const App = () => {
  //  let data = await getUser();
  //console.log(data);
  return MainLayout(List);
};
