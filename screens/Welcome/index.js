import { CommonActions } from '@react-navigation/routers';
import React, { useContext, useEffect,useRef } from 'react';
import { NameContext } from '../../contexts/name';
import { StepsContext } from '../../contexts/steps';


import {
    KeyboardView,
    Container,
    Brand,
    Title,
} from './styles';

const Welcome = ({ navigation }) => {
    const mountedRef = useRef(true)
    const { name } = useContext(NameContext);
    const { steps, getSteps } = useContext(StepsContext);

    useEffect(() => {
        getSteps();

        return () => {
            mountedRef.current = false;   // clean up function
          };
    }, [])

    useEffect(() => {
        
        if (steps && steps.length > 0) {
            navigation.dispatch(CommonActions.reset({
                index: 1,
                routes: [{ name: 'SelectStep' }]
            }));
        }

    }, [steps])

    return (
        <KeyboardView>
            <Container>
                <Brand source={require('../../assets/brand.png')} resizeMode="center" />
                <Title>Olá! Seja bem-vindo, {name}</Title>



                <Title>Estamos carregando...</Title>
            </Container>
        </KeyboardView>
    );
};

export default Welcome;