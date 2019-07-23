import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { Container, Content } from './styles';
import Header from '~/components/Header';

import CardsCourses from '~/components/CardsCourses';

export default function Main({ navigation }) {
  return (
    <ScrollView>
      <Container>
        <Header title="Meus Cursos" titleSize="extraLarge" />

        <Content>
          <CardsCourses
            title="teste"
            subTitle="teste22"
            nameIcon="arrow-right-circle"
            colorIcon="#0B5AA3"
            border="primary"
            textColor="primary"
            onPress={() => navigation.navigate('Blocos')}
          />

          <CardsCourses
            title="Técnico em imobilizações ortopédicas"
            subTitle="70% concluído"
            nameIcon="arrow-right-circle"
            colorIcon="#0B5AA3"
            type="image"
            onPress={() => navigation.navigate('Blocos')}
          />
          <CardsCourses
            title="Técnico em imobilizações ortopédicas"
            subTitle="70% concluído"
            nameIcon="arrow-right-circle"
            colorIcon="#0B5AA3"
            type="image"
            onPress={() => {
              navigation.navigate('Blocos');
            }}
          />
        </Content>
      </Container>
    </ScrollView>
  );
}

Main.navigationOptions = {
  header: null,
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
