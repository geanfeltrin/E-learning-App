import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import ImageImob from '~/assets/Imobilizacao.png';

import {
  Container,
  Content,
  ContentImage,
  CardImage,
  ContentTitle,
  Title,
  SubTitle,
  ContentIcon,
} from './styles';

export default function CardsCourses({
  title,
  subTitle,
  nameIcon,
  colorIcon,
  type = 'text',
  textColor,
  border,
  onPress,
}) {
  return (
    <Container type={type} border={border} onPress={onPress}>
      <Content type={type}>
        {type === 'image' && (
          <ContentImage>
            <CardImage source={ImageImob} resizeMode="cover" />
          </ContentImage>
        )}
        <ContentTitle type={type}>
          <Title type={type} numberOfLines={2} textColor={textColor}>
            {title}
          </Title>
          <SubTitle type={type}>{subTitle}</SubTitle>
        </ContentTitle>

        {type === 'text' && (
          <ContentIcon>
            <Icon name={nameIcon} size={24} color={colorIcon} />
          </ContentIcon>
        )}
      </Content>
    </Container>
  );
}

CardsCourses.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  nameIcon: PropTypes.string.isRequired,
  colorIcon: PropTypes.string.isRequired,
  type: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
  onPress: PropTypes.func,
};

CardsCourses.defaultProps = {
  type: 'text',
  textColor: 'black',
  border: 'none',
  onPress: () => {},
};
