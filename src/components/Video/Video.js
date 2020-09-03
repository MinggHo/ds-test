import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap/";
import videoSrc from "../../assets/images/video-image.jpg";
import { StyledButton, fadeIn } from "../styled/index";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 2rem 0;
  border-radius: 0;
  border: none;
  .card-subtitle {
    margin-bottom: 1rem;
  }
  .card-title {
    font-size: ${({ theme }) => theme.headerSize.cardSm};
    font-weight: 600;
  }
  .card-body {
    padding: 2rem;
  }
  @media ${({ theme }) => theme.mediaQueries.above992} {
    margin-bottom: 9rem;
    animation: ${fadeIn} 2.5s ease-in-out;
    .card {
      position: absolute;
      bottom: -20%;
      width: 40%;
      right: -20%;
    }
    .card-title {
      font-size: ${({ theme }) => theme.headerSize.cardMd};
    }
  }
`;

const Section = styled.section`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

function Video() {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 10, offset: 0 }}>
            <StyledCard>
              <Card.Img variant="top" src={videoSrc} loading="lazy" />
              <Card body>
                <Card.Subtitle>About Us</Card.Subtitle>
                <Card.Title>Strategically Located</Card.Title>
                <Card.Text>
                  The Glenz is located just 50m away from the upcoming Persiaran
                  Kerjaya LRT3 Station, making it the first transit oriented
                  development in Glenmarie, Shah Alam.
                </Card.Text>
                <StyledButton primary="primary">View Location</StyledButton>
              </Card>
            </StyledCard>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Video;
