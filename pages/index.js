

import { Image, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
        alt="Metropolitan Museum of Art"
        fluid
        rounded
      />
      <br />
      <br />
      <Row>
        <Col md={6}>
          <p>
            The Metropolitan Museum of Art of New York City, colloquially "the
            Met", is the largest art museum in the Americas. Its permanent
            collection contains over two million works, divided among 17
            curatorial departments. The main building at 1000 Fifth Avenue, along
            the Museum Mile on the eastern edge of Central Park on Manhattan's
            Upper East Side, is by area one of the world's largest art museums.
            The first portion of the approximately 2-million-square-foot (190,000
            m2) building was built in 1880. In 2021, despite the COVID-19
            pandemic in New York City, the museum attracted 1,958,000 visitors,
            ranking fourth on the list of most-visited art museums in the world.
          </p>
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
              target="_blank"
              rel="noreferrer"
            >
              Read more on Wikipedia
            </a>
          </p>
        </Col>
        <Col md={6}>
          {/* Additional content can be added here if desired */}
        </Col>
      </Row>
    </>
  );
}
