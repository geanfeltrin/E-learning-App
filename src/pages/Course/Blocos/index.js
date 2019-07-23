import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Card from '~/components/CardsCourses';

import { Container, Content } from './styles';

export default function Blocos({ navigation }) {
  return (
    <Container>
      <Header
        title="Técnico em Imobilizações Ortopédicas"
        height="max"
        titleSize="large"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies sapien at rhoncus molestie. Curabitur commodo magna vel volutpat viverra. Donec ac velit id nulla hendrerit facilisis. Proin sit amet elit vitae ex fermentum consectetur. Cras viverra velit ipsum, ut imperdiet est gravida sed."
      />
      <Content>
        <Card
          title="Bloco 01"
          textColor="black"
          subTitle="Nome do Bloco"
          nameIcon="check"
          colorIcon="#37B24D"
          border="success"
          onPress={() => {
            navigation.navigate('Modules');
          }}
        />
        <Card
          title="Bloco 02"
          textColor="black"
          subTitle="Nome do Bloco"
          nameIcon="lock"
          colorIcon="#ACB5BD"
          border="none"
          onPress={() => {
            navigation.navigate('Modules');
          }}
        />
      </Content>
    </Container>
  );
}

Blocos.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Main');
      }}
    >
      <Icon name="arrow-left" color="#fff" size={24} />
    </TouchableOpacity>
  ),
});

Blocos.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
