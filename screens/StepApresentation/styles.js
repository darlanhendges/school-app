import { Dimensions } from "react-native";
import styled from 'styled-components/native'
import MainButton from "../../components/MainButton";

import { COLORS } from "../../constansts/colors";
import { FONTS } from '../../constansts/fonts';

const { width, height } = Dimensions.get('window');


export const ScrollContainer = styled.ScrollView`
    flex:1;
`

export const Subtitle = styled.Text`
    font-size:30px;
    font-family: ${FONTS.Pacifico_400Regular};
    align-self:center;
    margin-bottom:10px;
    text-align:center;
    
`
/* image */
export const ContainerImage = styled.View`
    height: 300px;
`

export const PresentationImage = styled.Image`
    flex:1;
`

/* separator */
export const Separator = styled.View`
    width:80%;
    height: 1px;
    background-color:${COLORS.strongGold};
    align-self:center;
    margin-bottom:15px;
`



/* container body */
export const ContainerBody = styled.View`
    flex:1;
    justify-content:center;
    align-items: center;
`


export const ContainerText = styled.View`
    width:80%;
`

export const PresentationText = styled.Text`
    font-size:15px;
    font-family: ${FONTS.Roboto_400Regular};
`


export const ContainerButton = styled.View`
    margin-top:15px;
    margin-bottom:15px;

`