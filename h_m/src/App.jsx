
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/'element={<Homepage/>} />
      <Route path='/header'element={<Header/>} />
      </Routes>
 
     
    </div>
  );
}

export default App;
