import React from 'react';
import { View } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { Container, Title, ButtonContainer, TextButton } from './styles';

const FirstAccess = ({ navigation }) => {
  return (
    <Container>
      <Title>Primeiro Acesso</Title>

      <ButtonContainer
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: "Login" }]
            })
          );
        }}
      >
        <TextButton>Ir para login</TextButton>
      </ButtonContainer>
    </Container>
  );
};

export default FirstAccess;
