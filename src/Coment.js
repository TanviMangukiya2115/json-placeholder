import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';

function Coment() {
     const[data,setdata]=useState([]);

     useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/comments')
       .then(function (response) {
         console.log(response.data)
         setdata(response.data)
       })
       .catch(function (error) {
         console.log(error)
       })  
     },[])
  return (
    <div className='App'>
     <Home/>
          <table border={1}>
               <tr className='Head'>
                    <td>POSTID</td>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>BODY</td>
               </tr>
               {
                    data.map((ele,ind)=>{
                         return(
                         <>
                         <tr key={ind}>
                                   <td>{ele.postId}</td>
                                   <td>{ele.id}</td>
                                   <td>{ele.name}</td>
                                   <td>{ele.email}</td>
                                   <td>{ele.body}</td>
                         </tr>
                         </>
                         )
                    })
               }
          </table>
    </div>
  );
}

export default Coment;