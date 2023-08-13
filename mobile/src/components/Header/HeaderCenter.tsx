import React from 'react';
import { Container } from './style';
import Logo from '../Logo/Logo';

const HeaderCenter: React.FC = () => {
  return (
    <Container style={{ paddingBottom: 10 }}>
      <Logo />
    </Container>
  )
}

export default HeaderCenter;