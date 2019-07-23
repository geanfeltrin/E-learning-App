import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { colors, metrics, typography } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${colors.white};
  elevation: ${Platform.OS === 'android' ? 3 : 'none'};
  margin-bottom: ${metrics.baseMargin};
  height: auto;
`;

export const Content = styled.TouchableOpacity`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${metrics.basePadding}px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${colors.lighter};
`;

export const Title = styled(typography.MediumTitle)`
  color: ${colors.black};
`;

export const Status = styled(typography.Small)`
  color: ${colors.secondary};
  padding-right: 5px;
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentList = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: stretch;
  flex-direction: row;
  padding: ${metrics.basePadding}px;
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  margin-top: ${metrics.baseMargin * 0.5}px;
  margin-bottom: ${metrics.baseMargin * 0.5}px;
  background: ${colors.white};
  height: auto;
  flex: 1;
`;

export const ContentText = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

export const Textlesson = styled(typography.Small)`
  color: ${colors.dark};
  padding-left: 10px;
`;

export const ContentTime = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextTime = styled(typography.Small)`
  color: ${colors.lighter};
  padding-right: 10px;
`;
