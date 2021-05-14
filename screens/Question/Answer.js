import React, { memo } from 'react';
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

const Answer = ({ data, onPress }) => {
    const handleOnPress = () => {
        onPress(data);
    }

    return (
        <Button onPress={handleOnPress}
            borderColor={!data.selected ? COLORS.cloud : COLORS.green}
        >
            <ButtonText>{`${data.answer}`}</ButtonText>
        </Button>
    );
};

const propsAreEqual = (prevProps, nextProps) => prevProps.selected === nextProps.selected;

export default memo(Answer, propsAreEqual);