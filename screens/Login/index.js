import React from 'react';
import { Text } from 'react-native';

import {
    KeyboardView,
    Title,
    Container,
    Brand,
    FullNameInput,
    SignInContainer,
    SignInText,
} from './styles';

const Login = () => {
    return (
        <KeyboardView>
            <Container>
                <Brand source={require('../../assets/brand.png')}></Brand>
                <Title>Comece a aprender um idioma agora.</Title>
                <FullNameInput placeholder="Nome completo" />
                
                <SignInContainer>
                    <SignInText>ENTRAR</SignInText>
                </SignInContainer>
            </Container>
        </KeyboardView>
    );
}

export default Login;