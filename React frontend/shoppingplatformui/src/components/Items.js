import React, {Component, Fragment} from 'react'
import {Container, Row, Col, Card, Button} from "react-bootstrap";
import "../asset/css/Style.css";
import b5 from '../asset/image/b5.jpg'
import drawing from '../asset/image/drawing.jpg'
import graphBook from '../asset/image/graph.jpg'

class Items extends Component{

    render() {
        return (
            <div>
                <h1>Shopping Items</h1>
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                                <div className= "CartBox p-5">

                                    <Card style={{ width: '18rem' }} className="CardsBox">
                                        <Card.Img variant="top" src={b5} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="CardsBox">
                                        <Card.Img variant="top" src={drawing} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="CardsBox">
                                        <Card.Img variant="top" src={graphBook} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="CardsBox">
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} className="CardsBox">
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }} >
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                </div>
                            </Col>
                        </Row>
                    </Container>

                </Fragment>
            </div>


        );
    }
}
export default Items;