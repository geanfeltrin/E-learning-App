import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { typography, colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  height: 100px;
  padding: ${metrics.basePadding}px;
  justify-content: space-around;
  elevation: ${Platform.OS === 'android' ? 3 : 'none'};
  margin-bottom: ${metrics.baseMargin}px;
`;

export const ImageThumbnail = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 3px;
`;
export const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: ${metrics.baseMargin}px;
`;

export const Title = styled(typography.MediumTitle)`
  color: ${colors.black};
  margin-bottom: ${metrics.baseMargin * 0.5}px;
`;

export const SubTitle = styled(typography.Small)`
  color: ${colors.dark};
`;
