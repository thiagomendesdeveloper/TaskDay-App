import React from 'react';
import { StatusBar } from 'react-native';
import { StatusBarProps } from './types';
import * as S from './styles';


const CustomStatusBar: React.FC<StatusBarProps> = ({
    backgroundColor,
    barStyle,
}) => {
    return (
        <S.StatusBarContainer backgroundColor={backgroundColor}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle={barStyle}
            />
        </S.StatusBarContainer>
    );
};

export default CustomStatusBar;