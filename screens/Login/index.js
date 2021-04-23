import React, { useContext, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { NameContext } from '../../contexts/name';
import { EtapaService } from '../../services';

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

    useEffect(() => {
        (async() => {
            // const response = await EtapaService.getSteps();
            // const response = await EtapaService.getStep('YIMnlBMAACAASgZL');
            // console.log(response);
        })();
    }, []);

    const handleSignInOnPress = () => {
        if (name.trim() != '') {
            navigation.dispatch(CommonActions.reset({
                index: 1,
                routes: [{ name: 'Welcome' }]
            }));
        }
    }

    return (
        <KeyboardView>
            <Container>
                <Brand source={require('../../assets/brand.png')} resizeMode="center" />
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