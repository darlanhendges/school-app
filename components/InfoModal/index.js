import React from 'react';
import Modal from 'react-native-modal';
import MainButton from '../MainButton';

import { ModalContainer, Text, MainContainer, ContainerText } from './styles';

const InfoModal = ({ data, onBackButtonPress }) => {
  return (
    <Modal
      isVisible={data.isVisible}
      animationInTiming={500}
      animationIn='fadeIn'
      animationOutTiming={500}
      onBackButtonPress={onBackButtonPress}
    >
      <ModalContainer>
        <ContainerText>
          <Text>{data.text}</Text>
        </ContainerText>
        <MainContainer>
          <MainButton text='Fechar' onPress={onBackButtonPress} />
        </MainContainer>
      </ModalContainer>
    </Modal>
  );
};

export default InfoModal;
