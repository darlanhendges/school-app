import React, { } from 'react';
import { BackButton, Container, HeaderContainer, TitleContainer, TitleHeader } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constansts/colors';



const AppHeader = ({ title, disableBack, onPressGoBack }) => {
    const hitSlop = { bottom: 15, left: 15, right: 15, top: 15 };

    const navigation = useNavigation();



    return (
        <Container>
            <HeaderContainer>

                {!disableBack && (
                    <BackButton
                        hitSlop={hitSlop}
                        onPress={onPressGoBack || navigation.pop}
                    >
                        <Ionicons
                            name="ios-chevron-back"
                            size={26}
                            color={COLORS.black} />

                    </BackButton>
                )}

                <TitleContainer>
                    <TitleHeader>
                        {title}
                    </TitleHeader>
                </TitleContainer>

            </HeaderContainer>

        </Container>
    )
}

export default AppHeader;