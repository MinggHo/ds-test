import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import imgSrc from "../../assets/images/sub-banner.jpg";
import { StyledButton, fadeIn } from "../styled/index";

const StyledCard = styled(Card)`
  color: #fffffe;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 0;
  border: none;
  overflow: hidden;
  .card-subtitle {
    margin-bottom: 1rem;
  }
  .card-title {
    font-size: ${({ theme }) => theme.headerSize.cardSm};
    font-weight: 600;
  }
  .card-body {
    padding: 2.5rem 3rem;
  }
  .card-text {
    /* animation: ${fadeIn} 2s linear; */
  }
  @media ${({ theme }) => theme.mediaQueries.above992} {
    .card-title {
      font-size: ${({ theme }) => theme.headerSize.cardMd};
    }
    .card-body {
      display: flex;
      flex-flow: column;
      justify-content: center;
      top: 50%;
      bottom: 0;
      right: 8%;
      width: 25%;
      min-width: 350px;
      position: absolute;
      background: #1c1c1c;
      transition: all 0.3s ease-in-out;

      &.show {
        /* bottom: 0; */
        top: 0;
      }
    }
    .card-text {
      margin-top: 1rem;
    }
  }
`;

function SubBanner() {
  const [show, setShow] = useState(false);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <section>
      <StyledCard>
        <Card.Img variant="top" src={imgSrc} loading="lazy" />
        <Card.Body className={`${show ? "show" : "hide"}`}>
          <Card.Subtitle>The Units</Card.Subtitle>
          <Card.Title>Seamless Lifestyle</Card.Title>
          {!show ? (
            <StyledButton
              className="d-none d-md-block"
              onClick={showMore}
              secondary="secondary"
            >
              More Details
            </StyledButton>
          ) : (
            <>
              <Card.Text>
                Build to create a holistic growth in you with access to
                facilities and amenities at easy reach.
              </Card.Text>
              <StyledButton primary="primary">View Units</StyledButton>
            </>
          )}
        </Card.Body>
      </StyledCard>
    </section>
  );
}

export default SubBanner;
