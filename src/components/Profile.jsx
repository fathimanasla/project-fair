import React from 'react'

function Profile() {
  return (
    <div className='card shadow me-2'>
        <div className='ms-3'>
            <h3>My profile</h3>
        </div>
        <div className='mt-3 row justify-content-center me-3 ms-3'>
            <label htmlFor="profile" className='text-center'>
                <input type="file" name="" id="profile" style={{display:'none'}} />
                <img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" alt="profile img" width={'150px'} height={'150px'} />
            </label>
            <div className='mt-3'>
                <input type="text"  className='form-control' placeholder='enter your usernsme' />
            </div>
            <div className='mt-3'>
                <input type="text" className='form-control' placeholder='enter your linkedin id' />
            </div>
            <div className='mt-3 mb-3'>
                <input type="text" className='form-control' placeholder='enter your github id' />
            </div>
        </div>
    </div>
  )
}

export default Profile