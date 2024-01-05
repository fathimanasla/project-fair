import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap';

function Addproject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        add project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-white'>upload project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className=''>
            <div className='row'>
                <div className='col-lg-6'>
                    <label htmlFor="project">
                        <input type="file" name="" id="project" style={{display:'none'}} />
                        <img src="https://icones.pro/wp-content/uploads/2021/06/icone-d-image-rouge.png" className='img-fluid ' alt="" />
                    </label>
                </div>
                <div className='col-lg-6'>
                    <input type="text" placeholder='project title' className='form-control mb-2 rounded' />
                    <input type="text" placeholder='project overview' className='form-control mb-2 rounded' />
                    <input type="text" placeholder='language used' className='form-control mb-2 rounded' />
                    <input type="text" placeholder='github url' className='form-control mb-2 rounded' />
                    <input type="text" placeholder='demo url' className='form-control mb-2 rounded' />
                </div>
            </div>
          </form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproject