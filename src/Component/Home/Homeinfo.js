import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom';
import NavBar from '../Header/NavBar';
import Footer from '../Footer/Footer';
const Homeinfo = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleBtn =(event)=>{
        event.preventDefault();
        navigate('/card')

    }
    // console.log(product)
    return (
        <div className='container'>
            <NavBar></NavBar>
            <Row xs={1} md={2} className=" w-100 g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img className='w-100 h-75' variant="top" src={product[idx]?.img} />
                            <Card.Body>
                                <Card.Title>{product[idx]?.last_name}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button onClick={handleBtn}> See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
               
            </Row>
       
        </div>
    );
};

export default Homeinfo;