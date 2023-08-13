import React from 'react';
import { Container } from './style';
import IconMI from '../Icon/IconMI';

const HeaderLeft: React.FC = () => {
  return (
    <Container style={{ paddingLeft: 20, paddingBottom: 12 }}>
      <IconMI name="menu" size={30} />
    </Container>
  )
}

export default HeaderLeft;