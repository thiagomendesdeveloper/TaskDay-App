import styled from "styled-components/native";
import { StatusBar, View } from 'react-native';
import { StatusBarProps } from "./types";

export const StatusBarContainer = styled.View`
  height: ${StatusBar.currentHeight}px;
  background-color: ${({ backgroundColor }: StatusBarProps) => backgroundColor};
`;
