import Dashboard from "./pages/Dashboard";
import Ads from "./pages/Ads";
import English from "./pages/English";
import Literature from "./pages/Literature";
import Spanish from "./pages/Spanish";
import WebProg from "./pages/WebProg";

//Icons
import { FaHome, FaLaptopCode, FaProjectDiagram, FaBook, FaLanguage, FaBookOpen } from "react-icons/fa";

const routes = [
    {
      title: 'Painel',
      component: Dashboard,
      path: '/',
      exact: false,
      is_menu: true,
      icon: FaHome
    },
    {
      title: 'ADS',
      component: Ads,
      path: '/ads',
      exact: false,
      is_menu: true,
      icon: FaProjectDiagram
    },
    {
      title: 'Prog. Web',
      component: WebProg,
      path: '/web-prog',
      exact: false,
      is_menu: true,
      icon: FaLaptopCode
    },
    {
      title: 'Literatura',
      component: Literature,
      path: '/literature',
      exact: false,
      is_menu: true,
      icon: FaBook
    },
    {
      title: 'Inglês',
      component: English,
      path: '/english',
      exact: false,
      is_menu: true,
      icon: FaBookOpen
    },
    {
      title: 'Espanhol',
      component: Spanish,
      path: '/spanish',
      exact: false,
      is_menu: true,
      icon: FaLanguage
    },
] 
  
export default routes;