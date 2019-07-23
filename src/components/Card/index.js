import React from 'react';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Wrapper,
  ContentCard,
  TextCard,
  ContentTime,
  TextTime,
  ContentText,
  Description,
} from './styles';

export default function Card({
  text,
  description,
  textColor,
  textSize,
  time,
  firstColorIcon,
  firtIconName,
  secondIconName,
  secondColorIcon,
  size,
  rounded,
  onPress,
}) {
  return (
    <Container size={size}>
      <ContentCard size={size} rounded={rounded} onPress={onPress}>
        <ContentText>
          {!!firtIconName && (
            <Icon name={firtIconName} size={24} color={firstColorIcon} />
          )}
          <Wrapper>
            <TextCard color={textColor} size={textSize}>
              {text}
            </TextCard>
            {!!description && <Description>{description}</Description>}
          </Wrapper>
        </ContentText>

        {!!time && (
          <ContentTime>
            <TextTime>{time}</TextTime>
            <Icon name={secondIconName} size={24} color={secondColorIcon} />
          </ContentTime>
        )}
      </ContentCard>
    </Container>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  firtIconName: PropTypes.string,
  secondIconName: PropTypes.string,
  firstColorIcon: PropTypes.string,
  secondColorIcon: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  onPress: PropTypes.func,
};

Card.defaultProps = {
  text: 'Aula 01',
  description: 'teste',
  textColor: 'dark',
  textSize: 'small',
  time: null,
  firtIconName: null,
  secondIconName: null,
  firstColorIcon: '#0B5AA3',
  secondColorIcon: '#37B24D',
  size: null,
  rounded: false,
  onPress: () => {},
};
