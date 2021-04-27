import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { QuestionService } from '../../services';
import { MainButton } from '../../components';

import {
    SafeAreaContainer,
    HeaderContainer,
    Tip,
    Title,
    GoBack,
    ImageContainer,
    Image,
    Separator,
    AlternativesContainer,
    Alternative,
    MainButtonContainer,
} from './styles';

const Question = () => {
    const Containers = ({ children }) => {
        return (
            <SafeAreaContainer>
                <ScrollView>{children}</ScrollView>
            </SafeAreaContainer>
        );
    }

    // useEffect(() => {
    //     (async() => {
    //         const response = await QuestionService.getQuestions();
    //         console.log(response);
    //     })();
    // }, []);

    return (
        <Containers>
            <HeaderContainer>
                <Tip source={require('../../assets/tip.png')} resizeMode="center" />
                <Title>Título da questão?</Title>
                <GoBack>X</GoBack>
            </HeaderContainer>

            <ImageContainer>
                <Image source={{ uri: 'https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format' }}
                    resizeMode="center"
                />
            </ImageContainer>

            <Separator />

            <AlternativesContainer>
                <Alternative>1. Alternativa 1</Alternative>
                <Alternative>2. Alternativa 2</Alternative>
                <Alternative>3. Alternativa 3</Alternative>
            </AlternativesContainer>

            <MainButtonContainer>
                <MainButton text="CONTINUAR" />
            </MainButtonContainer>
        </Containers>
    );
};

export default Question;