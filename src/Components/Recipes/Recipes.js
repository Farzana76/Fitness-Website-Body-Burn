import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Recipes.css';

const Recipes = () => {
    return (
        <div className="scrollbar-hidden">
            <Col>
             <Card border='dark' className="coach">
                 <div className="row">
                    <div className="col-6">
                        <Card.Img variant="top" className="rounded-3" src='../../img/bg1.jpg' />  
                    </div>
                    <div className="col-6 mt-2">
                        <Card.Title>
                            <h1 className="display-6">hfcgjvjhbjhb</h1>
                        </Card.Title>
                        <Card.Text>
                        <h3 className="">hgvhjgvjh</h3>
                        <h4 className="">hcfhg</h4>
                        <h4 className="">hgvjbvjhbn</h4>
                    </Card.Text>
                    </div>
                 </div>
            </Card>
            <Card border='dark' className="coach">
                 <div className="row">
                    <div className="col-6">
                        <Card.Img variant="top" className="rounded-3" src='../../img/bg2.jpg' />  
                    </div>
                    <div className="col-6 mt-2">
                        <Card.Title>
                            <h1 className="display-6">hfcgjvjhbjhb</h1>
                        </Card.Title>
                        <Card.Text>
                        <h3 className="">hgvhjgvjh</h3>
                        <h4 className="">hcfhg</h4>
                        <h4 className="">hgvjbvjhbn</h4>
                    </Card.Text>
                    </div>
                 </div>
            </Card>
            </Col>
        </div>
    );
};

export default Recipes;