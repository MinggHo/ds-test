import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { StyledButton } from "../styled/index";
import styled from "styled-components";
import axios from "axios";

const dummyDataIfError = {
  records: [
    {
      id: "1",
      name: "Location",
      description:
        "The Glenz is set in a prime location with\r\nconvenient accessibility to major highways.",
      image:
        "http://staging.digitalsymphony.it/frontendtest/asset/images/alt-landing-location.jpg",
      category_id: "1",
      category_name: "Location",
    },
    {
      id: "2",
      name: "Integrated Offices",
      description:
        "Get the best of an integrated development\r\nwith a diverse floor plan.",
      image:
        "http://staging.digitalsymphony.it/frontendtest/asset/images/alt-landing-03.jpg",
      category_id: "2",
      category_name: "Offices",
    },
    {
      id: "3",
      name: "Investor Sheet",
      description: "Understand the numbers behind the\r\ninvestment.",
      image:
        "http://staging.digitalsymphony.it/frontendtest/asset/images/alt-landing-investor.jpg",
      category_id: "3",
      category_name: "Investor",
    },
  ],
};

const StyledCard = styled(Card)`
  margin-bottom: 1rem;
  border-radius: 0;
  border: none;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary};
`;
const StyledImg = styled(Card.Img)`
  border-radius: 0;
`;
const StyledTitle = styled(Card.Title)`
  font-size: ${({ theme }) => theme.headerSize.cardBasic};
  font-weight: 600;
`;
const StyledSectionHeader = styled.header`
  text-align: center;
  margin: 1.5rem 0;
  & h1 {
    font-size: 1.777rem;
    margin: 0;
  }
  & h2 {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Record = ({ name, description, image }) => {
  return (
    <Col xs={12} md={4}>
      <StyledCard>
        <StyledImg variant="top" src={image} loading="lazy" />
        <Card.Body>
          <StyledTitle>{name}</StyledTitle>
          <Card.Text>{description}</Card.Text>
          <StyledButton secondary="secondary">Read More</StyledButton>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};

function Info() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://staging.digitalsymphony.it/frontendtest/product/read.php")
      .then((res) => {
        setRecords(res.data.records);
      })
      .catch((err) => {
        // Error handling, for now just assign dummy array.
        setRecords(dummyDataIfError.records);
      });
  });

  return (
    <section style={{ background: "#e4e4e4", padding: "1rem 0" }}>
      <Container>
        <Row>
          <Col xs={12}>
            <StyledSectionHeader>
              <h2>Why Us</h2>
              <h1>A Perfect Investment & Upgrade</h1>
            </StyledSectionHeader>
          </Col>
          {records.map((record, i) => (
            <Record {...record} key={record.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Info;
