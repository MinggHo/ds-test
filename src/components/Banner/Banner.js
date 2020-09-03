import React from "react";
import imageSrc from "../../assets/images/banner.jpg";
import styled from "styled-components";
import { StyledButton, fadeIn } from "../styled/index";

const Image = styled.img`
  width: 100%;
  height: 100vh;
  min-height: 360px;
  opacity: 0.6;
  object-fit: cover;
  @media (min-width: 992px) {
    opacity: 1;
    min-height: 500px;
  }
`;
const Figure = styled.figure`
  background: #000000;
  border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
`;
const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
  animation: ${fadeIn} 2s ease-in-out;
  color: white;
  h1 {
    margin-top: 0;
    font-weight: 500;
    font-size: 2.369rem;
  }
  .banner__subtitle {
    font-size: 1.125rem;
    line-height: 1.3;
    margin-bottom: 1.5rem;
  }
  @media ${({ theme }) => theme.mediaQueries.above992} {
    left: 70%;
    width: 30%;
    text-align: left;
    color: black;
    transform: translate(-30%, -50%);

    h1 {
      font-size: 3.052rem;
      font-weight: 600;
    }
    .banner__subtitle {
      font-size: 1.333rem;
    }
  }
`;
const Section = styled.section`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

function Banner() {
  return (
    <Section style={{ position: "relative" }}>
      <Figure>
        <Image src={imageSrc} alt="Banner image" />
      </Figure>
      <Overlay className="banner__overlay">
        <h1>Glenmarie's First Transit Oriented Development</h1>
        <p className="banner__subtitle">
          The Glenz is an integrated development with convenience built to mind
          with amenities just steps away.
        </p>
        <StyledButton primary="primary">View Overview</StyledButton>
      </Overlay>
    </Section>
  );
}

export default Banner;
