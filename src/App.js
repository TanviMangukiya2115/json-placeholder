import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Coment from './Coment';
import Albums from './Albums';
import Todo from './Todo';
import Post from './Post';
import Photos from './Photos';
import Users from './Users';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Post" element={<Post/>}></Route>
            <Route path="/Coment" element={<Coment />} />
            <Route path="/Albums" element={<Albums/>} />
            <Route path="/Todo" element={<Todo/>} />
            <Route path="/Photos" element={<Photos/>} />
            <Route path="/Users" element={<Users/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
