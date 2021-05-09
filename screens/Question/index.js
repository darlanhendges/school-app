import React, { useContext, useEffect, useState } from 'react';
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
import { StepsContext } from '../../contexts/steps';
import { CommonActions } from '@react-navigation/routers';

const Question = ({ navigation, route }) => {
    const [question, setQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const [modalData, setModalData] = useState({});
    const { steps } = useContext(StepsContext);


    const Containers = ({ children }) => {
        return (<SafeAreaContainer>{children}</SafeAreaContainer>);
    };

    const handleTipOnPress = () => {
        setModalData({ isVisible: true, text: question.tip });
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
            setModalData({ isVisible: true, text: question.error_message });
    };

    const handleModalOnBackButtonPress = () => setModalData({ isVisible: false, text: '' });

    const renderNextQuestion = () => {
        const step = steps.find(s => s.id === route.params.stepId);
        const questions = step.questions;
        const questionIndexCurrent = route.params.question;

        if ((questionIndexCurrent + 1) < questions.length)
            navigation.push('Question', { stepId: route.params.stepId, question: (questionIndexCurrent + 1) });
        else {
            navigation.dispatch(CommonActions.reset({
                index: 1,
                routes: [{
                    name: 'StepThankyou', params: {
                        step
                    }
                }]
            }));
        }

    };

    useEffect(() => {
        (async () => {
            const _question = steps.find(s => s.id === route.params.stepId).questions[route.params.question];
            setQuestion(_question);

            console.log(_question);

            let answers = _question.answers;

            answers.map((a, i) => {
                return {
                    ...a,
                    id: i,
                    selected: false
                }
            });

            setAnswers(answers);

        })();
    }, []);

    return (
        <>
            <Containers>
                <HeaderContainer>
                    <TipButton onPress={handleTipOnPress}>
                        <Tip source={require('../../assets/tip.png')} />
                    </TipButton>

                    <Title>{question.title}</Title>
                    <GoBack>X</GoBack>
                </HeaderContainer>

                <ImageContainer>
                    {question && question.image && <Image source={{ uri: question.image.url }} />}
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