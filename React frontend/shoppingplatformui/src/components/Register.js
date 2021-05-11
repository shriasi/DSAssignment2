import React, {Component, Fragment} from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "../asset/css/Style2.css";
import "../asset/css/Style.css";
import RegisterImg from '../asset/image/registerLogo.jpg'

class Register extends Component{

    render() {
        return (
            <div>
                <h1 className="heading">Register Now</h1>
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                                <div className= "RegisterBox p-6">
                                    <img className="DeliveryImg" src={RegisterImg} alt=""/>
                                    <Form className="mt-3">
                                        <div className="LabelBox">
                                            <div className="SideBySide">
                                            <Form.Group className="TextBox">
                                                <Form.Label>First Name </Form.Label>
                                                <Form.Control type="text" placeholder="Mark" />
                                                <br/>
                                            </Form.Group>

                                            <Form.Group className="TextBox">
                                                <Form.Label>Last Name </Form.Label>
                                                <Form.Control type="text" placeholder="Lawrence" />
                                                <br/>
                                            </Form.Group>
                                            </div>
                                            <Form.Group>
                                                <Form.Label className="cusTxt">Mobile </Form.Label>
                                                <Form.Control type="mobile" placeholder="0711111111" />
                                                <br/>
                                            </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="cusTxt">Username </Form.Label>
                                            <Form.Control type="email" placeholder="abc@gmail.com" />
                                            <br/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="cusTxt">Password</Form.Label>
                                            <Form.Control type="password" placeholder="********" />
                                            <br/>
                                        </Form.Group >
                                        </div>

                                        <Button className="btn-block" variant="success" type="submit" block>
                                            Create Account
                                        </Button>
                                        <div className="signupBox">
                                            <a className="" href="#"> Log in</a>
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
export default Register;