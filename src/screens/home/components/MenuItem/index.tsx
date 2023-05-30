import React, { useContext } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useModalBottom } from "../../../../hooks/useModal";
import { useTodo } from "../../useTodo";
import * as S from './styles'
import { ModalBottom } from "../../../../components/ModalBottom";
import { Buttom } from "../../../../components/Button";
import { TodoContext } from "../../../../contexts/List";

export const MenuItem: React.FC = () => {

    const { todos, removeTodo, newTodo, setNewTodo, addTodo } = useContext(TodoContext)

    const [isVisible, showModal, hideModal] = useModalBottom();

    function CloseModalAndAddTasks() {
        hideModal()
        addTodo()
    }

    return (
        <S.AddMenu>
            <ModalBottom isVisible={isVisible} onClose={hideModal} >
                <S.InputText
                    placeholder="Digite uma nova tarefa"
                    value={newTodo}
                    onChangeText={(text: string) => setNewTodo(text)}
                    returnKeyType="done"
                />
                <Buttom Text={'ADICIONAR'} BgColor={'#4044c9'} HandleClick={() => CloseModalAndAddTasks()} />
            </ModalBottom>
            {todos.length > 0 && (
                <S.RemoveButton onPress={removeTodo}>
                    <Icon name="plus" size={12} color="#fff" />
                    <S.AddButtonText>REMOVER SELECIONADOS</S.AddButtonText>
                </S.RemoveButton>
            )}
            <S.AddButton onPress={showModal}>
                <Icon name="plus" size={12} color="#fff" />
                <S.AddButtonText>ADICIONAR</S.AddButtonText>
            </S.AddButton>
        </S.AddMenu>
    )
}