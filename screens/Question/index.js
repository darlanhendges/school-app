import React, { useEffect, useState } from 'react';
import { QuestionService } from '../../services';
import { MainButton, ActivityIndicator, InfoModal } from '../../components';
import Answer from './Answer';
import { RichText } from 'prismic-reactjs';

import {
    SafeAreaContainer,
    HeaderContainer,
    TipButton,
    Tip,
    Title,
    GoBack,
    ImageContainer,
    Image,
    Separator,
    AnswersContainer,
    MainButtonBackground,
    MainButtonContainer
} from './styles';

const Question = ({ navigation, route }) => {
    const [loading, setLoading] = useState(true);
    const [question, setQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const [modalData, setModalData] = useState({});

    const Containers = ({ children }) => {
        return (<SafeAreaContainer>{children}</SafeAreaContainer>);
    };

    const handleTipOnPress = () => {
        setModalData({ isVisible: true, text: question.data.tip });
    };

    const handleAnswerOnPress = answer => {
        const _answers = answers.map(a => {
            if (a.id === answer.id)
                a.selected = !answer.selected;

            return a;
        });

        setAnswers(_answers);
    };

    const renderAnswers = () => {
        return answers.map((a, i) => (
            <Answer data={a}
                onPress={() => handleAnswerOnPress(a)}
                key={i}
            />
        ));
    };

    const handleContinuarOnPress = () => {
        const selectedAnswers = answers.filter(a => a.selected);

        if (selectedAnswers.length == 0) {
            setModalData({ isVisible: true, text: 'Selecione uma alternativa.' });
            return;
        }

        const areAllAnswersCorrect = selectedAnswers.every(a => a.correct);

        if (areAllAnswersCorrect)
            renderNextQuestion();
        else
            setModalData({ isVisible: true, text: question.data.error_message });
    };

    const handleModalOnBackButtonPress = () => setModalData({ isVisible: false, text: '' });

    const renderNextQuestion = () => {
        const nextQuestionId = question.data.next_question.id;

        if (question.data.next_question.id)
            navigation.push('Question', { questionId: question.data.next_question.id });
        else {
            
        }
    };

    useEffect(() => {
        (async () => {
            const _question = await QuestionService.getQuestion(route.params.questionId);
            setQuestion(_question);

            let answers = _question.data.answers;

            answers.forEach((a, i) => {
                a.id = i;
                a.selected = false;
            });

            setAnswers(_question.data.answers);
            setLoading(false);
        })();
    }, []);

    if (loading)
        return (<ActivityIndicator />);

    return (
        <>
            <Containers>
                <HeaderContainer>
                    <TipButton onPress={handleTipOnPress}>
                        <Tip source={require('../../assets/tip.png')} />
                    </TipButton>

                    <Title>{RichText.asText(question.data.title)}</Title>
                    <GoBack>X</GoBack>
                </HeaderContainer>

                <ImageContainer>
                    {question && <Image source={{ uri: question.data.image.url ?? '' }} />}
                </ImageContainer>

                <Separator />

                <AnswersContainer>{renderAnswers()}</AnswersContainer>
            </Containers>
                
            <MainButtonBackground>
                <MainButtonContainer>
                    <MainButton text='CONTINUAR' onPress={handleContinuarOnPress} />
                </MainButtonContainer>
            </MainButtonBackground>

            <InfoModal data={modalData}
                onBackButtonPress={handleModalOnBackButtonPress}
            />
        </>
    );
};

export default Question;