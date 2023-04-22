import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './Component/Home';
import LogReg from './Component/User/LogReg';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/std/login' element={<LogReg />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
