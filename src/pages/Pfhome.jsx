import React,{useState} from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import image from '../Assets/web design.png'
import Homeprojects from '../components/Homeprojects'
import { Link } from 'react-router-dom'

function Pfhome() {
  const [isLogged,setIsLogged]=useState(false)

  return (

    <>
    <div className='container-fluid rounded ' style={{width:'100%',height:'100vh'}}>
        <Row className=' align-items-center p-5 ' style={{height:'100vh'}}>
            <Col sm='12' md='6'>
               <h1>
                <i class="fa-solid fa-diagram-project fa-beat-fade fa-sm me-3" style={{color: '#b25138'}}></i>
                  Project Fair
                </h1>
                <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor voluptates modi, vero harum tempore quae totam, necessitatibus, tempora dolores unde odio consequuntur blanditiis numquam pariatur voluptate iure eveniet possimus!!</p>
                
                {
                  isLogged?
                  <Link to={'/dashboard'} className='btn btn-primary'>Manage your projects <i class="fa-solid fa-circle-arrow-right fa-lg ms-1 "></i></Link>:

                  <Link to={'/login'} className='btn btn-warning'>Start to Explore <i class="fa-solid fa-circle-arrow-right fa-lg ms-1 "></i></Link>
                }

            </Col>
            <Col sm={12} md={6}>
             <img src={image} height={'500px'} width={'600px'} className='image-fluid' alt="" />
            </Col>
        </Row>

    </div>
       <div className='my-5 bg-warning p-5'>
          <h1 className='text-center'>Projects...</h1>
           <marquee behavior="alternate" direction="right">
           <Homeprojects/>

           </marquee>
           <div className='d-flex justify-content-center'>
            <Link to={'/project'} className='btn mt-5 bg-body-tertiary'>see more</Link>
           </div>
        </div>
    </>
  )
}

export default Pfhome