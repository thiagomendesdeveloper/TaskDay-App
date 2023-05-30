import styled from 'styled-components/native';

export const AddMenu = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 15px;
  gap: 10px;
`

export const AddButton = styled.TouchableOpacity`
  background: #4044c9;
  width: 110px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const RemoveButton = styled.TouchableOpacity`
  background: #e70303;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
export const AddButtonText = styled.Text`
  margin-left: 5px;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`

export const InputText = styled.TextInput`
  border: 1px solid #000;
  border-radius: 10px;
`