import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
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
    const [selectedResponses, setSelectedResponse] = useState([]);

    const Containers = ({ children }) => {
        return (
            <SafeAreaContainer>
                <ScrollView>{children}</ScrollView>
            </SafeAreaContainer>
        );
    };

    const handleAlternativeOnPress = alternative => {
        setSelectedResponse(oldValue => oldValue.push(alternative));
    };

    useEffect(() => {
        (async() => {
            const question = (await QuestionService.getQuestions())[0].data;
            setResponseAlternatives(question.answers);
        })();
    }, []);

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
                        return (<Alternative index={index} data={r} onPress={handleAlternativeOnPress} />);
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