import styled from 'styled-components/native';

import { colors, metrics, typography } from '~/styles';

const textSize = {
  medium: {
    fontFamily: 'Open Sans Regular',
    fontSize: 16,
  },
  small: {
    fontFamily: 'Open Sans Bold',
    fontSize: 12,
  },
  mediumTitle: {
    fontFamily: 'Open Sans Regular',
    fontSize: 16,
  },
};

export const Container = styled.View`
  height: ${props => (props.size ? 'auto' : '70px')};
`;

export const ContentCard = styled.TouchableOpacity`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${metrics.baseMargin}px;
  background: ${colors.white};
  height: ${props => (props.size ? `${props.size}px` : 'auto')};
  flex: 1;
  border-radius: ${props => (props.rounded ? `${metrics.baseRadius}` : 0)};
`;

export const ContentText = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: ${metrics.basePadding}px;
  flex: 1;
`;
export const Wrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
`;

export const TextCard = styled(typography.Small)`
  color: ${props => colors[props.color]};
  font-size: ${props => textSize[props.size].fontSize};
  font-family: ${props => textSize[props.size].fontFamily};
  padding-left: 10px;
`;

export const ContentTime = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextTime = styled(typography.Small)`
  color: ${colors.lighter};
  padding-right: 10px;
`;

export const Description = styled(typography.Small)`
  color: ${colors.lighter};
  padding-left: 10px;
`;
