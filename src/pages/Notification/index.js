import React from 'react';

import { Container, Content } from './styles';
import Header from '~/components/Header';
import Card from '~/components/Card';

export default function Notification({ navigation }) {
  return (
    <Container>
      <Header height="small" title="Notificação" titleSize="extraLarge" />
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
