import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './userPage.css'

function UserPage() {
  const [user, setUser] = useState('friend');
  return (
    <main className="mainContent">
      <h2>We are glad you are here, {user}!</h2>

      <section className="mainContent__games">
        <h3>Games</h3>
        <Container>
          <Row xs={1} md={2} lg={3}>
            <Col>
              <Link to={'/'}>
                <Image
                  src={require('../images/temporary.jpg')}
                  alt="dress_game"
                  rounded
                  fluid
                />
              </Link>
            </Col>
            <Col>
              <Link to={'/'}>
                <Image
                  src={require('../images/temporary.jpg')}
                  alt="ribbon_game"
                  rounded
                  fluid
                />
              </Link>
            </Col>
            <Col>
              <Link to={'/'}>
                <Image
                  src={require('../images/temporary.jpg')}
                  alt="quiz"
                  rounded
                  fluid
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mainContent__gallery">
        <h3>Gallery</h3>
        <Carousel>
          <Carousel.Item interval={2000}>
            <Image
              src={require('../images/temporary.jpg')}
              alt="bjanka_cat"
              fluid
            />
            <Carousel.Caption>
              <h3>Our Bjanka!</h3>
              <p>Here she is.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Image
              src={require('../images/temporary.jpg')}
              alt="bjanka_cat"
              fluid
            />
            <Carousel.Caption>
              <h3>Our Bjanka 2!</h3>
              <p>Here she is.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <Link to={'/'}>
        <Button variant="secondary" className="mainContent__btn">Return</Button>
      </Link>
    </main>
  );
}

export default UserPage;
