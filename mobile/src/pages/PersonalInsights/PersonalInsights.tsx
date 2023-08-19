import {
  StyleSheet,
} from 'react-native';

import React from 'react'
import { Description } from '../../components/SideMenu/styles';
import { Container } from '../SignIn/styles';
import { ComingSoonImage } from './styles';
import MainLayout from '../../layout/MainLayout';

const PersonalInsights = () => {
  return (
    <MainLayout>
      <Container style={styles.container}>
        <ComingSoonImage source={require('../../assets/home/card-insights.png')} />
        <Description style={{ fontSize: 24 }}> COMING SOON ... </Description>
      </Container>
    </MainLayout>
  )
}

export default PersonalInsights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
});