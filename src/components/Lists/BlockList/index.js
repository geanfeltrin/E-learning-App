import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../../styles';

import { Container, Title } from './styles';

export default function BlockList({ data, hash, navigation }) {
  function handleNavigation({ id, sequence, moduleName, lessons }) {
    navigation.navigate('Modules', { hash, id, sequence, moduleName, lessons });
  }
  return (
    <Container
      onPress={() =>
        handleNavigation({
          id: data.id,
          sequence: data.sequence,
          moduleName: data.subject_name,
          lessons: data.lessons,
        })
      }
    >
      <Icon name="list" size={24} color={colors.primary} />
      <Title numberOfLines={1}>{data.subject_name}</Title>
    </Container>
  );
}

BlockList.propTypes = {
  data: PropTypes.shape({
    subject_name: PropTypes.string,
    id: PropTypes.string,
    sequence: PropTypes.string,
    lessons: PropTypes.array,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  hash: PropTypes.string.isRequired,
};
