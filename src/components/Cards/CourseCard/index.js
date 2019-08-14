import React from 'react';
import PropTypes from 'prop-types';

import Svg from '~/assets/ComponetsSvg/Courses';

import { Container, Wrapper, Title, SubTitle } from './styles';

export default function CourseCard({ data, onNav }) {
  return (
    <Container onPress={onNav}>
      <Svg />
      <Wrapper>
        <Title numberOfLines={2}>{data.course_name}</Title>
        <SubTitle>{data.course_type}</SubTitle>
      </Wrapper>
    </Container>
  );
}

CourseCard.propTypes = {
  onNav: PropTypes.func.isRequired,
  data: PropTypes.shape({
    course_name: PropTypes.string,
    course_type: PropTypes.string,
  }).isRequired,
};
