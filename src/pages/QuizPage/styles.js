import styled from 'styled-components/native';
import { colors, metrics, typography } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  width: ${metrics.screenWidth}px;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Content = styled.View`
  background-color: ${colors.background};
  flex: 1;
`;

export const Title = styled(typography.ExtraSmall)`
  color: ${colors.black};
  text-transform: uppercase;
  padding: ${metrics.basePadding}px;
`;

export const ContentButton = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.white};
  max-height: 48px;
  padding: ${metrics.basePadding}px;
`;

export const ButtonLeave = styled.TouchableOpacity``;

export const ButtonNext = styled.TouchableOpacity``;

export const ButtonText = styled(typography.MediumTitle)`
  color: ${props => props.color};
`;
