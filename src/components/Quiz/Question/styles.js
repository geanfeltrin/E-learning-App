import styled from 'styled-components/native';
import { colors, metrics, typography } from '~/styles';

export const Container = styled.View`
  width: ${metrics.screenWidth}px;
  padding: ${metrics.basePadding}px;
`;

export const Title = styled(typography.Large)`
  color: ${colors.secondary};
  padding-bottom: ${metrics.basePadding}px;
`;

export const ContentBar = styled.View`
  width: 100%;
  height: 5px;
  padding: ${metrics.baseMargin}px;
`;

export const TextQuestion = styled(typography.Medium)`
  color: ${colors.black};
  text-align: justify;
  padding-top: ${metrics.basePadding}px;
`;
