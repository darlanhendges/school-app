import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import AppHeader from "../../components/AppHeader";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaContainer, StepsList, Step, BodyStep, ImageApresentation, TextStep, ContainerText, ContainerImage, Separator, ContainerCheck } from './styles';
import { COLORS } from "../../constansts/colors";
import StepService from "../../services/StepService";
import { StepsContext } from "../../contexts/steps";
import { CommonActions } from "@react-navigation/routers";

const SelectStep = ({ navigation }) => {
    const { steps } = useContext(StepsContext);

    const checked = (item) => {

        var randomNumber = Math.floor(Math.random() * 100) + 1;

        if (randomNumber % 2 === 0)
            return true;
        else
            return false;
    }

    const renderItem = ({ item, index, separators }) => {
        return (
            <Step>
                <BodyStep
                    key={item.index}
                    onPress={() => navigation.navigate('StepApresentation', { step:item })}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}
                >
                    <ContainerImage>
                        <ImageApresentation
                            source={{ uri: item.featured_image }}
                        />
                    </ContainerImage>

                    {checked(item) && <ContainerCheck>
                        <Ionicons name="md-checkmark-circle" size={32} color={COLORS.green} />
                    </ContainerCheck>}


                    <ContainerText>
                        <TextStep>{item.title} </TextStep>
                    </ContainerText>
                </BodyStep>
            </Step>

        );
    }

    renderSeparator = () => (
        <Separator />
    )

    return (
        <SafeAreaContainer>
            <AppHeader
                title="Etapas"
                disableBack={true}
            />
            <StepsList
                data={steps}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}

            />
        </SafeAreaContainer>
    )
}


export default SelectStep;