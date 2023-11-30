import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import MainPage from './components/StoreDashboard/MainPage';
import Dashboard from './components/StoreDashboard/Dashboard/Dashboard';
import ProdCard from './components/StoreDashboard/ProductCard/ProdCard';
function App() {
  return (
    <div>
    <ToastContainer theme='colored' position='top-center' />
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/MainPage' element={<MainPage/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/ProdCard' element={<ProdCard/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
