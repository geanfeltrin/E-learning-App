import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { colors, metrics, typography } from '~/styles';

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  width: 100%;
  justify-content: ${props =>
    props.type === 'image' ? 'flex-start' : 'space-between'};
  align-items: center;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  margin: ${metrics.baseMargin * 0.5}px;
  border: ${props =>
    props.border === 'none' ? 'none' : `1px solid ${colors[props.border]}`};
  height: ${props => (props.type === 'image' ? '117px' : '64px')};
  elevation: ${Platform.OS === 'android' ? 3 : 'none'};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding-top: ${props =>
    props.type === 'image' ? `${metrics.basePadding}px` : '0px'};
`;

export const ContentImage = styled.View`
  margin: ${metrics.baseMargin}px;
`;

export const CardImage = styled.Image``;

export const ContentTitle = styled.View`
  flex: 1;
  flex-direction: column;
  padding: ${props =>
    props.type === 'image' ? '0px' : `${metrics.basePadding}px`};
`;

export const ContentIcon = styled.View`
  margin: ${metrics.baseMargin}px;
`;

export const Title = styled(typography.MediumTitle)`
  color: ${props =>
    props.textColor ? `${colors[props.textColor]}` : `${colors.secundary}`};
`;

export const SubTitle = styled(typography.Small)`
  color: ${props =>
    props.type === 'image' ? `${colors.tertiary}` : `${colors.light}`};
  margin-top: ${metrics.baseMargin * 0.5}px;
`;

export const ContentBar = styled.View`
  width: 100%;
  height: 5px;
  padding: ${metrics.baseMargin}px;
`;
