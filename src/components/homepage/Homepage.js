import React from 'react'
import {Card, CardImg, CardBody,Row,Col,Container,CardSubtitle,CardText,CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import './homepage.css';
export default function Homepage(props) {
    return (
        <div>
            <div className="cards-class">
        <h1 className="text">TV Shows</h1>
        <p className="text">Select from your favorite TV Shows</p>
        <Container>
        <Row>
            <Col md={3}> 
      <Card>
         <div className="hover-img">
        <CardImg className="height-img" id="zoom-in"top width="100%" src="https://static.tvmaze.com/uploads/images/medium_portrait/280/701869.jpg" alt="Card image cap" />
        
        <CardBody>  
        <CardTitle tag="h5">All American</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Language-English</CardSubtitle>
          <CardText>Rating-Average(7.8)</CardText>
                    <Link className="link-class" to="/summary">Select Show</Link>
        </CardBody>
        </div>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src="https://static.tvmaze.com/uploads/images/medium_portrait/280/701869.jpg" alt="Card image cap" />
        <CardBody>
        <Link className="link-class" to="/summary">Select Show</Link>
        </CardBody>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src="https://static.tvmaze.com/uploads/images/medium_portrait/280/701869.jpg" alt="Card image cap" />
        <CardBody>
        <Link className="link-class" to="/summary">Select Show</Link>
        </CardBody>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src="https://static.tvmaze.com/uploads/images/medium_portrait/280/701869.jpg" alt="Card image cap" />
        <CardBody>
        <Link className="link-class" to="/summary">Select Show</Link>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>

    </div>
        </div>
    )
}
