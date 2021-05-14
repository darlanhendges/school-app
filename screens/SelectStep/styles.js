import styled from 'styled-components';
import { COLORS } from '../../constansts/colors';
import { FONTS } from '../../constansts/fonts';

export const SafeAreaContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.white};
`;

export const StepsList = styled.FlatList`
  flex: 1;
`;

export const Step = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

export const BodyStep = styled.TouchableOpacity`
  min-height: 110px;
  flex-direction: row;
`;

export const ContainerImage = styled.View`
  justify-content: center;
`;

export const ImageApresentation = styled.Image`
  width: 80px;
  height: 80px;
  margin: 3px;
  border-radius: 50px;
  opacity: 0.7;
`;

export const ActivityIndicatorImage = styled.ActivityIndicator`
  width: 80px;
  height: 80px;
  margin: 3px;
  position: absolute;
`;

export const ContainerText = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
`;

export const TextStep = styled.Text`
  font-family: ${FONTS.Helvetica};
  font-size: 20px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${COLORS.yellow};
  width: 95%;
  align-self: center;
`;

export const ContainerCheck = styled.View`
  position: absolute;
  left: 60px;
  top: 20px;
`;
