import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import VideoPlayer from '~/components/VideoPlayer';

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
  const [video, setVideo] = useState('JEKfVdOM2Ak');
  const [loadVideo, setLoadVideo] = useState(true);

  function changeVideo() {
    setLoadVideo(false);
    setVideo('xjcI9U7jVkU');
    setTimeout(() => {
      setLoadVideo(true);
    }, 300);
  }
  return (
    <Container>
      {loadVideo ? (
        <VideoPlayer videoId={video} />
      ) : (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}

      <TitleContent>
        <Title>Aula 01</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
          sapien at rhoncus molestie.
        </SubTitle>
      </TitleContent>
      <ScrollView style={{ backgroundColor: '#F2F4F7' }}>
        <ContainerList>
          <TitleList>Rota de Aprendizagem</TitleList>
          <Card
            firtIconName="play-circle"
            text="Aula 01"
            time=""
            secondColorIcon="#ACB5BD"
            description=""
            onPress={changeVideo}
          />

          <Card
            firtIconName="file-text"
            text="Material Didático"
            time="DOCX"
            description=""
          />
          <Card
            firtIconName="play"
            firstColorIcon="#F03D3E"
            text="Game"
            time=""
            secondColorIcon="#ACB5BD"
            description=""
          />
          <Card firtIconName="help-circle" text="Quiz" description="" />
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
