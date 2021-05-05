import styled from 'styled-components/native';
import { COLORS } from '../../constansts/colors';
import { FONTS } from '../../constansts/fonts';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.yellow};
  align-items: center;
  justify-content: center;
`;

export const Brand = styled.Image`
  width: 55%;
  height: 8%;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  margin-bottom: 30px;
  font-size: 20px;
  color: ${COLORS.black};
  font-family: ${FONTS.Helvetica};
`;

export const FullNameInput = styled.TextInput`
  width: 70%;
  margin-bottom: 15px;
  padding: 12px 0;
  text-align: center;
  font-size: 20px;
  border: solid ${COLORS.yellowBorderButton} 2px;
  border-radius: 6px;
`;

export const SignInContainer = styled.TouchableOpacity`
  width: 70%;
  justify-content: center;
  margin-bottom: 50px;

  background: ${COLORS.strongGold};
  border-radius: 6px;
  padding: 16px 0;
`;

export const SignInText = styled.Text`
    text-align: center;
    font-size: 20px;
    color: ${COLORS.white}};
`;
