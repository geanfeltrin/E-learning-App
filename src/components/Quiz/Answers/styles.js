import styled from 'styled-components/native';
import { metrics, colors, typography } from '~/styles';

export const Container = styled.View`
  height: auto;
`;

export const Content = styled.TouchableOpacity`
  height: auto;
  background-color: ${colors.white};
  margin-bottom: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  margin-left: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius};
  background-color: ${colors.white};
`;
export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: ${props => props.border};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding}px;
`;
export const AnswerText = styled(typography.Medium)`
  color: ${colors.dark};
  padding-left: ${metrics.basePadding * 0.5}px;
`;
