import React from 'react';
import './Person.css';

import { Container, Card } from 'react-bootstrap';

const person = ( props ) => {
    return (
        <Container>
            <Card className="mt-5">
            <h1>Hello with bootstrap</h1>
            </Card>
        </Container>
    )
};

export default person;