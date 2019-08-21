import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import ImageForgottenPassword from '~/assets/ComponetsSvg/forgottenPassword';
import {
  Container,
  Content,
  Title,
  InputText,
  SubmitButton,
  TextButton,
} from './styles';

export default function ForgottenPassword() {
  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      enabled
    >
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
}

ForgottenPassword.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
      onPress={() => {
        navigation.navigate('SignIn');
      }}
    >
      <Icon
        name="arrow-left"
        color="black"
        size={24}
        style={{ marginLeft: 16 }}
      />
    </TouchableOpacity>
  ),
  title: 'Recuperar senha',
  headerStyle: {
    backgroundColor: '#fff',
    height: 40,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
  },
  headerTintColor: '#212429',
  headerTitleStyle: {
    fontFamily: 'Open Sans SemiBold',
    fontSize: 16,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    top: 5,
  },
});
