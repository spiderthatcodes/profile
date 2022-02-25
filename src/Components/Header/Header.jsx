import React from 'react';
import { Container } from './style';

const Header = () => {
    const date = new Date().toLocaleDateString();

    return (
        <Container>
            <h1>Jessica Dickerson</h1>
            <h2>Software Developer &amp; Scrum Master</h2>
            <p>{date}</p>
        </Container>
    )
}

export default Header;
