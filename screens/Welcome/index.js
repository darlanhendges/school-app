import React, { useContext } from 'react';
import { NameContext } from '../../contexts/name';

import {
    KeyboardView,
    Container,
    Brand,
    Title,
} from './styles';

const Welcome = () => {
    const { name } = useContext(NameContext);

    return (
        <KeyboardView>
            <Container>
                <Brand source={require('../../assets/brand.png')} />
                <Title>Olá! Seja bem-vindo, {name}</Title>
            </Container>
        </KeyboardView>
    );
};

export default Welcome;