import React, { useState, useContext } from 'react';
import { CommonActions } from '@react-navigation/native';
import { NameContext } from '../../contexts/name';

import {
    KeyboardView,
    Container,
    Brand,
    Title,
    FullNameInput,
    SignInContainer,
    SignInText,
} from './styles';

const Login = ({ navigation }) => {
    const { name, setName } = useContext(NameContext);

    const handleSignInOnPress = () => {
        console.log(name);
        console.log(setName);

        if (name.trim() != '') {
            navigation.dispatch(CommonActions.reset({
                index: 1,
                routes: [{ name: 'Welcome' }]
            }));
        } else
            alert('Não entrou!');
    }

    return (
        <KeyboardView>
            <Container>
                <Brand source={require('../../assets/brand.png')}></Brand>
                <Title>Comece a aprender um idioma agora.</Title>

                <FullNameInput placeholder="Nome completo"
                    value={name}
                    onChangeText={setName}
                />

                <SignInContainer onPress={handleSignInOnPress}>
                    <SignInText>ENTRAR</SignInText>
                </SignInContainer>
            </Container>
        </KeyboardView>
    );
};

export default Login;