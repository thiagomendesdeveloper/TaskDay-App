import React from "react";
import * as S from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native";
import { PropsTodo } from './types';

export const ItemTodo: React.FC<PropsTodo> = ({ item, index, handleclick }) => {
    return (
        <S.TodoItem key={index} selected={item.selected}>
            <TouchableOpacity onPress={() => handleclick()}>
                <S.Check>
                    {item.selected && (
                        <Icon name="check" size={20} color="#fff" />
                    )}
                </S.Check>
            </TouchableOpacity>
            <S.OptionItem selected={item.selected}>{item.text}</S.OptionItem>
        </S.TodoItem>
    )
}