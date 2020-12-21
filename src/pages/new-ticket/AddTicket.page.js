import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from '../../utils/validation'

const initialFormData = {
    subject: '',
    issueDate: '',
    details: ''
}

const initialFormError = {
    subject: false,
    issueDate: false,
    details: false,
}

export const AddTicket = () => {

    const [formData, setFormData] = useState(initialFormData)
    const [formDataError, setFormDataError] = useState(initialFormError)

    // useEffect(() => {}, [formData])

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setFormDataError(initialFormError)

        const isSubjectValid = await shortText(formData.subject)

        setFormDataError({
            ...initialFormError,
            subject: !isSubjectValid,
        });

        console.log('form submit request received', formData);
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AddTicketForm 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formDataError={formDataError}
                    formData={formData}
                    />
                </Col>
            </Row>
        </Container>
    )
}