import React from 'react';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../../styles';

import {
  Container,
  Wrapper,
  ContentCard,
  TextCard,
  ContentTime,
  ContentText,
} from './styles';

export default function ModuleList({ data, navigation }) {
  return (
    <Container>
      <ContentCard onPress={() => navigation.navigate('Lessons')}>
        <ContentText>
          <Icon name="play-circle" size={24} color={colors.primary} />
          <Wrapper>
            <TextCard>{data.name}</TextCard>
          </Wrapper>
        </ContentText>

        <ContentTime>
          <Icon
            name="check"
            size={24}
            color={data.frequency_ava === 'T' ? colors.success : colors.lighter}
          />
        </ContentTime>
      </ContentCard>
    </Container>
  );
}

ModuleList.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    frequency_ava: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
