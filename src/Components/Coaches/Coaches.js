import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CoachDetail from '../CoachDetail/CoachDetail';

const Coaches = () => {
    const [coaches, setCoaches] = useState([]);

    // loading coach data
    useEffect(() => {
        fetch('./coach.json')
        .then(res => res.json())
        .then(data => setCoaches(data))
    }, [])

    return (
        <div>
            <div className="services2">
                    <h1 className="heading mt-3">Our Coaches</h1>
                <Row xs={1} md={2} lg={2} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        coaches.map(coach => <CoachDetail
                            key = {coach.name}
                            coach={coach}
                            ></CoachDetail>)
                    }
                </Row> 
            </div>
        </div>
    );
};

export default Coaches;