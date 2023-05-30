import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import * as S from './styles'
import { ItemTodo } from '../../components/ItemTodo';
import CustomStatusBar from '../../components/StatusBar';
import { MenuProfile } from './components/MenuProfile';
import { MenuItem } from './components/MenuItem';
import { TodoContext } from '../../contexts/List';

const Home: React.FC = () => {

  const { todos, toggleSelectTodo, removeTodo } = useContext(TodoContext)

  return (
    <S.Container>
      <CustomStatusBar backgroundColor={'#4044c9'} barStyle={'default'} />
      <MenuProfile />
      <S.Content>
        <MenuItem />
        <ScrollView showsVerticalScrollIndicator={false}>
          {todos.map((todo, index) => (
            <ItemTodo key={index} item={todo} index={index} handleclick={() => toggleSelectTodo(index)} />
          ))}
        </ScrollView>
      </S.Content>
    </S.Container>
  );
};

export default Home;