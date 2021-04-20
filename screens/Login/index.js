import React from 'react';

import {
    KeyboardView,
    Container,
    Brand,
    Title,
    FullNameInput,
    SignInContainer,
    SignInText,
} from './styles';

const Login = () => (
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

export default Login;