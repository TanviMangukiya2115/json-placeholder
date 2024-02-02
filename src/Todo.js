import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './Home';

function Todo() {
     const[data,setdata]=useState([]);

     useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/todos')
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
                    <td>USERID</td>
                    <td>ID</td>
                    <td>TITLE</td>
                    <td>COMPLATED</td>
               </tr>
               {
        data.map((ele,ind)=>{
          return(
           <>
              <tr key={ind}>
                    <td>{ele.userId}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title}</td>
                    <td>{ele.completed ? 'True' : 'False'}</td>
              </tr>
           </>
          )
        })
      }
          </table>
    </div>
  );
}

export default Todo;