import styled from 'styled-components/native';

import { colors, metrics, typography } from '~/styles';

export const Container = styled.TouchableOpacity`
  flex: 1;
  background: ${colors.white};
  flex-direction: row;
  height: 32;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${metrics.baseMargin * 0.5}px;
  margin-bottom: ${metrics.baseMargin * 0.5}px;
`;

export const Title = styled(typography.Medium)`
  color: ${colors.black};
  margin-left: ${metrics.baseMargin * 0.75}px;
`;

export const ContentIcon = styled.View`
  flex: 1;
  margin-right: ${metrics.baseMargin}px;
  flex-direction: row;
  align-items: center;
`;
