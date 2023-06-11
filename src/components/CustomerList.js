import React from 'react'

function CustomerList({customers}) {
  return (
    <div className='layout-column align-items-center justify-content-start'>
        {customers.length == 0 && (
            <div data-testid='no-results'>No Results Found!</div>
        )}
        
        {customers.length > 0 && (
          <div className='card w-40 pt-30 pb-8 mt-20'>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Location</th>
                        <th>Gender</th>
                        <th>Income</th>
                    </tr>
                    </thead>
                    <tbody data-testid='searched-customers'>
                        {customers && customers.map((customer, i) => (
                          <tr key={`row-${i}`}> 
                              <td> {customer.name} </td> 
                              <td> {customer.age} </td> 
                              <td> {customer.location} </td>
                              <td> {customer.gender} </td> 
                              <td> {customer.income} </td>  
                          </tr>
                        )
                        )}
                    </tbody>
                </table>
          </div>
        )}
    </div>
  )
}

export default CustomerList;