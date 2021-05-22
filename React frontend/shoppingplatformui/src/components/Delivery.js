import React, {Component, Fragment, useState} from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "../asset/css/Style.css";
import DeliveryImg from '../asset/image/deliver1.png'
import axios from "axios";

function Delivery(){


    const [customerName, setCustomerName] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [charges, setCharges] = useState("");


    function Deliver(e){
        e.preventDefault();

        const buyer = {
            customerName: customerName,
            customerAddress: customerAddress,
            mobile: mobile,
            charges:charges
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
                <h1 className="heading">Delivery Service</h1>
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                            <div className= "deliveryBox p-5">
                                <img className="DeliveryImg" src={DeliveryImg} alt=""/>
                                <Form onSubmit={Deliver} className="mt-3">
                                    <Form.Group>
                                        <Form.Label className="cusTxt">Customer Name </Form.Label>
                                        <Form.Control type="text" onChange={(e) =>{setCustomerName(e.target.value)}} placeholder="Dilshan Perera" />
                                         <br/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="cusTxt">Customer Address </Form.Label>
                                        <Form.Control type="address" onChange={(e) =>{setCustomerAddress(e.target.value)}} placeholder="26 Park Street, Colombo" />
                                        <br/>
                                    </Form.Group>
                                    <div className="SideBySide">
                                        <div className="right">
                                            <Form.Group>
                                                <Form.Label className="cusTxt">Mobile Number </Form.Label>
                                                <Form.Control type="mobile" onChange={(e) =>{setMobile(e.target.value)}} placeholder="0771112223" />
                                                <br/>
                                            </Form.Group>
                                        </div>
                                        <div className="left">
                                            <Form.Group>
                                                <Form.Label className="cusName">Delivery Charges </Form.Label>
                                                <Form.Control type="text" onChange={(e) =>{setCharges(e.target.value)}} placeholder="380.00" />
                                                <br/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Button className="btn-block" variant="success" type="submit" size="lg" block>
                                        Deliver
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
            </div>


        );

}
export default Delivery;