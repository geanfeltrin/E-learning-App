import styled from 'styled-components/native';
import { colors, typography, metrics } from '~/styles';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 129px;
  width: ${metrics.screenWidth}px;
  align-items: flex-end;
  background: ${colors.primary};
`;

export const Title = styled(typography.ExtraLarge)`
  color: ${colors.white};
`;
