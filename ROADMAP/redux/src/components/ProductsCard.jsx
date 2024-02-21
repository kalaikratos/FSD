import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard({ data,handleCart }) {
    
    return (
        <Col xs={4} className="d-flex justify-content-center mb-5">
            <Card style={{ width: '23rem', display: "flex" }} className='shadow'>
                <Card.Img style={{ width: "100%", height: "100%", objectFit: "contain" }} variant="top" src={data.images[0]} />
                <Card.Body style={{ width: "100%", height: "100%" }}>
                    <Card.Title style={{ fontSize:"10px" }}>{data.title}</Card.Title>
                    <Card.Text style={{ fontSize: "10px", fontWeight: "lighter" ,display:"flex"}}>
                        {data.description}
                    </Card.Text>
                    <Card.Text>${data.price}</Card.Text>
                </Card.Body>
                <div className='card-footer border-top-0'><Button onClick={(event) => handleCart(event, data)} variant="primary">Add to Cart</Button></div>
            </Card>
        </Col>
    )
}