import { Button, Form, Input } from 'antd';
import React from 'react'
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal'
import { Label } from 'semantic-ui-react';

function AddModal(props) {
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        id: '',
    });
    const [show, setShow] = useState(false)
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const handleChange = (e) => {
        e.preventDefault();
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async () => {
        const res = await props.AddPeople(info)
        if (res && res.addPerson) {
            console.log(111111);
            props.reLoad(true)
            setShow(false)
        }
        console.log('res in modal   ', res);
        // setShow(false)
    }
    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Add people
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Form adding
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form  {...layout} >
                        <Form.Item name={'firstName'} label="First name" >
                            <Input name={'firstName'} onChange={(e) => handleChange(e)} />
                        </Form.Item>
                        <Form.Item name={'lastName'} label="Last name"  >
                            <Input name={'lastName'} onChange={(e) => handleChange(e)} />
                        </Form.Item>
                        <Form.Item name={'email'} label="Email"  >
                            <Input name={'email'} onChange={(e) => handleChange(e)} />
                        </Form.Item>
                    </Form>
                </Modal.Body>

                <Button onClick={() => handleSubmit()}>Submit</Button>

            </Modal >
        </>
    );
}

export default AddModal;