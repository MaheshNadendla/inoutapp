

import React, { useEffect, useState } from 'react'

import toast from 'react-hot-toast';
import axios from 'axios';

function TabletVis({name : fellows}) {

    const [users,setUsers] = useState([]);


    useEffect(() => {
        setUsers(fellows);
    }, [fellows]);


    console.log(`users is : ${users}`);

    function Delete(id) {

        


        axios.delete(`http://localhost:8080/visitershome/del/${id}`)
          .then((response) => {
            setUsers(users.filter(user => user._id !== id));
            toast.success("User deleted successfully");
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
            toast.error("Failed to delete the user");
          });

       

    }


  return (
    <table className='MainTable' border={1}>
                  <thead className="TableHeading">
                      <tr className="TableHead">
                          <th>S.No</th>
                          <th>Roll</th>
                          <th>Name</th>
                          <th>phone</th>
                          <th>place</th>
                          <th>indate</th>
                          <th>intime</th>
                          <th>delete Visier</th>
                          
                      </tr>
                  </thead>

                  <tbody>
                    {users.length > 0 ? (
                      users.map((user,index) => (
                        <tr key={index+1}>
                          <td>{index + 1}</td>
                          <td>{user.roll}</td>
                          <td>{user.name}</td>
                          <td>{user.phone}</td>
                          <td>{user.place}</td>
                          <td>{user.indate}</td>
                          <td>{user.intime}</td>


                          <td><button onClick={() => Delete(user._id)}>delete</button></td>


                          
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9">No data available Or data is Empty</td>
                      </tr>
                    )}
                  </tbody>
    </table>
  )
}

export default TabletVis;
