import React, { useEffect, useContext, useState, useRef } from "react";
import { ActivityIndicator, View } from "react-native";
import AppHeader from "../../components/AppHeader";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaContainer, StepsList, Step, BodyStep, ImageApresentation, TextStep, ContainerText, ContainerImage, Separator, ContainerCheck, ActivityIndicatorImage } from './styles';
import { COLORS } from "../../constansts/colors";
import StepService from "../../services/StepService";
import { StepsContext } from "../../contexts/steps";
import { CommonActions } from "@react-navigation/routers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import keys from "../../constansts/keys";
import { ImageLoader } from '../../components';

const SelectStep = ({ navigation }) => {
    const { steps } = useContext(StepsContext);
    const [stepsFinished, SetStepsFinished] = useState([]);
    const [loading, setLoading] = useState(false);


    const mountedRef = useRef(true)

    useEffect(() => {

        async function getStepsFinished() {
            const object = await AsyncStorage.getItem(keys.StepsFinished);

            if (object !== null)
                SetStepsFinished(JSON.parse(object));
        }

        getStepsFinished();

        return () => {
            mountedRef.current = false;   // clean up function
        };
    }, [])

    const checked = (item) => {

        if (stepsFinished.find(i => i.id === item.id))
            return true;
        else
            return false;
    }

    const renderItem = ({ item, index, separators }) => {
        return (
            <Step>
                <BodyStep
                    key={item.index}
                    onPress={() => navigation.navigate('StepApresentation', { step: item })}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}
                >
                    <ContainerImage>

                        <ImageApresentation
                            source={{ uri: item.featured_image }}
                            onLoad={() => setLoading(true)}
                            onLoadEnd={() => setTimeout(()=>{setLoading(true)}, 5000)}
                        />

                        {loading && <ActivityIndicatorImage/>}

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