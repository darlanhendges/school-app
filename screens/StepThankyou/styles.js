import styled from 'styled-components/native';
import { COLORS } from '../../constansts/colors';
import { FONTS } from '../../constansts/fonts';

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const ContainerBrand = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom:15px;
`;

export const Subtitle = styled.Text`
  font-size: 30px;
  font-family: ${FONTS.Helvetica_Bold};
  align-self: center;
  padding-bottom:15px;  text-align: center;
`;
/* image */
export const ContainerImage = styled.View`
  flex: 1;
  align-items: center;
`;

export const PresentationImage = styled.Image`
  height: 300px;
  width: 300px;
`;

/* separator */
export const Separator = styled.View`
  width: 80%;
  height: 1px;
  background-color: ${COLORS.strongGold};
  align-self: center;
  margin-bottom: 15px;
`;

/* container body */
export const ContainerBody = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerText = styled.View`
  width: 80%;
`;

export const PresentationText = styled.Text`
  font-size: 16px;
  font-family: ${FONTS.Helvetica};
`;

export const ContainerButton = styled.View`
  height: 80px;
  flex-direction: column;
  justify-content: flex-end;
  align-self: center;
  bottom: 10px;
  width: 80%;
`;
