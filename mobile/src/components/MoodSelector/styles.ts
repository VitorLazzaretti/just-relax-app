import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  }})`
  margin: 16px 0px;
  flex-direction: row;
`;