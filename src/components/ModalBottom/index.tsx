import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { ModalProps } from './types';
import * as S from './styles';

export const ModalBottom: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <S.Overlay>
                <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={onClose}
                    activeOpacity={1}
                />
                <S.ModalContent>
                    {children}
                </S.ModalContent>
            </S.Overlay>
        </Modal>
    );
};