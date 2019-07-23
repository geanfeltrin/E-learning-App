import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Platform, ActivityIndicator } from 'react-native';
import { signInRequest } from '~/store/Modules/auth/actions';

import LogoSvg from '~/assets/ComponetsSvg/LogoSvg';

import {
  Container,
  Content,
  ImageLogo,
  Title,
  Form,
  InputText,
  ForgottenPassword,
  ForgotText,
  SubmitButton,
  TextButton,
  ContentText,
  AccountText,
  AccountButton,
  AccountButtonTxt,
} from './styles';

export default function SignIn() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const passwordInput = useRef('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(username, password));
  }

  return (
    <Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      enabled
    >
      <Content>
        <ImageLogo>
          <LogoSvg />
        </ImageLogo>

        <Title>Faça Seu login</Title>
        <Form>
          <InputText
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            placeholder="Seu AR ou e-mail"
            value={username}
            onChangeText={setUsername}
            returnKeyType="next"
            onSubmitEditing={() => passwordInput.current.focus()}
          />
          <InputText
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            placeholder="Digite sua Senha"
            value={password}
            onChangeText={setPassword}
            returnKeyType="send"
            ref={passwordInput}
            onSubmitEditing={() => handleSubmit(username, password)}
          />
          <ForgottenPassword onPress={() => {}}>
            <ForgotText>ESQUECI MINHA SENHA</ForgotText>
          </ForgottenPassword>

          <SubmitButton onPress={handleSubmit}>
            {loading ? <ActivityIndicator /> : <TextButton>Entrar</TextButton>}
          </SubmitButton>

          <ContentText>
            <AccountText>Não Tem Conta?</AccountText>

            <AccountButton onPress={() => {}}>
              <AccountButtonTxt> CLIQUE AQUI!</AccountButtonTxt>
            </AccountButton>
          </ContentText>
        </Form>
      </Content>
    </Container>
  );
}
