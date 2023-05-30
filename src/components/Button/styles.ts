import styled from "styled-components/native";

interface PropsBtn {
    bg: string;
}

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 55px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background: ${(props: PropsBtn) => props.bg};
    border-radius: 10px;
`
export const TextButton = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: 600;
`