import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { QuestionService } from '../../services';
import { MainButton } from '../../components';
import Alternative from './Alternative';

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
    MainButtonBackground,
    MainButtonContainer,
} from './styles';

const Question = () => {
    const [responseAlternatives, setResponseAlternatives] = useState([]);
    const [selectedResponses, setSelectedResponses] = useState([]);

    const Containers = ({ children }) => {
        return (
            <SafeAreaContainer>
                <ScrollView>{children}</ScrollView>
            </SafeAreaContainer>
        );
    };

    const handleAlternativeOnPress = alternative => {
        console.log('Passei aqui seu merda');
        let _alternative = [...selectedResponses, alternative];
        setSelectedResponses(_alternative);
    };

    useEffect(() => {
        console.log(selectedResponses);
    }, [selectedResponses]);

    // const getResponseAlternatives = useCallback(() => {

    // }, [selectedResponses]);

    useEffect(() => {
        (async() => {
            const question = (await QuestionService.getQuestions())[0].data;
            setResponseAlternatives(question.answers);
        })();

        console.log('Vou reprocessar tudo!');
    }, []);

    console.log('Renderizou Question Screen');

    return (
        <>
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
                    {responseAlternatives.map((r, index) => {
                        return (
                            <View key={index}>
                                <Alternative data={r}
                                    onPress={handleAlternativeOnPress}
                                    selected={!!selectedResponses.find(s => s.answer === r.answer)}
                                />
                            </View>
                        );
                    })}
                </AlternativesContainer>
            </Containers>

            <MainButtonBackground>
                <MainButtonContainer>
                    <MainButton text="CONTINUAR" />
                </MainButtonContainer>
            </MainButtonBackground>
        </>
    );
};

export default Question;