import React, { useEffect } from "react";
import { View } from "react-native";
import AppHeader from "../../components/AppHeader";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaContainer, StepsList, Step, BodyStep, ImageApresentation, TextStep, ContainerText, ContainerImage, Separator, ContainerCheck } from './styles';
import { COLORS } from "../../constansts/colors";



const SelectStep = ({ navigation }) => {


    const STEPS = [
        {
            id: '1',
            imagem: "https://i.picsum.photos/id/474/440/660.jpg?hmac=5PQBc6Ja2YeT_up5sOAr-R0_JMX39GnMz0gYFcbfsFg",
            titulo: 'Etapa x',
            subTitulo: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun.'
        },
        {
            id: '12',
            imagem: "https://i.picsum.photos/id/474/440/660.jpg?hmac=5PQBc6Ja2YeT_up5sOAr-R0_JMX39GnMz0gYFcbfsFg",
            titulo: 'Etapa x',
            subTitulo: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun.'
        },
        {
            id: '13',
            imagem: "https://i.picsum.photos/id/474/440/660.jpg?hmac=5PQBc6Ja2YeT_up5sOAr-R0_JMX39GnMz0gYFcbfsFg",
            titulo: 'Etapa x',
            subTitulo: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun.'
        },
        {
            id: '14',
            imagem: "https://i.picsum.photos/id/474/440/660.jpg?hmac=5PQBc6Ja2YeT_up5sOAr-R0_JMX39GnMz0gYFcbfsFg",
            titulo: 'Etapa x',
            subTitulo: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun.'
        },
        {
            id: '15',
            imagem: "https://i.picsum.photos/id/474/440/660.jpg?hmac=5PQBc6Ja2YeT_up5sOAr-R0_JMX39GnMz0gYFcbfsFg",
            titulo: 'Etapa x',
            subTitulo: 'lorem ipsun lorem ipsun lorem ipsun lorem ipsun.'
        },
    ];

    const checked = (item) => {
        
        var randomNumber = Math.floor(Math.random() * 100) + 1 ;

        
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
                            source={{ uri: item.imagem }}
                        />
                    </ContainerImage>

                    {checked(item) && <ContainerCheck>
                        <Ionicons name="md-checkmark-circle" size={32} color={COLORS.green} />
                    </ContainerCheck>}


                    <ContainerText>
                        <TextStep>{item.titulo} que vamos apresentar aqui? </TextStep>
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
                data={[...STEPS, ...STEPS]}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}

            />
        </SafeAreaContainer>
    )
}


export default SelectStep;