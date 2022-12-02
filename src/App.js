import './App.css';
import Main from './pages/Main/Main';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import About from './pages/About/About';
import Objects from './pages/Objects/Objects';
import PageObject from './pages/PageObjects/PageObject';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/objects' element={<Objects/>}/>
      <Route path="/pageobject" element={<PageObject/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
