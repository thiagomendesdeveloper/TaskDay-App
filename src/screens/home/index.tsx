import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import * as S from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTodo } from './useTodo';
import { ItemTodo } from '../../components/ItemTodo';
import { ModalBottom } from '../../components/ModalBottom';
import { useModalBottom } from '../../hooks/useModal'

const Home: React.FC = () => {

  const {
    toggleSelectTodo,
    selectedTodos,
    removeTodo,
    addTodo,
    todos,
    setNewTodo,
    newTodo
  } = useTodo();

  const [isVisible, showModal, hideModal] = useModalBottom();

  return (
    <S.Container>
      <S.Header>
        <S.Title>Lista de tarefas</S.Title>
      </S.Header>
      <S.Content>
        <ModalBottom isVisible={isVisible} onClose={hideModal} >
          <S.InputText
            placeholder="Digite uma nova tarefa"
            value={newTodo}
            onChangeText={(text: string) => setNewTodo(text)}
            onSubmitEditing={addTodo}
            returnKeyType="done"
          />
        </ModalBottom>
        <S.AddMenu>
          {selectedTodos.length > 0 && (
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
        <ScrollView>
          {todos.map((todo, index) => (
            <ItemTodo key={index} item={todo} index={index} handleclick={() => toggleSelectTodo(index)} />
          ))}
        </ScrollView>
      </S.Content>
    </S.Container>
  );
};

export default Home;