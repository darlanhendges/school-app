import styled from "styled-components";
import { COLORS } from "../../constansts/colors";
import { FONTS } from "../../constansts/fonts";



export const Container = styled.View`
    width: 100%;
    margin-bottom: 25px;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    height: 110px;
    background-color: ${COLORS.yellow}
`

export const HeaderContainer = styled.View`
    width: 85%;
    flex-direction: row;
`

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: -7%;
`

export const TitleContainer= styled.View`
    width:100%;

`

export const TitleHeader = styled.Text`
    font-family: ${FONTS.Roboto_500Medium};
    font-size:28px;
    text-align:center;


`