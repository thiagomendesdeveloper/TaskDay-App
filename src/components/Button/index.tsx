import React from "react";
import * as S from './styles'
import { PorpsButon } from "./types";

export const Buttom: React.FC<PorpsButon> = ({ BgColor, Text, HandleClick }) => {
    return (
        <S.Button bg={BgColor} onPress={() => HandleClick()}>
            <S.TextButton>{Text}</S.TextButton>
        </S.Button>
    )
}