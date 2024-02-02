import './App.css';
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
     <button><Link to="/Post" className='link'>Post</Link></button>
     <button><Link to="/Albums" className='link'>Albums</Link></button>
     <button><Link to="/Todo" className='link'>Todos</Link></button> 
     <button><Link to="/Coment" className='link'>Comment</Link></button>
     <button><Link to="/Users" className='link'>Users</Link></button>
     <button><Link to="/Photos" className='link'>Photos</Link></button>
    </>
  );
}

export default Home;