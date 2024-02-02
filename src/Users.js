import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';

function Users() {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        console.log(response.data)
        setdata(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <div className='App'>
      <Home/>
      <Container fluid>
        <table border={1}>
          <tr className='Head'>
            <td>ID</td>
            <td>NAME</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>ADDRESS</td>
            <td>PHONE</td>
            <td>WEBSITE</td>
            <td>COMPANY</td>
          </tr>
          {
            data.map((ele, ind) => {
              return (
                <>
                  <tr key={ind}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                    <td>
                      <table>
                        <tr className='head1'>
                          <td>STREET</td>
                          <td>SUITE</td>
                          <td>CITY</td>
                          <td>ZIPCODE</td>
                          <td>GEO</td>
                        </tr>

                        <tr key={ind}>
                          <td>{ele.address.street}</td>
                          <td>{ele.address.suite}</td>
                          <td>{ele.address.city}</td>
                          <td>{ele.address.zipcode}</td>
                          <td>
                            <table>
                              <tr className='head2'>
                                <td>LAT</td>
                                <td>LNG</td>
                              </tr>

                              <tr key={ind}>
                                <td>{ele.address.geo.lat}</td>
                                <td>{ele.address.geo.lng}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td>{ele.phone}</td>
                    <td>{ele.website}</td>
                    <td>
                      <table>
                        <tr className='head1'>
                          <td>NAME</td>
                          <td>CATCHPHRASE</td>
                          <td>BS</td>
                        </tr>
                        <tr>
                          <td>{ele.company.name}</td>
                          <td>{ele.company.catchPhrase}</td>
                          <td>{ele.company.bs}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </>
              )
            })
          }
        </table>
      </Container>
    </div>
  );
}

export default Users;