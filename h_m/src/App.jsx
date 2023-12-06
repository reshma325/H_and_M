
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Header from './component/Header';
import Footer_ from './component/Footer_';
import SignIn from './component/SignIn';
import Member from './component/Member';
import Mens from './component/Mens';
import SingleProduct from './component/SingleProduct';


function App() {
  return (
    <div className="App">
  
     
      <Header/>
      <Routes>
        
     
      <Route path='/'element={<Homepage/>} />
      <Route path='/signin'element={<SignIn/>} />
      <Route path='/member'element={<Member/>} />
      <Route path='/singleproduct'element={<SingleProduct/>}/>
      
      <Route path='/mens'element={<Mens/>} />
      
      </Routes>
      <Footer_/>
   
 
     
    </div>
  );
}

export default App;
