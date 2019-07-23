import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

import { colors, metrics, typography } from '~/styles';

const height = {
  max: '250px',
  medium: '140px',
  small: '120px',
};
const textSize = {
  large: {
    fontFamily: 'Open Sans SemiBold',
    fontSize: 21,
  },
  extraLarge: {
    fontFamily: 'Open Sans Bold',
    fontSize: 28,
  },
};

export const Content = styled.View`
  max-height: ${props => (props.type === 'max' ? '250px' : height[props.type])};
  background-color: ${props => (props.color ? props.color : colors.primary)};
  justify-content: flex-start;
  align-items: flex-start;
  width: ${metrics.screenWidth}px;
`;

export const IconContent = styled.View`
  width: ${metrics.screenWidth}px;
  justify-content: center;
  align-items: flex-end;
  padding-right: ${metrics.basePadding};
  padding-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight() + metrics.basePadding
    : metrics.basePadding};
  position: absolute;
`;

export const Title = styled.Text`
  font-family: ${props => textSize[props.size].fontFamily};
  font-size: ${props => textSize[props.size].fontSize};
  color: ${colors.white};
  padding-top: ${props => (props.size === 'extraLarge' ? '70px' : '51px')};
  padding-bottom: ${metrics.basePadding};
  padding-left: ${metrics.basePadding};
  position: absolute;
`;

export const Description = styled(typography.Small)`
  color: ${colors.white};
  top: ${props => (props.size === 'large' ? '40px' : '60px')};
  text-align: justify;
  padding-top: 60px;
  padding-bottom: ${metrics.basePadding};
  padding-left: ${metrics.basePadding};
  padding-right: ${metrics.basePadding};
  position: absolute;
  z-index: -1;
`;
