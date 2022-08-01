import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add/Add';
import Home from './components/Home/Home';
import Header from './components/Sheard/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/addUser' element={<Add></Add>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>



    </div>
  );
}

export default App;
