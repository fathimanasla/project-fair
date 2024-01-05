import React from 'react'
import Addproject from './Addproject'

function Myprojects() {
  return (
    <div className='card shadow p-3 m-2 '>
      <div className='d-flex justify-content-between'>
        <h2>My projects</h2>
        <Addproject/>
      </div>

      <div className='mt-3'>
        {/* user add project */}
        <div className='border shadow rounded m-2 '>
          <div className='d-flex justify-content-between p-3'>
            <h4>project title</h4>
            <div >
              <button className='btn'><i class="fa-brands fa-square-github fa-2x"></i></button>
              <button className='btn'><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
              <button className='btn'><i class="fa-solid fa-trash-can fa-xl"></i></button>
            </div>
          </div>
        </div>
        <h4 className='text-warning m-2 mt-4'>no projects upload!!</h4>
      </div>
    </div>
  )
}

export default Myprojects