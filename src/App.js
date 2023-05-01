
import './App.css';

import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import { Navbar } from './component/Navbar';
import OrderSummary from './component/order-summary';
import { Nomatch } from './component/NoMatch';
import { Profile } from './component/Profile';
import { AuthProvider } from './component/Auth';
import { Login } from './component/login';
function App() {
  return (
    <div className='panel'>
      <AuthProvider>
      <div>
      <Navbar/>
      </div>
      <div className='layout'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='profile' element={<Profile/>}>
      <Route path='login' element={<Login/>}/>
      </Route>
      
      <Route path='*' element={<Nomatch/>}/>
     </Routes>
      </div>
      </AuthProvider>
    </div>
  );
}

export default App;
