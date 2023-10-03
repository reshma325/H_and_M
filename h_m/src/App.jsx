
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Header from './component/Header';
import Footer_ from './component/Footer_';
import SignIn from './component/SignIn';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
     
      <Route path='/'element={<Homepage/>} />
      <Route path='/signin'element={<SignIn/>} />
      
      </Routes>
      <Footer_/>
 
     
    </div>
  );
}

export default App;
