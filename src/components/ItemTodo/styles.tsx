import styled from 'styled-components/native';

interface PropItem {
  selected: boolean;
}

export const TodoItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  background: ${(props: PropItem) => props.selected ? "#4044c9" : "#f2f2f2"};
`;

export const OptionItem = styled.Text`
  color: ${(props: PropItem) => props.selected ? "#fff" : "#454545"};
`

export const TodoText = styled.Text`
  flex: 1;
  font-size: 18px;
`;

export const TodoButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const TodoButtonText = styled.Text`
  color: red;
`;

export const Check = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid #454545;
  margin-right: 10px;
`
