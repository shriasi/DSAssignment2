import React, {Component, Fragment} from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "../asset/css/Style.css";
import loginImg from '../asset/image/login.jpg'

class Login extends Component{

    render() {
        return (
            <div>
                <h1>Log in</h1>
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                                <div className= "deliveryBox p-5">
                                    <img className="DeliveryImg" src={loginImg} alt=""/>
                                    <Form className="mt-3">
                                        <Form.Group>
                                            <Form.Label className="cusTxt">Username </Form.Label>
                                            <Form.Control type="email" placeholder="abc@gmail.com" />
                                            <br/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="cusTxt">Password</Form.Label>
                                            <Form.Control type="password" placeholder="********" />
                                            <br/>
                                        </Form.Group>
                                        <Button className="btn-block" variant="primary" type="submit" block>
                                            Login
                                        </Button>
                                        <div className="signupBox">
                                            <a className="" href="#"> Sign Up </a>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </Fragment>
            </div>


        );
    }
}
export default Login;