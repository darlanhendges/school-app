import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
    background-color: #FFD306;
    align-items: center;
    justify-content: center;
`;

export const Brand = styled.Image`
    width: 50%;
    height: 55px;
    margin-bottom: 30px;
`;

export const Title = styled.Text`
    margin-bottom: 30px;    
    font-size: 20px;
    color: #333333;
    font-family: 'Pacifico_400Regular';
`;

export const FullNameInput = styled.TextInput`
    width: 70%;
    margin-bottom: 15px;
    padding: 12px 0;
    text-align: center;

    font-size: 20px;
    border: solid #E0BB0C 2px;
    border-radius: 6px;
`;

export const SignInContainer = styled.TouchableOpacity`
    width: 70%;
    justify-content: center;
    margin-bottom: 45px;

    background: #AB8D00;
    border-radius: 6px;
    padding: 16px 0;
`;

export const SignInText = styled.Text`
    text-align: center;
    font-size: 20px;
    color: white;
`;