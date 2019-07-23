import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import PropTypes from 'prop-types';

import Img from '~/assets/Rectangle.png';

import {
  Container,
  TitleContent,
  Title,
  SubTitle,
  ContainerList,
  TitleList,
} from './styles';

import Card from '~/components/Card';

export default function Lessons() {
  return (
    <Container>
      <Image source={Img} resized="cover" />
      <TitleContent>
        <Title>Aula 01</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
          sapien at rhoncus molestie.
        </SubTitle>
      </TitleContent>
      <ScrollView>
        <ContainerList>
          <TitleList>Rota de Aprendizagem</TitleList>

          <Card iconName="file-text" lesson="Material Didático" time="DOCX" />
          <Card
            firtIconName="play"
            firstColorIcon="#F03D3E"
            lesson="Game"
            time=""
            secondColorIcon="#ACB5BD"
          />
          <Card />
        </ContainerList>
      </ScrollView>
    </Container>
  );
}
Lessons.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Modules');
      }}
    >
      <Icon name="arrow-left" color="#fff" size={24} />
    </TouchableOpacity>
  ),
});

Lessons.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
