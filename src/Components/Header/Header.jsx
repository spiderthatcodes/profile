import React from 'react';
import { Container } from './style';

const Header = () => {
    const date = new Date().toLocaleDateString();

    return (
        <Container>
            <div>
            <h1>Jessica Dickerson</h1>
            <h2>Software Developer &amp; Scrum Master</h2>
            </div>
            <p>{date}</p>
        </Container>
    )
}

export default Header;
