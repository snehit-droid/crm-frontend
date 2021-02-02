import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Jumbotron, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
// import PropTypes from 'prop-types'
import { openNewTicket } from './addTicketAction';
import { shortText } from '../../utils/validation';
import { resetSuccessMsg } from './addTicketSlicer';
import './add-ticket-form.style.css';

const initialFormData = {
    subject: '',
    issueDate: '',
    message: '',
};

const initialFormError = {
    subject: false,
    issueDate: false,
    message: false,
}

export const AddTicketForm = () => {
    const dispatch = useDispatch();
    const {user: {name}} = useSelector((state) => state.user);
    const { isLoading, error, successMsg } = useSelector((state) => state.openTicket);
    const [formData, setFormData] = useState(initialFormData);
    const [formDataError, setFormDataError] = useState(initialFormError)

    useEffect(() => {
        return () => {
            successMsg && dispatch(resetSuccessMsg())
        };
    }, [dispatch, formData, formDataError])

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFormDataError(initialFormError)

        const isSubjectValid = await shortText(formData.subject)

        setFormDataError({
            ...initialFormError,
            subject: !isSubjectValid,
        });

        dispatch(openNewTicket({ ...formData, sender: name }));
    };

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr />
            <div>
                {error && <Alert variant="danger">{error}</Alert>}
                {successMsg && <Alert variant="success">{successMsg}</Alert>}
                {isLoading && <Spinner variant="primary" animation="border" />}
            </div>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name='subject'
                            value={formData.subject}
                            onChange={handleOnChange}
                            placeholder='subject'
                            required
                        />
                        <Form.Text className="text-danger">
                            {formDataError.subject && "Subject is required!"}
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
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>details</Form.Label>
                    <Form.Control
                        as='textarea'
                        name='message'
                        rows='5'
                        value={formData.message}
                        onChange={handleOnChange}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant='info' block>Open Ticket</Button>
            </Form>
        </Jumbotron>
    );
};

// AddTicketForm.propTypes = {
//     handleOnSubmit: PropTypes.func.isRequired, 
//     handleOnChange: PropTypes.func.isRequired, 
//     formData: PropTypes.object.isRequired,
//     formDataError: PropTypes.object.isRequired
// };