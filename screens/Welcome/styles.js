import styled from 'styled-components/native';
import { FONTS } from '../../constansts/fonts';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
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
  font-size: 22px;
  color: #333333;
  font-family: ${FONTS.Helvetica};
`;
