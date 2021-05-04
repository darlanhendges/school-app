import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { COLORS } from '../../constansts/colors';

const { width, height } = Dimensions.get('window');

export const SafeAreaContainer = styled.ScrollView`
    flex: 1;
    background-color: ${COLORS.floralWhite};
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 25px;

    margin-top: 40px;
    margin-bottom: 30px;
`;

export const TipButton = styled.TouchableOpacity``;

export const Tip = styled.Image`
    width: 18px;
    height: 25px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.birch};
`;

export const GoBack = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${COLORS.birch};
`;

export const ImageContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    display: flex;
    width: ${width}px;
    align-content: center;
`;

export const Image = styled.Image`
    height: ${width * 0.60}px;
    width: ${width * 0.60}px;
    align-self: center;
`;

export const Separator = styled.View`
    width: 80%;
    margin: 30px 0;

    align-self: center;
    border: 1px solid ${COLORS.birch};
`;

export const AnswersContainer = styled.View`
    display: flex;

    width: 80%;
    height: 100%;

    margin: 0 auto 25px auto;
`;

export const AlternativeButton = styled.TouchableOpacity`
    padding: 15px 0 15px 20px;
    margin-bottom: 10px;

    background-color: ${COLORS.white};

    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.borderColor};
    border-radius: 8px;
`;

export const AlternativeText = styled.Text`
    font-size: 20px;
    color: ${COLORS.birch};
`;

export const MainButtonBackground = styled.View`
    background-color: ${COLORS.floralWhite};
`;

export const MainButtonContainer = styled.View`
    width: 80%;
    margin: 0 auto 25px auto;
    background-color: ${COLORS.floralWhite};
`;