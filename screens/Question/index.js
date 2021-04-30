import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { QuestionService } from '../../services';
import { MainButton } from '../../components';
// import Alternative from './Alternative';

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
    AlternativeButton,
    AlternativeText,
    MainButtonBackground,
    MainButtonContainer,
} from './styles';

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedResponseAlternatives, setSelectedResponseAlternatives] = useState([]);

    const Containers = ({ children }) => {
        return (
            <SafeAreaContainer>
                <ScrollView>{children}</ScrollView>
            </SafeAreaContainer>
        );
    };

    const handleAlternativeOnPress = alternative => {
        let _selectedAlternatives = [...selectedResponseAlternatives];

        if (!_selectedAlternatives.some(a => a.answer === alternative.answer))
            _selectedAlternatives.push(alternative);
        else
            _selectedAlternatives = _selectedAlternatives.filter(a => a.answer !== alternative.answer);

        setSelectedResponseAlternatives(_selectedAlternatives);
    };

    // const renderResponseAlternatives = () => {
    //     return questions[0].data.answers.map((r, i) => (
    //         <Alternative key={i}
    //             data={r}
    //             onPress={handleAlternativeOnPress}
    //             selected={!!selectedResponseAlternatives.some(_r => _r.answer === r.answer)}
    //         />
    //     ));
    // };

    const renderResponseAlternatives = () => {
        return questions[0].data.answers.map((r, i) => (
            <AlternativeButton key={i} onPress={handleAlternativeOnPress}>
                <AlternativeText>{r.answer}</AlternativeText>
            </AlternativeButton>
        ));
    };

    console.log('Renderizou!');

    useEffect(() => {
        (async() => {
            const _questions = (await QuestionService.getQuestions());
            setQuestions(_questions);
        })();
    }, []);

    return (
        <>
            <Containers>
                <HeaderContainer>
                    <Tip source={require('../../assets/tip.png')} />
                    <Title>Título da questão?</Title>
                    <GoBack>X</GoBack>
                </HeaderContainer>

                <ImageContainer>
                    {questions.length > 0
                        ? <Image source={{ uri: questions[0].data.image.url ?? '' }} />
                        : null}
                </ImageContainer>

                <Separator />

                <AlternativesContainer>
                    {questions.length > 0
                        ? renderResponseAlternatives()
                        : null}
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