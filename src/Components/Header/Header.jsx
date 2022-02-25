import React from 'react';
import { Container } from './style';

const Header = () => {
    const date = new Date();

    return (
        <Container>
            <h1>This will be the header</h1>
        </Container>
    )
}

export default Header;
