import {React,useState,useEffect} from 'react'
import {Card, CardImg, CardBody,Row,Col,Container,CardSubtitle,CardText,CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import './homepage.css';
import axios from 'axios'


export default function Homepage(props) {
            
        const url='https://api.tvmaze.com/search/shows?q=all'
        const [shows,setShow]=useState(null)
         useEffect(()=>{
            axios.get(url)
            .then(response=>{
                setShow(response.data)
            })
         },[url])
         if(shows){
    return (
        <div>
            <div className="cards-class">
        <h1 className="text-home">TV Maze</h1>
        <p className="text-home">Select from your favorite Movies</p>
        <Container>
        <Row>
            <Col md={3}> 
      <Card>
         <div className="hover-img">
        <CardImg className="height-img" id="zoom-in"top width="100%" src={shows[0].show.image.medium} alt="Card image cap" />
        
        <CardBody>  
        <CardTitle tag="h5">{shows[0].show.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Language-{shows[0].show.language}</CardSubtitle>
          <CardText>Rating-Average({shows[0].show.rating.average})</CardText>
                    <Link className="link-class" to={"/SummaryOne"}>View Summary</Link>
        </CardBody>
        </div>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src={shows[1].show.image.medium} alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h5">{shows[1].show.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Language-{shows[1].show.language}</CardSubtitle>
          <CardText>Rating-Good({shows[1].show.rating.average})</CardText>
        <Link className="link-class" to="/SummaryTwo">View Summary</Link>
        </CardBody>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src={shows[2].show.image.medium} alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h5">{shows[2].show.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Language-{shows[2].show.language}</CardSubtitle>
          <CardText>Rating-Good({shows[2].show.rating.average})</CardText>
        <Link className="link-class" to="/SummaryThree">View Summary</Link>
        </CardBody>
      </Card>
      </Col>
      <Col md={3}> 
      <Card>
        <CardImg className="height-img" top width="100%" src={shows[3].show.image.medium} alt="Card image cap" />
        <CardBody>
        <CardTitle tag="h5">{shows[3].show.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Language-{shows[3].show.language}</CardSubtitle>
          <CardText>Rating-Average({shows[2].show.rating.average})</CardText>
        <Link className="link-class" to="/SummaryFour">View Summary</Link>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>

    </div>
        </div>
    )
         }

         return(
           <div></div>
         )
}

