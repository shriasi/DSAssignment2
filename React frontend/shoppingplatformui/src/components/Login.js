import React, {Component, Fragment,useState,useEffect} from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "../asset/css/Style.css";
import "../asset/css/Style2.css";
import loginImg from '../asset/image/login.jpg'
import axios from "axios";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function Register(e){
        e.preventDefault();

        const buyer = {
            username: username,
            pass:password
        }

        console.log(buyer);

        const  url = "http://localhost:9000/user/seller-login";
        axios.post(url,buyer).then((res) => {

            if(res.data.status === 200){
                alert("Logged in!")
            }
            else{
                alert("something went wrong!")
            }

        })

    }


        return (
            <div>
                <h1 className="heading">Log in</h1>
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                                <div className= "deliveryBox p-5">
                                    <img className="DeliveryImg" src={loginImg} alt=""/>
                                    <Form onSubmit={Register} className="mt-3">
                                        <Form.Group>
                                            <Form.Label className="cusTxt">Username </Form.Label>
                                            <Form.Control type="email" onChange={(e) =>{setUsername(e.target.value)}} placeholder="abc@gmail.com" />
                                            <br/>
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label className="cusTxt">Password</Form.Label>
                                            <Form.Control type="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="********" />
                                            <br/>
                                        </Form.Group>
                                        <Button className="btn-block" variant="primary" type="submit" block>
                                            Login
                                        </Button>
                                        <div className="signupBox">
                                            <a className="" href="#"> Register Now </a>
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
export default Login;