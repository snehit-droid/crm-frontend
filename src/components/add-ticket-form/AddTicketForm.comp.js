import React from 'react'
import { Jumbotron, Row, Col, Form, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './add-ticket-form.style.css';

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, formDataError, formData }) => {
    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name='subject'
                            value={formData.subject}
                            onChange = {handleOnChange}
                            placeholder='subject'
                            required
                        />
                        <Form.Text className="text-danger">
                            {formDataError.subject && "subject is required"}
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            type='date'
                            name='issueDate'
                            value={formData.issueDate}
                            onChange = {handleOnChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>details</Form.Label>
                    <Form.Control
                        as='textarea'
                        name='details'
                        rows='5'
                        value={formData.details}
                        onChange = {handleOnChange}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant='info' block>Login</Button>
            </Form>
        </Jumbotron>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired, 
    handleOnChange: PropTypes.func.isRequired, 
    formData: PropTypes.object.isRequired,
    formDataError: PropTypes.object.isRequired
};