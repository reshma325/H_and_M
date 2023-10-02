
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Header from './component/Header';
import Footer_ from './component/Footer_';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
     
      <Route path='/'element={<Homepage/>} />
      
      </Routes>
      <Footer_/>
 
     
    </div>
  );
}

export default App;
