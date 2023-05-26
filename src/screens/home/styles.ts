import styled from 'styled-components/native';

export const Header = styled.View`
  background: #4044c9;
  padding: 20px;
  height: 150px;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const InputText = styled.TextInput`
  border: 1px solid #000;
  border-radius: 10px;
`

export const Content = styled.View`
  padding: 20px;
  padding-bottom: 50px;
  flex: 1;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
  font-family: Roboto;
  font-weight: 700;
`;

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