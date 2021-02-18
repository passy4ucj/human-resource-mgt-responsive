import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import Message from '../components/Message'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import LoginImg from '../img/call-center.jpg';
import Logo from '../img/outcess-logo.png';
import '../styles/LoginScreen.css';
import { css } from '@emotion/css'

//Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ForgotPasswordScreen = ({ history }) => {
    const [email, setEmail] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        //dispatch 
    }

    return (
        <div className="loginpage-wrapper">
            <Container className='loginpage-container'>
                <Row>
                <Col className='d-none d-lg-block col-xs-none col-lg-6'>
                    <div className='login-img'>
                    <img src={LoginImg}/>
                    </div>
                </Col>
                <Col className='loginform-col col-xs-12 col-lg-6'>
                    <div className='logo'>
                    <img src={Logo}/>
                    </div>
                  
                    <Form onSubmit={submitHandler}>
                    <Form.Group className='form-group email' controlId="formBasicEmail">
                        <i class="fas fa-user pr-3"></i>
                        <Form.Label className='login-label'>Email address</Form.Label>
                        <Form.Control 
                            autoFocus 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email" />
                    </Form.Group>

                    <Button type='submit' variant='primary' className='btn btn-block'>
                        Forgot Password
                    </Button>
                    </Form>
                    <div className="loading">
                  
                    
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ForgotPasswordScreen
