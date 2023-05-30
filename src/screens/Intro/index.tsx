import React from "react";
import { SafeAreaView, Image, View } from "react-native";
import * as S from "./styles";
import texts from '../../ultils/intro-text.json'
import { Buttom } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export const Intro: React.FC = () => {

    const Navitation = useNavigation<any>();

    function HandleClickButton() {
        Navitation.navigate('Home');
    }

    return (
        <S.Container>
            <Image source={require('../../assets/images/Image-intro-app.png')} />
            <S.Content>
                <View>
                    <S.Title>{texts.Title}</S.Title>
                    <S.Description>{texts.text}</S.Description>
                </View>
                <Buttom BgColor={"#4044c9"} Text={"ACESSAR LISTA"} HandleClick={HandleClickButton} />
            </S.Content>
        </S.Container>
    )
}