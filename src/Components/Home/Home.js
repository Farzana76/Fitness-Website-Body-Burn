import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Service from '../Service/Service'
import './Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    // loading service data
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            {/* passing data of services */}
            <div className="services2">
                    <h1 className="heading mt-3">Services</h1>
                <Row xs={1} md={2} lg={2} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        services.slice(0, 6).map(service => <Service 
                            key = {service.id}
                            service={service}
                            ></Service>)
                    }
                </Row> 
            </div>
        </div>
    );
};

export default Home;