import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({inDashboard}) {
  return (
    
        <Navbar className='position-fixed top-0 w-100 bg-primary' style={{zIndex:1}}>
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-diagram-project  fa-sm me-3" style={{color: '#b25138'}}></i>
            {' '}
            Project fair
          </Navbar.Brand>
          </Link>
          {
            inDashboard &&
            <div className='btn btn-warning ms-auto'>
              Log out {' '}
              <i class="fa-solid fa-circle-arrow-right fa-lg ms-1 "></i>

            </div>
          }

        </Container>
      </Navbar>
    
  )
}

export default Header