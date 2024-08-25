import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const MoodImageContainer = styled.Pressable`
  height: 64px;
  width: 64px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const MoodName = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamilies.description};
  color: ${({ theme }) => theme.colors.tertiary_text};
`;