import './App.css';
import Main from './pages/Main/Main';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import About from './pages/About/About';
import Objects from './pages/Objects/Objects';
import PageObject from './pages/PageObjects/PageObject';
import Blog from './pages/Blog/Blog';
import PageBlogs from './pages/PageBlogs/PageBlogs';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/objects' element={<Objects/>}/>
      <Route path="/pageobject" element={<PageObject/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/pageblog' element={<PageBlogs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
