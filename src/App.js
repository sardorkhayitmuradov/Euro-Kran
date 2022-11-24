import './App.css';
import Main from './pages/Main/Main';
import {Route,Routes,BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
