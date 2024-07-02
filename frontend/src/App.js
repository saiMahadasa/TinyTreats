import { BrowserRouter , Routes , Route } from 'react-router-dom';
import {LoginPage , SignupPage} from './Routes.js'
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element = {<LoginPage/>} />
      <Route path='/sign-up' element = {<SignupPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
