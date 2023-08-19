import { styled } from "styled-components/native";

export const Container = styled.Pressable`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 99;
`;

export const UserImage = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 50px;
`;