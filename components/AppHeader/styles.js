import styled from 'styled-components';
import { COLORS } from '../../constansts/colors';
import { FONTS } from '../../constansts/fonts';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: ${COLORS.yellow};
  padding-top: ${getStatusBarHeight()}px;
`;

export const HeaderContainer = styled.View`
  width: 85%;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: -7%;
`;

export const TitleContainer = styled.View`
  width: 100%;
`;

export const TitleHeader = styled.Text`
  font-family: ${FONTS.Helvetica_Bold};
  font-size: 24px;
  text-align: center;
`;
