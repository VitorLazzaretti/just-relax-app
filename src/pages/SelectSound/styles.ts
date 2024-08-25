import { css, styled } from "styled-components/native";

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 24px;
    padding-top: 24px;
    padding-bottom: 32px;
  `}
`;

export const ImageContainer = styled.View`
  width: 100%;
  min-height: 200px;
  border-radius: 20px;
  overflow: hidden;
`;

export const MainImage = styled.ImageBackground`
  flex: 1;
`;

export const ImageInfoContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.35);
  padding: 32px;
  justify-content: space-between;
  flex: 1;
`;

export const ImageTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamilies.title};
    font-size: 24px;
    color: ${theme.colors.white};
    text-shadow: 1px 1px 4px #000;
  `}
`;

export const ImageDescription = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamilies.description};
    width: 80%;
    padding-left: 2px;
    margin: 4px 0;
    font-size: 16px;
    color: ${theme.colors.white};
    text-shadow: 1px 1px 4px #000;
  `}
`;

export const ImageButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    width: 130px;
    margin-top: 12px;
    padding: 10px 0;
    justify-content: center;
    gap: 10px;
    flex-direction: row;
    border-radius: 12px;
  `} 
`;

export const ImageButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fontFamilies.description};
    font-size: 16px;
  `};
`

export const SoundSelectContainer = styled.View`
  
`;