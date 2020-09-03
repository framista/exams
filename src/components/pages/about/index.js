import React from 'react';
import { Container, Card } from 'react-bootstrap';
import PageContainer from '../../layout/page-container';
const About = () => {
  const typesOfExamsCard = [
    { text: 'Sprawdzian później niż za 7 dni', variant: 'info' },
    { text: 'Sprawdzian w przeciągu najbliższych 7 dni', variant: 'warning' },
    { text: 'Sprawdzian nieoceniony', variant: 'secondary' },
    { text: 'Sprawdzian niezaliczony', variant: 'danger' },
    { text: 'Sprawdzian zaliczony', variant: 'success' },
  ];
  return (
    <PageContainer>
      <Container className="d-flex flex-column align-items-center text-center">
        <h3 className="mt-3 mb-5 text-primary">
          Oznaczenia kolorów sprawdzianów
        </h3>
        <div style={{ maxWidth: '700px' }}>
          {typesOfExamsCard.map((type, index) => (
            <Card key={index} bg={type.variant} className="mb-3 text-light">
              <Card.Header>
                <Card.Title className="my-1">{type.text}</Card.Title>
              </Card.Header>
            </Card>
          ))}
        </div>
      </Container>
    </PageContainer>
  );
};

export default About;
