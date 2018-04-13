import * as React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

export class FooterPage extends React.Component<{},{}> {
    render(){
        return(
            <div className="footer navbar-fixed-bottom" style={{paddingTop: "100px"}}>
                <Footer color="mdb-color" className="font-medium pt-4 mt-4">
                    <Container className="text-left">
                        <Row>
                            <Col sm="6">
                                <h5 className="title">Footer Content</h5>
                            </Col>
                            <Col sm="6">
                                <h5 className="title">Links</h5>
                                <ul>
                                    <li className="list-unstyled"><a href="#!">About</a></li>
                                    <li className="list-unstyled"><a href="#!">Competitions</a></li>
                                    <li className="list-unstyled"><a href="#!">Contact Us</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Footer>
            </div>
        );
    }
}