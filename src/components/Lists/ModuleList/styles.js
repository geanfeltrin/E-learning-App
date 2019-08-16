import styled from 'styled-components/native';

import { colors, metrics, typography } from '~/styles';

export const Container = styled.View`
  height: 45px;
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.lighter};
`;

export const ContentCard = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-right: 32px;
  padding-left: 32px;
  background: ${colors.white};
  flex: 1;
`;

export const ContentText = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex: 1;
`;
export const Wrapper = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
`;

export const TextCard = styled(typography.Small)`
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
