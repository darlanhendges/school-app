import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { COLORS } from '../../constansts/colors';
import { FONTS } from '../../constansts/fonts';

export const ModalContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
  border-radius: 15px;
`;

export const ContainerText = styled.View`
  width: 70%;
`;

export const Text = styled.Text`
  padding-top: 25px;
  font-size: 16px;
  padding-bottom: 25px;
  text-family: ${FONTS.Helvetica};
`;
export const MainContainer = styled.View`
  padding-top: 10px;
  padding-bottom: 25px;
  width: 70%;
`;
