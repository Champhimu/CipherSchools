import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/User/Login'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' index element={<Home />}/>
      <Route path='/std/login' element={<Login />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
