import React from 'react'
import PropTypes from 'prop-types';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const LoginForm = ({ handleOnChange, handleOnSubmit, formSwitcher, email, password }) => {
    return(
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                            type='email'
                            name='email'
                            value={email}
                            onChange = {handleOnChange}
                            placeholder='Enter Email'
                            required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            type='password'
                            name='password'
                            value={password}
                            onChange = {handleOnChange}
                            placeholder='Enter Password'
                            required
                            />
                        </Form.Group>

                        <Button type="submit">Login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
               <Col>
                <a href='#!' onClick={() => formSwitcher('reset')}>Forgot Password</a>
               </Col> 
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}