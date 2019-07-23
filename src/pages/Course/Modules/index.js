import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import PropTypes from 'prop-types';
import Header from '~/components/Header';

import CardCollapsed from '~/components/CardCollapsed';

import Card from '~/components/Card';

import { Container, Content } from './styles';

export default function Modules({ navigation }) {
  return (
    <Container>
      <Header
        title="Bloco 1"
        description="Saúde da mulher"
        height="medium"
        titleSize="extraLarge"
      />
      <ScrollView contentContainerStyle={{ flex: 1, paddingVertical: 8 }}>
        <Content>
          <CardCollapsed title="Module 01" status="em andamento">
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
          </CardCollapsed>
          <CardCollapsed title="Module 01" status="em andamento">
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
            <Card
              firtIconName="play-circle"
              onPress={() => {
                navigation.navigate('Lessons');
              }}
            />
          </CardCollapsed>
        </Content>
      </ScrollView>
    </Container>
  );
}

Modules.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Blocos');
      }}
    >
      <Icon name="arrow-left" color="#fff" size={24} />
    </TouchableOpacity>
  ),
});

Modules.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
