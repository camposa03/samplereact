import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

const Heading = (props) => {
    return (
        <div>
            <Row>
                <Col sm={{ size: 6, offset: 2 }}>
                    <Jumbotron>
                        <h1 className="display-3">Sample App</h1>
                        <p className="lead">Some sample text.</p>
                        <hr className="my-2" />
                        <p>Random text here</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    );
};

export default Heading;