import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/routers';
import React, { useEffect } from 'react';
import AppHeader from '../../components/AppHeader';
import MainButton from '../../components/MainButton';
import keys from '../../constansts/keys';
import BrandColored from '../../assets/brandColored';

import {
  ScrollContainer,
  ContainerImage,
  PresentationImage,
  ContainerText,
  PresentationText,
  ContainerBody,
  Separator,
  Subtitle,
  ContainerButton,
  ContainerBrand,
} from './styles';
import { Video } from '../../components';

const StepThankyou = ({ navigation, route }) => {
  const step = route.params?.step;

  useEffect(() => {
    // async function remover() {
    //     await AsyncStorage.removeItem(keys.StepsFinished);
    // }
    // remover();
  }, []);

  return (
    <>
      <ScrollContainer>
        <AppHeader title='' disableBack={true} />

        <ContainerBrand>
          <BrandColored width={70} height={70} />
        </ContainerBrand>

        {step.presentation_image && (
          <ContainerImage>
            <PresentationImage source={{ uri: step.presentation_image }} />
          </ContainerImage>
        )}

        {step.step_completion_youtube && (
          <Video videoId={step.step_completion_youtube} />
        )}

        <Separator />

        <ContainerBody>
          <ContainerText>
            <Subtitle>Parabéns...</Subtitle>
            <PresentationText>{step.step_completion_message}</PresentationText>
          </ContainerText>
        </ContainerBody>
      </ScrollContainer>
      <ContainerButton>
        <MainButton
          text='PRÓXIMA ETAPA'
          onPress={async () => {
            let object = await AsyncStorage.getItem(keys.StepsFinished);
            let stepsFinished = [];

            if (object !== null) {
              stepsFinished = JSON.parse(object);
            }

            if (!stepsFinished.find((i) => i.id == step.id)) {
              stepsFinished.push({ id: step.id }); // push new id
              await AsyncStorage.setItem(
                keys.StepsFinished,
                JSON.stringify(stepsFinished)
              );
            }

            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{ name: 'SelectStep' }],
              })
            );
          }}
        ></MainButton>
      </ContainerButton>
    </>
  );
};

export default StepThankyou;
