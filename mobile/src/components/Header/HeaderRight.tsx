import React from 'react';
import { Container, UserImage } from './style';

const HeaderRight: React.FC = () => {
  return (
    <Container style={{ paddingRight: 20, paddingBottom: 12 }}>
      <UserImage source={require("../../assets/placeholder.png")} />
    </Container>
  )
}

export default HeaderRight;