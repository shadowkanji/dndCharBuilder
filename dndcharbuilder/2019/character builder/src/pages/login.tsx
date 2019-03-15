import * as React from "react"; // DEPENDENCIES
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import "../scss/style.scss";

export default class LoginPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <Container className='containerClass'>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Row>
                                    <Col xs={3}>
                                        <Form.Label>Email address</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="email" placeholder="Enter email" />

                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                </Form.Text>
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Row>
                                    <Col xs={3}>
                                        <Form.Label>Password</Form.Label>
                                    </Col>
                                    <Col>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Check me out" />

                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                    </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
       )
    }


}