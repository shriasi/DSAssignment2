import React, {Component, Fragment} from 'react'
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "../asset/css/Style.css";
import DeliveryImg from '../asset/image/deliver1.png'

class Delivery extends Component{

    render() {
        return (
            <div>
                <h1>Delivery Service</h1>
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                            <div className= "deliveryBox p-5">
                                <img className="DeliveryImg" src={DeliveryImg} alt=""/>
                                <Form className="mt-3">
                                    <Form.Group>
                                        <Form.Label className="cusTxt">Customer Name </Form.Label>
                                        <Form.Control type="text" placeholder="Dilshan Perera" />
                                         <br/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="cusTxt">Customer Address </Form.Label>
                                        <Form.Control type="address" placeholder="26 Park Street, Colombo" />
                                        <br/>
                                    </Form.Group>
                                    <div className="SideBySide">
                                        <div className="mobile">
                                            <Form.Group>
                                                <Form.Label className="cusTxt">Mobile Number </Form.Label>
                                                <Form.Control type="mobile" placeholder="0771112223" />
                                                <br/>
                                            </Form.Group>
                                        </div>
                                        <div className="deliverTxt">
                                            <Form.Group>
                                                <Form.Label className="cusName">Delivery Charges </Form.Label>
                                                <Form.Control type="Delivery Charges" placeholder="380.00" />
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
}
export default Delivery;