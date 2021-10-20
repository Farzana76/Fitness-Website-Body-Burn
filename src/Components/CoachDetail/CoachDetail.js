import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './CoachDetail.css';

const CoachDetail = (props) => {
    const {name, age, location, experience, img} = props.coach;

    return (
        <div>
            <Col>
             <Card border='dark' className="coach">
                 <div className="row">
                    <div className="col-6">
                        <Card.Img variant="top" className="rounded-3" src={img} />  
                    </div>
                    <div className="col-6 mt-2">
                        <Card.Title>
                            <h1 className="display-6">{name}</h1>
                        </Card.Title>
                        <Card.Text>
                        <h3 className="">Age: {age}</h3>
                        <h4 className="">Based in: {location}</h4>
                        <h4 className="">Experience: {experience}</h4>
                    </Card.Text>
                    </div>
                 </div>
            </Card>
            </Col>
        </div>
    );
};

export default CoachDetail;