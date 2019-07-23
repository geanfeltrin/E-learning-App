import styled from 'styled-components/native';
import { colors, metrics, typography } from '~/styles';

export const Container = styled.View`
  background-color: ${colors.white};
  flex: 1;
`;

export const TitleContent = styled.View`
  margin: ${metrics.baseMargin}px;
`;

export const Title = styled(typography.Large)`
  color: ${colors.black};
  margin-bottom: ${metrics.baseMargin * 0.5}px;
`;

export const SubTitle = styled(typography.Small)`
  color: ${colors.dark};
`;

export const ContainerList = styled.View`
  background-color: ${colors.background};
  border-top-left-radius: ${metrics.baseRadius};
  border-top-right-radius: ${metrics.baseRadius};
  flex: 1;
`;

export const TitleList = styled(typography.MediumTitle)`
  color: ${colors.dark};
  margin: ${metrics.baseMargin}px;
`;

export const ContentList = styled.View``;
