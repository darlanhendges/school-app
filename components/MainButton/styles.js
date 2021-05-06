import styled from 'styled-components/native';
import { COLORS } from '../../constansts/colors';
import { FONTS } from '../../constansts/fonts';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${COLORS.yellow};
  align-items: center;
  justify-content: center;
  border-color: ${COLORS.yellowBorderButton};
  border-radius: 4px;
  border-width: 1px;
  height: 50px;
`;
export const ContainerText = styled.Text`
  font-size: 20px;
  padding: 10px;
  font-family: ${FONTS.Helvetica};
`;
