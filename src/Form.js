import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"

function Story(props) {

    const [show, setShow] = useState(false);
    const handleClose = () =>  setShow(false);
    const handleShow = () =>  setShow(true);

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        
        <div>
            <button variant="primary" onClick={handleShow}>
        Share your tail
      </button>
            
            
            <Modal className="form" show={show}>
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title id="Joy">
                    Bundle of Joy
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div>
                    <input type="file" name="Image" />
                    <label htmlFor="image">Image</label> 
                    </div>
                    <div>
                    <input type="textarea" name="body" />
                    <label htmlFor="body">Body</label> 
                    </div>
                    
                    
                    <input type="submit" value="Pawblish" onClick={handleClose} />
                    
                     
                </form>
            </Modal.Body>
        </Modal>
        </div>
        



        
    )


}

export default Story;