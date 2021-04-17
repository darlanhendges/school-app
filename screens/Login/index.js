import React from 'react';
import { KeyboardView, Title, Container, TextButton, ButtonContainer } from './styles';

const Login = () => {

    return (
        <KeyboardView>
            <Container>
                <Title>Login</Title>

               <ButtonContainer onPress={()=>{
                   
               }}>
                   <TextButton>Teste</TextButton>
               </ButtonContainer>
            </Container>
        </KeyboardView>
    );
}

export default Login;