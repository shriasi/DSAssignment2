import React, {Component, Fragment} from 'react'
import EmployeeService from '../services/RegisterService';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import RegisterImg from "../asset/image/registerLogo.jpg";
import RegisterService from "../services/RegisterService";

class CreateCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            mobile: '',
            pwd: ''
        }
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId,
                    mobile: employee.mobile,
                    pwd: employee.pwd
                });
            });
        }
    }

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, mobile: this.state.mobile, pwd: this.state.pwd};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if (this.state.id === '_add') {
            RegisterService.createCustomer(employee).then(res => {
                this.props.history.push('/Register');
            });
        }
    }

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
                                                    <Form.Control type="text" placeholder="Mark" name = "firstName" value={this.state.firstName}/>
                                                    <br/>
                                                </Form.Group>

                                                <Form.Group className="TextBox">
                                                    <Form.Label>Last Name </Form.Label>
                                                    <Form.Control type="text" placeholder="Lawrence" name = "lastName" value={this.state.lastName}/>
                                                    <br/>
                                                </Form.Group>
                                            </div>
                                            <Form.Group>
                                                <Form.Label className="cusTxt">Mobile </Form.Label>
                                                <Form.Control type="mobile" placeholder="0711111111" name = "mobile" value={this.state.mobile} />
                                                <br/>
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label className="cusTxt">Username </Form.Label>
                                                <Form.Control type="email" placeholder="abc@gmail.com" name = "username" value={this.state.emailId} />
                                                <br/>
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label className="cusTxt">Password</Form.Label>
                                                <Form.Control type="password" placeholder="********" name = "pwd" value={this.state.pwd} />
                                                <br/>
                                            </Form.Group >
                                        </div>

                                        <Button className="btn-block" variant="success" type="submit" block name = "createBtn" onClick={this.saveOrUpdateEmployee}>
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
export default CreateCustomer;
