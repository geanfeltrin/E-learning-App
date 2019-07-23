import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Avatar,
  AvatarContainer,
  AvatarText,
  IconContent,
  AreaClick,
  Content,
  Title,
  Label,
  Input,
  ButtonSave,
  ButtonText,
  Division,
} from './styles';
import Header from '~/components/Header';
import avatar from '~/assets/Avatar.png';

export default function ProfileEdit() {
  return (
    <ScrollView contentContainerStyle={{ marginVertical: 50 }}>
      <Container>
        <Header
          height="medium"
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        <AvatarContainer>
          <AreaClick>
            <Avatar source={avatar} resized="cover" />
            <IconContent>
              <Icon name="camera" color="white" size={20} />
            </IconContent>
          </AreaClick>
          <AvatarText>José da Silva</AvatarText>
        </AvatarContainer>

        <Content>
          <Title>Alterar Senha</Title>
          <Label>Senha atual</Label>
          <Input />
          <Label>Nova senha</Label>
          <Input />
          <Division />
          <Title>Alterar Dados</Title>
          <Label>Telefone 1</Label>
          <Input />
          <Label>Telefone 2</Label>
          <Input />
          <Title>Alterar Endereço</Title>
          <Label>Cep</Label>
          <Input />
          <Label>Estado</Label>
          <Input />
          <Label>Cidade</Label>
          <Input />
          <Label>Bairro</Label>
          <Input />
          <Label>Endereço</Label>
          <Input />
          <Division />
          <ButtonSave>
            <ButtonText>Salvar Alteração</ButtonText>
          </ButtonSave>
        </Content>
      </Container>
    </ScrollView>
  );
}

ProfileEdit.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Profile');
      }}
    >
      <Icon name="arrow-left" color="black" size={24} />
    </TouchableOpacity>
  ),
  title: 'Editar Perfil',
  headerStyle: {
    backgroundColor: '#fff',
    height: 40,
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
