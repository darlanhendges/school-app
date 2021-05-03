import React from 'react';
import { View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

export default ({ data, onBackButtonPress }) => {
    return (
        <Modal isVisible={data.isVisible}
            animationInTiming={100}
            animationOutTiming={100}
            onBackButtonPress={onBackButtonPress}
        >
            <View style={styles.view}>
                <Text style={styles.text}>{data.text}</Text>
                <Button title="Fechar" onPress={onBackButtonPress} />
            </View>
        </Modal>
    );
};