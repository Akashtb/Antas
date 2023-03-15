import "./header.css"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
export default function Header() {

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    const name = document.getElementById('formBasicName').value;
    const email = document.getElementById('formBasicEmail').value;
    const phone = document.getElementById('formBasicPhone').value;
    const message = document.getElementById('exampleForm.ControlTextarea1').value;
  
    axios.post('/contact', {
      name,
      email,
      phone,
      message
    })
    .then(res => {
      console.log(res.data);
      setShowModal(false);
    })
    .catch(err => {
      console.error(err);
      setShowModal(false);
    });
  };
  

  return (
    <div className='top'>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>

            <Form.Group controlId="formBasicName">

              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="eg:Jude wilson" />

            </Form.Group>

            <Form.Group controlId="formBasicEmail">

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="eg:abc@gmail.com" />

            </Form.Group>

            <Form.Group controlId="formBasicPhone">

              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="eg:1234567890" />

            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="topLeft">
        <img className="image" src="https://static.wixstatic.com/media/845bf6_7cd0279b45f840dbbb0a50c78e523394~mv2.jpg/v1/fill/w_217,h_70,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Antas.jpg" alt="" />
      </div>

      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">What We Do</li>
          <li className="topListItem">Why Choose Us</li>
          <li className="topListItem">Carrers</li>
          <li className="topListItem">Our Location</li>
          <li className="topListItem" onClick={() => setShowModal(true)}>Contact</li>
        </ul>
      </div>
    </div>


  )
}
