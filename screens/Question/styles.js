import styled from 'styled-components/native';
import { COLORS } from '../../constansts/colors';

export const SafeAreaContainer = styled.SafeAreaView`
    display: flex;
    height: 100%;
    background-color: ${COLORS.floralWhite};
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    margin-top: 50px;
    margin-bottom: 30px;
`;

export const Tip = styled.Image`
    width: 25px;
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
`;

export const Image = styled.Image`
    width: 100%;
    height: 220px;
`;

export const Separator = styled.View`
    width: 80%;
    align-self: center;
    margin: 30px 0;
    border: 1px solid ${COLORS.birch};
`;

export const AlternativesContainer = styled.View`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 0 auto 25px auto;
`;

export const Alternative = styled.Text`
    padding: 15px 0 15px 20px;
    margin-bottom: 10px;
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.cloud};
    border-radius: 8px;
    font-size: 20px;
    color: #3C3A36;
`;

export const MainButtonContainer = styled.View`
    width: 70%;
    margin: 0 auto 0 auto;
`;