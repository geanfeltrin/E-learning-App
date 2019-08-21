import React, { useRef } from 'react';

import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import Header from '~/components/Header2';
import Card from '~/components/Card';

import NotificationPNG from '../../assets/Notification.png';

export default function Notification({ navigation }) {
  const scale = useRef(new Animated.Value(0)).current;
  return (
    <Container>
      <Header title="Notificação" scale={scale} image={NotificationPNG} />
      <Content>
        <Card
          firtIconName="bell"
          firstColorIcon="#F59F00"
          text="Notificação não lida"
          rounded
          navigation={navigation}
          nav="ProfileEdit"
        />
        <Card
          firtIconName="play"
          firstColorIcon="#F59F00"
          text="Notificação não lida"
          titleSize="mediumTitle"
          rounded
        />
      </Content>
    </Container>
  );
}

Notification.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};
