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
  TextTime,
  ContentText,
} from './styles';

export default function ModuleList({ data, navigation }) {
  return (
    <Container>
      <ContentCard onPress={() => navigation.navigate('Lessons')}>
        <ContentText>
          <Icon name="play-circle" size={24} color={colors.primary} />
          <Wrapper>
            <TextCard>{data.title}</TextCard>
          </Wrapper>
        </ContentText>

        <ContentTime>
          <TextTime>50min</TextTime>
          <Icon name="check" size={24} color={colors.lighter} />
        </ContentTime>
      </ContentCard>
    </Container>
  );
}

ModuleList.prototype = {
  data: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
