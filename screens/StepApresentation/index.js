import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/routers';
import React, { } from 'react';
import { Text, Image } from 'react-native';
import Logo from '../../assets/logo';
import AppHeader from '../../components/AppHeader';
import MainButton from '../../components/MainButton';

import {
    ScrollContainer,
    ContainerBrand,
    ContainerImage,
    PresentationImage,
    ContainerText,
    PresentationText,
    ContainerBody,
    Separator,
    Subtitle,
    ButtonStart,
    ContainerButton
} from './styles';

const StepApresentation = ({ navigation, route }) => {
    const step = route.params?.step;

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


                {step.presentation_image &&
                    <ContainerImage>
                        <PresentationImage
                            source={{ uri: step.presentation_image }}
                        />
                    </ContainerImage>}

                <Separator />

                <ContainerBody>
                    <ContainerText>
                        <Subtitle>
                            {step.subtitle}
                        </Subtitle>
                        <PresentationText>
                            {step.presentation_text}
                        </PresentationText>
                    </ContainerText>
                </ContainerBody>
            </ScrollContainer>
            <ContainerButton>
                <MainButton
                    text="INICIAR"
                    onPress={() => {
                        navigation.dispatch(CommonActions.navigate({
                            name: 'StepThankyou',
                            params: {
                                step
                            }
                        }));
                    }}
                >
                </MainButton>
            </ContainerButton>
        </>
    )
}

export default StepApresentation;
