import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { colors, metrics, typography, general } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  width: ${metrics.screenWidth}px;
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
`;

export const AvatarContainer = styled.View`
  position: absolute;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight() + metrics.baseMargin
    : metrics.baseMargin * 0.5};
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50;
  margin-bottom: ${metrics.baseMargin * 0.5}px;
`;

export const AvatarText = styled(typography.Large)`
  color: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;

  background-color: ${colors.background};
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: flex-start;

  width: 100%;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const LeaveButton = styled(general.Button)`
  background-color: ${colors.error};
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

export const ButtonText = styled(general.ButtonText)``;
