import React,{useState} from 'react'
import { Card ,Modal,Button,Row,Col} from 'react-bootstrap'
import projectimg from '../Assets/projectimg.png'

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
    <Card onClick={handleShow} style={{ width: '18rem',textAlign:'center' }}>
      <Card.Img variant="top" src={projectimg} />
      <Card.Body>
        <Card.Title>media player</Card.Title>
      
      </Card.Body>
    </Card>
    

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>project details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
             <img src={projectimg} alt="img" className='img-fluid' />
            </Col>
            <Col sm={12} md={6}>
              <h5>project title</h5>
             <p style={{fontFamily: 'Sevillana' ,textAlign:'justify',fontSize:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatem dicta neque cupiditate fugit illum, et totam quia officia iusto, sequi atque delectus illo ipsam omnis adipisci eveniet? Repellat, molestias.</p>
            <p><span className='fw-bold'>language used : </span> html,css,js</p>
            <div>
              <a target='_blank' className='btn me-2' href="https://github.com/fathimanasla/Media_player.git">
              <i class="fa-brands fa-github fa-2x"></i>
              </a>
              <a target='_blank' className='mt-2' href="">
              <i class="fa-solid fa-link fa-2x"></i>
              </a>
            </div>
            </Col>
          </Row>
          
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    
    </>
    )
}

export default ProjectCard