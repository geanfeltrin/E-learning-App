import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  width: ${metrics.screenWidth}px;
  background: ${colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
  background: ${colors.background};
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
`;
