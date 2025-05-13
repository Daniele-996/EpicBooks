import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import { Component } from "react";
// import history from "../data/history.json";
// import horror from "../data/horror.json";
// import romance from "../data/romance.json";
// import scifi from "../data/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid>
        <Row xs={1} sm={2} md={3} xl={4} xxl={6}>
          {fantasy.map((book) => (
            <Col key={book.asin}>
              <Card className="my-2">
                <Card.Img className="imgClass" variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {book.title}
                  </Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Button variant="primary">Buy for ${book.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
