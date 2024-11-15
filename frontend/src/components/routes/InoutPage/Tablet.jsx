

import React from 'react'

function Tablet({name : users}) {

    console.log(`users is : ${users}`);

  return (
    <table className='MainTable' border={1}>
                  <thead className="TableHeading">
                      <tr className="TableHead">
                          <th>S.No</th>
                          <th>Roll</th>
                          <th>Name</th>
                          <th>phone</th>
                          <th>place</th>
                          <th>outdate</th>
                          <th>outtime</th>
                          <th>indate</th>
                          <th>intime</th>
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
                          <td>{user.outdate}</td>
                          <td>{user.outtime}</td>
                          <td>{user.indate}</td>
                          <td>{user.intime}</td>
                          
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

export default Tablet
