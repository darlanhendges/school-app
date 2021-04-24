import React, { useEffect } from "react";
import { View } from "react-native";
import AppHeader from "../../components/AppHeader";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaContainer, StepsList, Step, BodyStep, ImageApresentation, TextStep, ContainerText, ContainerImage, Separator, ContainerCheck } from './styles';
import { COLORS } from "../../constansts/colors";
import StepService from "../../services/StepService";



const SelectStep = ({ navigation }) => {
    const [dataStep, setDataStep] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    async function getSteps() {
        setDataStep([]);
        const steps = await StepService.getSteps();
        let stepsBuilt = [];

        steps.map((item) => {
            const { id, data } = item;
            const title = data.titulo[0].text;

            try {
                const image = data.imagem_destaque.url;

                let itemToPush = {
                    id,
                    title,
                    image,
                    data
                };
                console.log(itemToPush);
                stepsBuilt.push(itemToPush);
            }
            catch (e) {
                alert('Não foi possível montar a etapa: ' + title);
            }
        });

        setDataStep(stepsBuilt);
    }

    useEffect(() => {
        getSteps();
    }, [])

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
                    onPress={() => {
                        console.log('cliquei')
                    }}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}
                >
                    <ContainerImage>
                        <ImageApresentation
                            source={{ uri: item.image }}
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
                data={dataStep}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}
                onRefresh={()=>{
                    getSteps();
                }}
                refreshing={loading}
            />
        </SafeAreaContainer>
    )
}


export default SelectStep;