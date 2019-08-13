import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import Svg from '~/assets/ComponetsSvg/BackgroundImage';

import { Title, Content, Description } from './styles';

export default function Header({
  title,
  titleSize,
  description,
  height,
  backgroundColor,
  barStyle,
}) {
  return (
    <Content type={height} color={backgroundColor}>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
      <Svg />

      {!!title && (
        <Title numberOfLines={2} size={titleSize}>
          {title}
        </Title>
      )}

      {!!description && <Description>{description}</Description>}
    </Content>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  titleSize: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.string,
};

Header.defaultProps = {
  description: '',
  title: null,
  backgroundColor: '#0B5AA3',
  titleSize: 'large',
  height: 'small',
  barStyle: 'light-content',
};
