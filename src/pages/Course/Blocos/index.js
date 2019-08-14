import React, { useRef } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity, Animated, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Header from '~/components/Header2';
import Card from '~/components/CardsCourses';

import { Container, Content } from './styles';

export default function Blocos({ navigation }) {
  const scale = useRef(new Animated.Value(0)).current;
  return (
    <Container>
      <Header title={navigation.getParam('courseName')} scale={scale} small />

      <ScrollView
        style={{ backgroundColor: '#F2F4F7' }}
        scrollEventThrottle={20}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { y: scale },
            },
          },
        ])}
      >
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
      </ScrollView>
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
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
