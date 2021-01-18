import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import React from 'react';

function AddModal(props) {
    const [show, setShow] = useState(props.show)
    const handleClose = () => setShow(false);
    let isFlag = props.show
    const handleShow = () => {
        setShow(true)
        isFlag = true
    };
    useEffect(() => {
        console.log("show    ", show 
}, [show])
    return (
        <>
            <Button variant="primary" onClick={() => props.open()
            }>
                Add Modal        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
          </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddModal