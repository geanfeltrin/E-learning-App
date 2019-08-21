import React, { useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { signFailure } from '~/store/Modules/auth/actions';

import Header from '~/components/Header2';

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
  const scale = useRef(new Animated.Value(0)).current;
  const profile = useSelector(state => state.user.profile.session);
  function logout() {
    dispatch(signFailure());
  }

  function correctName(value) {
    const splitName = value.name.split(' ');

    const concatName = `${splitName[0]} ${splitName[splitName.length - 1]}`;

    return concatName
      .toLowerCase()
      .replace(/(^|\s)[a-z]/g, c => c.toUpperCase());
  }

  const name = useMemo(() => correctName(profile), [profile]);
  return (
    <Container>
      <Header scale={scale} />
      <AvatarContainer>
        <Avatar
          source={{
            uri: `https://robohash.org/${name}.png?set=set2&size=200x200`,
          }}
          resized="cover"
        />
        <AvatarText numberOfLines={1}>{name}</AvatarText>
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
