import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { signFailure } from '~/store/Modules/auth/actions';
import Header from '~/components/Header';

import avatar from '~/assets/Avatar.png';
import Card from '~/components/Card';
import {
  Container,
  Content,
  Avatar,
  AvatarContainer,
  AvatarText,
  ButtonContainer,
  LeaveButton,
  ButtonText,
} from './styles';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  function logout() {
    dispatch(signFailure());
  }
  return (
    <Container>
      <Header height="medium" />
      <AvatarContainer>
        <Avatar source={avatar} resized="cover" />
        <AvatarText>José da Silva</AvatarText>
      </AvatarContainer>
      <Content>
        <Card
          text="Editar Perfil"
          textSize="medium"
          onPress={() => navigation.navigate('ProfileEdit')}
        />
        <ButtonContainer>
          <LeaveButton onPress={logout}>
            <ButtonText>Sair</ButtonText>
          </LeaveButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

Profile.navigationOptions = {
  header: null,
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
