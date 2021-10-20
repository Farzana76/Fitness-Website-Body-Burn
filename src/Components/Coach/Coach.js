import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Coach.css';

const Coach = (props) => {
    const {img} = props.coach;
    return (
        <div>
            <div>
                <Col>
                <Card border='dark' bg='dark'>
                    <Card.Img variant="top" className="rounded-3 p-5 rounded-circle image" src={img} />
                    <Card.Footer className="bg-light">
                        <Link to="/coachdetail">
                            <button className="btn btn-dark button">View details</button>
                        </Link> 
                    </Card.Footer>
                </Card>
                </Col>
            </div>
        </div>
    );
};

export default Coach;