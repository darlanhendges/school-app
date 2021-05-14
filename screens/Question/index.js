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
    TitleStep,
    ContainerTitle,
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

    const getStepCurrent = () => steps.find(s => s.id === route.params.stepId);

    const Containers = ({ children }) => {
        return (<SafeAreaContainer>{children}</SafeAreaContainer>);
    };

    const handleTipOnPress = () => {
        setModalData({ isVisible: true, text: question.tip });
    };

    const handleAnswerOnPress = answer => {
        console.log(answer);
        const _answers = answers.map(a => {
            if (a.id === answer.id)
                a.selected = !answer.selected;
            else
                a.selected = false;

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

        if (areAllAnswersCorrect) {
            renderNextQuestion();
        }
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
            const _question = getStepCurrent().questions[route.params.question];

            if (!_question.id) {
                navigation.dispatch(CommonActions.reset({
                    index: 1,
                    routes: [{
                        name: 'SelectStep'
                    }]
                }));
            }

            setQuestion(_question);

            let answers = _question.answers;
            let answersTmp = [];

            answers.map((a, i) => {
                answersTmp.push({
                    ...a,
                    id: i,
                    selected: false
                });
            });

            setAnswers(answersTmp);


        })();
    }, []);

    return (
        <>
            <Containers>
                <HeaderContainer>
                    <TipButton onPress={handleTipOnPress}>
                        <Tip source={require('../../assets/tip.png')} />
                    </TipButton>

                    <TitleStep>{getStepCurrent().title}</TitleStep>

                    <GoBack onPress={() => {
                        navigation.dispatch(CommonActions.reset({
                            index: 1,
                            routes: [{
                                name: 'SelectStep'
                            }]
                        }));
                    }} >X</GoBack>
                </HeaderContainer>
                <Separator />

                <ContainerTitle>
                    <Title>{question.title}</Title>
                </ContainerTitle>

                {question && question.image && question.image.url && (
                    <ImageContainer>
                        { <Image source={{ uri: question.image.url }} />}
                    </ImageContainer>)}

                <Separator />

                {answers && <AnswersContainer>{renderAnswers()}</AnswersContainer>}

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