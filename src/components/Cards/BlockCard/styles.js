import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { colors, metrics, typography } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
  padding-top: ${metrics.basePadding * 0.5}px;
  padding-bottom: ${metrics.basePadding * 0.5}px;
  padding-left: ${metrics.basePadding}px;
  padding-right: ${metrics.basePadding}px;
  flex-direction: column;
  border-radius: ${metrics.baseRadius}px;
  elevation: ${Platform.OS === 'android' ? 3 : 'none'};
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: stretch;
`;

export const Content = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
`;
export const ContentTitle = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const Title = styled(typography.MediumTitle)`
  color: ${colors.black};
`;

export const SubTitle = styled(typography.Small)`
  color: ${colors.light};
`;

export const ContentIcon = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SectionList = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: 16 },
})``;
