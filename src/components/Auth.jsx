import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

function Auth({register}) {
    const registerForm=register?true:false
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className='container w-75'>
          <Link to={'/'} style={{textDecoration:'none'}} className='d-flex align-items-center  '>
          <i class="fa-solid fa-circle-arrow-left fa-lg me-2"></i>
            Back to home
          </Link>
          <div className='bg-primary p-5 rounded'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <img className='img-fluid' src="https://www.pinclipart.com/picdir/big/212-2129001_mobile-app-development-services-business-login-illustration-png.png" alt="" />
                </div>
                <div className='col-lg-6'>
                    <div className='d-flex align-items-center flex-column'>
                        <div className='d-flex mt-2 text-light'>
                           <i class="fa-solid fa-diagram-project  fa-2x mt-1 me-2" style={{color: '#b25138'}}></i>
                           <span className='h1 fw-bolder'>Project fair</span>
                        </div>
                        <h4 style={{fontFamily:'serif',color:'blue'}}>
                            {
                                registerForm?'sign up for project fair':'sign in for project fair'
                            }
                        </h4>
                        <form>
                          {
                           registerForm && 
                           <Form.Group className="mb-3" controlId="formGroupEmail" >
                           <Form.Label>User name</Form.Label>
                           <Form.Control type="text" placeholder="Enter Your Name"  />
                         </Form.Group>
                          }
                         
                         <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>e-Mail</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your email" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Enter your password" />
                          </Form.Group>
                          </form>

                          {
                            registerForm?
                            <div>
                              <button type='submit' className='btn bg-warning ms-5 me-3'>sign up</button>
                              <Link to={'/login'}>already a user? sign in...</Link>
                            </div>:
                            <div>
                              <button type='submit' className='btn bg-warning me-3 ms-2'>sign in</button>
                              <Link to={'/register'}>new user? sign up</Link>
                            </div>
                          }

                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Auth