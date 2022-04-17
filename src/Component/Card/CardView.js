import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const CardView = (props) => {
    const navigate =useNavigate();
    const handleButton=()=>{
        navigate('/check')
    }
    const { img, last_name } = props.Data;
    return (
        
            <div className='col-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{last_name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button onClick={handleButton} variant="primary">Check out</Button>
                    </Card.Body>
                </Card>
            </div>
     
    );
};

export default CardView;