import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/routers';
import React, { useContext } from 'react';
import { useState } from 'react';

import { Video, ActivityIndicator } from '../../components';
import AppHeader from '../../components/AppHeader';
import MainButton from '../../components/MainButton';
import { StepsContext } from '../../contexts/steps';

import {
  ScrollContainer,
  ContainerBrand,
  ContainerImage,
  PresentationImage,
  ContainerText,
  Presentation,
  ContainerBody,
  Separator,
  Subtitle,
  ButtonStart,
  ContainerButton,
} from './styles';

const StepApresentation = ({ navigation, route }) => {
  const step = route.params?.step;
  const { getQuestionByStep, steps } = useContext(StepsContext);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ScrollContainer>
        <AppHeader
          title={step.title}
          disableBack={false}
          onPressGoBack={() => {
            navigation.dispatch(CommonActions.goBack());
          }}
        />

        {step.presentation_image && (
          <ContainerImage>
            <PresentationImage source={{ uri: step.presentation_image }} />
          </ContainerImage>
        )}

        {step.presentation_youtube && (
          <Video videoId={step.presentation_youtube} />
        )}

        <Separator />

        <ContainerBody>
          <ContainerText>
            {step.subtitle && <Subtitle>{step.subtitle}</Subtitle>}
            <Presentation>{step.presentation_text}</Presentation>
          </ContainerText>
        </ContainerBody>
      </ScrollContainer>
      <ContainerButton>
        {!loading && <MainButton
          text='INICIAR'
          onPress={async () => {
            setLoading(true);
            const questions = await getQuestionByStep(step.id);
            setLoading(false);

            if (questions.length == 0) {
              alert('Esta etapa ainda não possui questões cadastradas.');
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'SelectStep'
                 })
              );
            }
            else {
              
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'Question',
                  params: {
                    stepId: step.id,
                    question: 0
                  },
                })
              );
            }
          }}
        ></MainButton>}
        {loading && <ActivityIndicator />}
      </ContainerButton>
    </>
  );
};

export default StepApresentation;
