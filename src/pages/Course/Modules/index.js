import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import PropTypes from 'prop-types';
import Header from '~/components/Header2';

import api from '~/services/api';
import ModuleList from '~/components/Lists/ModuleList';

import { Container, Content, Title, SectionList, Wrapper } from './styles';

export default function Modules({ navigation }) {
  const [data, setData] = useState([]);
  const [numberModule, setNumberModule] = useState();
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
    setNumberModule(navigation.getParam('sequence'));
  }, [navigation]);

  const d = [
    { id: '1a', title: 'Aula 01' },
    { id: '2b', title: 'Aula 02' },
    { id: '3C', title: 'Aula 03' },
    { id: '4d', title: 'Aula 04' },
    { id: '5f', title: 'Aula 05' },
  ];
  return (
    <Container>
      <Header
        title={
          numberModule <= 9
            ? `Módulo 0${numberModule}`
            : `Módulo ${numberModule}`
        }
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
          <Title>{`${navigation.getParam('moduleName')}`}</Title>
          {!loading && (
            <Wrapper>
              <SectionList
                data={d}
                extractorKey={item => String(item.id)}
                renderItem={({ item }) => (
                  <ModuleList data={item} navigation={navigation} />
                )}
              />
            </Wrapper>
          )}
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
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
