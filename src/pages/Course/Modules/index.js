import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import PropTypes from 'prop-types';
import Header from '~/components/Header2';

import CardCollapsed from '~/components/CardCollapsed';
import api from '~/services/api';

import Card from '~/components/Card';

import { Container, Content } from './styles';

export default function Modules({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function loadBlocks(hash, id) {
      const response = await api.get(
        `/ava/course/subjectLessons?enroll=${hash}&subjectId=${id}`
      );

      setData([response.data.content.items]);
      setLoading(false);
    }
    loadBlocks(navigation.getParam('hash'), navigation.getParam('id'));
  }, [navigation]);
  return (
    <Container>
      <Header
        title={`Módulo ${navigation.getParam('sequence')}`}
        scale={scale}
      />

      <ScrollView
        style={{
          backgroundColor: '#F2F4F7',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
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
