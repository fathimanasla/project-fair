import React from 'react'
import Header from '../components/Header'
import { Row,Col } from 'react-bootstrap'
import Myprojects from '../components/Myprojects'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <div >
      <Header inDashboard={true}/>

      <Row className='m-5 pt-5'>
        <Col sm={12} md={8}>
         <h1>Welcome <span className='text-warning'>User</span></h1>
         <Myprojects/>
        </Col>
        <Col sm={12} md={4}>
          <Profile/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard