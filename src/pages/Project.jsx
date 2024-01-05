import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Row,Col } from 'react-bootstrap'

function Project() {
  return (
    <div>
      <Header/>
      <div style={{marginTop:'100px'}}>
      <div className='text-center mx-2 mb-3 border rounded '>

        <h3 className='mt-3'>All projects</h3>
        {/* search field */}
        <div className=' d-flex justify-content-center w-100 mt-5 mb-4'>
          <div className='d-flex align-items-center border rounded w-50' >
            <input type="text" placeholder='enter keyword to search' className='form-control rounded' />
          </div>
          <div className=' border rounded'>
          <i class="fa-solid fa-magnifying-glass fa-lg mt-3"></i>
          </div>
        </div>
      </div>

      <div>
        <Row className='m-5'>
          <Col sm={12} md={6} lg={4}>
           <ProjectCard/>
          </Col>
        </Row>
      </div>

      </div>
    </div>
  )
}

export default Project