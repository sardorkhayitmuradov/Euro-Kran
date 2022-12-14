import './App.css';
import Main from './pages/Main/Main';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import About from './pages/About/About';
import Objects from './pages/Objects/Objects';
import PageObject from './pages/PageObjects/PageObject';
import Blog from './pages/Blog/Blog';
import PageBlogs from './pages/PageBlogs/PageBlogs';
import Contacts from './pages/Contacts/Contacts';
import Catalog from './pages/Catalog/Catalog';
import AllProducts from './pages/allProducts/AllProducts';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/objects' element={<Objects/>}/>
      <Route path="/pageobject/:id" element={<PageObject/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/pageblog/:id' element={<PageBlogs/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/allproducts/:id' element={<AllProducts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
