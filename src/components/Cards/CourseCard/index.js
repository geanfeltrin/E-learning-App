import React from 'react';
import PropTypes from 'prop-types';

import Svg from '~/assets/ComponetsSvg/Courses';

import { Container, Wrapper, Title, SubTitle, ImageThumbnail } from './styles';

export default function CourseCard({ data, onNav }) {
  return (
    <Container onPress={onNav}>
      {data.thumb ? (
        <ImageThumbnail
          source={{
            uri: `https://dev.sistemaresidencia.com.br/sre/app/public/uploads${data.thumb}`,
          }}
        />
      ) : (
        <Svg />
      )}
      <Wrapper>
        <Title numberOfLines={2}>{data.course_name}</Title>
        <SubTitle>
          Tipo de curso: {data.course_type} / Carga horária: {data.workload}H
        </SubTitle>
      </Wrapper>
    </Container>
  );
}

CourseCard.propTypes = {
  onNav: PropTypes.func.isRequired,
  data: PropTypes.shape({
    course_name: PropTypes.string,
    course_type: PropTypes.string,
    workload: PropTypes.string,
    thumb: PropTypes.string,
  }).isRequired,
};
