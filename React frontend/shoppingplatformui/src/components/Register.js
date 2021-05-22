import React, {Component, Fragment, useState} from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "../asset/css/Style2.css";
import "../asset/css/Style.css";
import RegisterImg from '../asset/image/registerLogo.jpg'
import axios from "axios";

function Register(){

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [mobile, setMobile] = useState("");
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");


        function signUp(e){
            e.preventDefault();

            const buyer = {
                firstName: firstName,
                lastName: lastName,
                mobile: mobile,
                username: username,
                pass:password
            }

            console.log(buyer);

            const  url = "http://localhost:9000/user/seller-login";
            axios.post(url,buyer).then((res) => {

                if(res.data.status === 200){
                    alert("Registered!")
                }
                else{
                    alert("something went wrong!")
                }

            })

        }


        return (
            <div>
                <h1 className="heading">Register Now</h1>
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                                <div className= "RegisterBox p-6">
                                    <img className="DeliveryImg" src={RegisterImg} alt=""/>
                                    <Form onSubmit={signUp} className="mt-3">
                                        <div className="LabelBox">
                                            <div className="SideBySide">
                                            <Form.Group className="TextBox">
                                                <Form.Label>First Name </Form.Label>
                                                <Form.Control type="text" onChange={(e) =>{setFirstName(e.target.value)}} placeholder="Mark" name = "firstName"/>
                                                <br/>
                                            </Form.Group>

                                            <Form.Group className="TextBox">
                                                <Form.Label>Last Name </Form.Label>
                                                <Form.Control type="text" onChange={(e) =>{setLastName(e.target.value)}} placeholder="Lawrence" name = "lastName" />
                                                <br/>
                                            </Form.Group>
                                            </div>
                                            <Form.Group>
                                                <Form.Label className="cusTxt">Mobile </Form.Label>
                                                <Form.Control type="mobile" onChange={(e) =>{setMobile(e.target.value)}} placeholder="0711111111" name = "mobile"/>
                                                <br/>
                                            </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="cusTxt">Username </Form.Label>
                                            <Form.Control type="email" onChange={(e) =>{setUsername(e.target.value)}} placeholder="abc@gmail.com" name = "username"/>
                                            <br/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="cusTxt">Password</Form.Label>
                                            <Form.Control type="password" onChange={(e) =>{setPassword(e.target.value)}} placeholder="********" name = "pwd"/>
                                            <br/>
                                        </Form.Group >
                                        </div>

                                        <Button className="btn-block" variant="success" type="submit" block name = "createBtn">
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
export default Register;