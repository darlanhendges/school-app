import React, { memo, useCallback } from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../constansts/colors';

const Button = styled.TouchableOpacity`
    padding: 15px 0 15px 20px;
    margin-bottom: 10px;

    background-color: ${COLORS.white};

    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.borderColor};
    border-radius: 8px;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    color: ${COLORS.birch};
`;

const Alternative = ({ data, onPress, selected }) => {
    const handleOnPress = () => onPress(data);

    console.log('Renderizou');

    return (
        <Button onPress={handleOnPress}
            borderColor={!selected ? COLORS.cloud : COLORS.green}
        >
            <ButtonText>{`${data.answer}`}</ButtonText>
        </Button>
    );
};

export default memo(Alternative);