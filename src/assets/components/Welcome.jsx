import { Alert, Col, Container, Row } from "react-bootstrap";

const Welcome = function () {
  return (
    <>
      <Container fluid>
        {" "}
        <Row>
          {" "}
          <Col>
            <Alert>Cerca la lettura perfetta per TE!</Alert>
            <h1>Welcome to my Library</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
