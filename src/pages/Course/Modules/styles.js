import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  justify-content: space-between;
  align-items: stretch;
  width: ${metrics.screenWidth}px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.background};
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
  width: ${metrics.screenWidth}px;
  padding: ${metrics.basePadding}px;
  justify-content: flex-start;
  align-items: center;
`;
