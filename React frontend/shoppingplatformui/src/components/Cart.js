import React, {Fragment,Component} from "react";
import {Container, CardDeck, Card, Button} from "react-bootstrap";
import "../asset/css/Style.css";
import b5 from '../asset/image/b5.jpg'
import drawing from '../asset/image/drawing.jpg'
import graphBook from '../asset/image/graph.jpg'

class Cart extends Component{

    render() {
        return (
            <div>
                <h1 className="heading">Shopping Cart</h1>
                <Fragment>
                    <Container>

                        <CardDeck>
                            <Card className="CardSpacing">
                                <Card.Img style={{ width: '10rem'}} variant="top" src={b5}/>
                                <Card.Body>
                                    <Card.Title>ATLAS B5 BOOK </Card.Title>
                                    <Card.Text>ATLAS B5 BOOK
                                    SINGLE RULED
                                    80 PGS</Card.Text>
                                    <Card.Text>RS. 90.0</Card.Text>
                                </Card.Body>
                                <div className="ButtonStyling">
                                    <Button className="cartBtn" variant="danger" type="submit" style={{width:'10rem'}}> Remove </Button>
                                    <Button className="cartBtn" variant="success" type="submit" style={{width:'10rem'}}> Order </Button>
                                </div>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>

                            <Card className="CardSpacing">
                                <Card.Img style={{ width: '10rem'}} variant="top" src={drawing} />
                                <Card.Body>
                                    <Card.Title>ATLAS A4 DRAWING BOOK</Card.Title>
                                    <Card.Text>
                                        <Card.Text>ATLAS A4 DRAWING BOOK
                                        SMALL
                                        20 PGS</Card.Text>
                                        <Card.Text>RS. 50.0</Card.Text>
                                    </Card.Text>
                                </Card.Body>
                                <div className="ButtonStyling">
                                    <Button className="cartBtn" variant="danger" type="submit" style={{width:'10rem'}}> Remove </Button>
                                    <Button className="cartBtn" variant="success" type="submit" style={{width:'10rem'}}> Order </Button>
                                </div>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                            <Card className="CardSpacing">
                                <Card.Img style={{ width: '10rem'}} variant="top" src={graphBook} />
                                <Card.Body>
                                    <Card.Title>ATLAS A4 SCIENCE BOOK GRAPH</Card.Title>
                                    <Card.Text>
                                        <Card.Text>ATLAS A4 SCIENCE BOOK GRAPH
                                        80 PGS</Card.Text>
                                        <Card.Text>RS. 50.0</Card.Text>
                                    </Card.Text>
                                </Card.Body>
                                <div className="ButtonStyling">
                                    <Button className="cartBtn" variant="danger" type="submit" style={{width:'10rem'}}> Remove </Button>
                                    <Button className="cartBtn" variant="success" type="submit" style={{width:'10rem'}}> Order </Button>
                                </div>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>

                    </Container>

                </Fragment>
            </div>


        );
    }
}
export default Cart;