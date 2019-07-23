import styled from 'styled-components/native';
import { colors, metrics, typography } from '~/styles';

export const Container = styled.View``;
export const RankingContainer = styled.View`
  flex: 1;
  background-color: ${colors.white};
  margin: ${metrics.baseMargin}px;
  min-height: 205px;
  max-height: 205px;
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding}px;
`;

export const ClassificationContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const ClassificationText = styled(typography.ExtraSmall)`
  color: ${colors.dark};
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const MetricsContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${metrics.baseMargin * 0.5}px;
`;

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MetricsText = styled(typography.ExtraSmall)`
  color: ${colors.light};
  text-transform: uppercase;
`;

export const Span = styled(typography.ExtraSmall)`
  color: ${colors.secondary};
  text-transform: uppercase;
`;

export const PointsText = styled(typography.ExtraLarge)`
  color: ${colors.secondary};
`;
