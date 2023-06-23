
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Contact from './component/Contact';
import Information from './component/Information';
import Guide from './component/Guide';

function App() {
  return (
   <BrowserRouter>
   <Sidebar></Sidebar>
    <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/information' element={<Information></Information>}></Route>
      <Route path='/guide' element={<Guide></Guide>}></Route>
    </Routes>

   </BrowserRouter>
  );
}

export default App;
