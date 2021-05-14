import React, { useContext, useEffect, useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import { NameContext } from '../../contexts/name';
import { ActivityIndicator } from '../../components';

import {
  KeyboardView,
  Container,
  Brand,
  Title,
  FullNameInput,
  SignInContainer,
  SignInText,
  ContainerTitle,
} from './styles';

const Login = ({ navigation }) => {
  const { name, setName, signIn } = useContext(NameContext);
  const [loading, setLoading] = useState(true);

  const redirectToWelcomeScreen = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Welcome' }],
      })
    );
  };

  const handleSignInOnPress = async () => {
    if (name.trim() != '') {
      setLoading(true);
      await signIn(name);
      redirectToWelcomeScreen();
    } else {
      alert('Informe o seu nome para entrar.');
    }
  };

  useEffect(() => {
    if (name) redirectToWelcomeScreen();
    else setLoading(false);
  }, []);

  if (loading) return <ActivityIndicator />;

  return (
    <KeyboardView>
      <Container>
        <Brand source={require('../../assets/brand.png')} resizeMode='center' />
        <ContainerTitle>
          <Title>Comece a aprender um idioma agora.</Title>
        </ContainerTitle>

        <FullNameInput
          placeholder='Nome completo'
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
