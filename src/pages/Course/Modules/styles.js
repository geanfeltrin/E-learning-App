import styled from 'styled-components/native';

import { colors, metrics, typography } from '~/styles';

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
  width: ${metrics.screenWidth}px;
  padding-bottom: ${metrics.basePadding}px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colors.white};
`;

export const Title = styled(typography.MediumTitle)`
  color: ${colors.dark};
  margin: ${metrics.baseMargin}px;
`;

export const SectionList = styled.FlatList.attrs({
  // contentContainerStyle: { padding: 8 },
})``;
