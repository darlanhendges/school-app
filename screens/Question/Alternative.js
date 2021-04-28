import React, { useState } from 'react';
import styled from 'styled-components/native';
import { COLORS } from '../../constansts/colors';

const Alternative = styled.TouchableOpacity`
    padding: 15px 0 15px 20px;
    margin-bottom: 10px;

    background-color: ${COLORS.white};

    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.borderColor};
    border-radius: 8px;
`;

const Text = styled.Text`
    font-size: 20px;
    color: ${COLORS.birch};
`;

const _Alternative = ({ data, onPress, selected }) => {
    const handleOnPress = () => {
        onPress(data);
    };

    console.log(data.answer);

    return (
        <Alternative onPress={handleOnPress}
            borderColor={selected ? COLORS.green : COLORS.cloud}
            selected={selected}
        >
            <Text>{`${data.answer}`}</Text>
        </Alternative>
    );
};

export default React.memo(_Alternative);