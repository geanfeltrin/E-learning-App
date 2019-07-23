import React from 'react';

import { Platform } from 'react-native';
import ImageForgottenPassword from '~/assets/ComponetsSvg/forgottenPassword.js';

import {
  Container,
  Content,
  Title,
  InputText,
  SubmitButton,
  TextButton,
} from './styles';

const ForgottenPassword = () => (
  <Container behavior={Platform.OS === 'ios' ? 'padding' : 'position'} enabled>
    <Content>
      <ImageForgottenPassword />

      <Title>Digite seu e-mail para redefinir sua senha:</Title>
      <InputText
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        placeholder="Digite seu e-mail"
        returnKeyType="next"
      />
      <SubmitButton onPress={() => {}}>
        <TextButton>Enviar</TextButton>
      </SubmitButton>
    </Content>
  </Container>
);

export default ForgottenPassword;
