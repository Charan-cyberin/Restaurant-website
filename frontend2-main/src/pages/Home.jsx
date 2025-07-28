import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './aa.css';
const Home = () => {
  return (
    <main>
    
     
      <div className="home">
      <Container>
        <Row>
          <Col md={6}>
            <div className="con">
              <h1>Welcome to Our Resturant</h1>
              <p>Where Tasts &.Quality matters</p>
            </div>
          </Col>
        
        </Row>
      </Container>
      </div>
      
      
    </main>
  )
}

export default Home