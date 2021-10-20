import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const {sid} = useParams();
    const [serv, setServ] = useState([]);

    useEffect(() => {
        fetch('/data2.json')
        .then(res => res.json())
        .then(data => setServ(data));
    }, [])


    // const fServ = id => {
    //     const fServ = serv.filter(s => s.id !== id);
    //     setServ(fServ);
    //   };

    return (
        <div> 
            {serv.filter(s => s.id === parseInt(sid)).map(filteredServ=> (
                <div>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={filteredServ.img} />
                        <Card.ImgOverlay className="text-light overlay">
                            <Card.Title>
                                <h5>-Released date {filteredServ.date}</h5>
                                <h1 className="display-2">{filteredServ.title}</h1>
                            </Card.Title>
                            <Card.Text>
                                <h2 className="">Time: {filteredServ.time}</h2>
                                <h4 className="">Schedule: {filteredServ.schedule}</h4>
                                <h4 className="">Type: {filteredServ.type}</h4>
                                <h4>Equipment: {filteredServ.equipment}</h4>
                                {/* <button onClick={handleDetails} className="btn btn-outline-light mt-4">View details</button> */}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                
            ))}
        </div>
    );
};

export default ServiceDetail;