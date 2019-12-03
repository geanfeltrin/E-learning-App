import React, { useRef, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  TouchableOpacity,
  Animated,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import api from '~/services/api';

import Header from '~/components/Header2';
import CardBlock from '~/components/Cards/BlockCard';

import { Container, List } from './styles';

export default function Blocos({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function loadBlocks(enrollmentHash) {
      try {
        const response = await api.get(
          `/ava/course/block?enroll=${enrollmentHash}&lessons=true`
        );
        setData([response.data.content.items]);
        setLoading(false);
      } catch (error) {
        Alert.alert(
          'Falha ao carregar as disciplinas',
          'Houve um erro no carregamento, verifique sua internet'
        );
      }
    }
    loadBlocks(navigation.getParam('enrollmentHash'));
  }, [navigation]);
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
        {loading ? (
          <ActivityIndicator />
        ) : (
          <List
            data={data}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => (
              <CardBlock
                data={item}
                hash={navigation.getParam('enrollmentHash')}
                navigation={navigation}
              />
            )}
          />
        )}
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
