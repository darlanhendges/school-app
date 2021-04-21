
import React from 'react';
import PropTypes from 'prop-types';
import { Container, ContainerText } from './styles';

export default function MainButton({ onPress, text }) {
    return (
        <Container
            onPress={onPress}
        >
            <ContainerText>
                {text}
            </ContainerText>
        </Container>
    );
}


MainButton.defaultProps = {
    onPress: ()=>{},
    text: {},
  };
  
  MainButton.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired
  };
  