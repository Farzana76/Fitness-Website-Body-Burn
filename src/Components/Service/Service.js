import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id, title, time, schedule, type, img} = props.service;

    const history = useHistory();
    const handleDetails = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div className="service">
             <Col>
             <Card>
                <Card.Img variant="top" className="rounded-3" src={img} />
                <Card.ImgOverlay className="text-light overlay">
                    <Card.Title>
                        <h1 className="display-5">{title}</h1>
                    </Card.Title>
                    <Card.Text>
                        <h3 className="">Time: {time}</h3>
                        <h4 className="">Schedule: {schedule}</h4>
                        <h4 className="">Type: {type}</h4>
                        <button onClick={handleDetails} className="btn btn-outline-light mt-4">View details</button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            </Col>
        </div>
    );
};

export default Service;