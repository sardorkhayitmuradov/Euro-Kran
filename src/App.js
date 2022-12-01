import './App.css';
import Main from './pages/Main/Main';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import About from './pages/About/About';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
