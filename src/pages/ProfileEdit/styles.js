import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import { colors, metrics, typography, general } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  width: ${metrics.screenWidth}px;
  height: 100%;
  border-top-left-radius: ${metrics.baseRadius}px;
  border-top-right-radius: ${metrics.baseRadius}px;
`;

export const Content = styled.View`
  flex: 1;
  width: ${metrics.screenWidth}px;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  margin-bottom: 50px;
`;

export const AvatarContainer = styled.View`
  position: absolute;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 50;
  margin-top: ${Platform.OS === 'ios'
    ? getStatusBarHeight() + metrics.baseMargin
    : metrics.baseMargin * 0.5};
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  background-color: rgb(6, 48, 87);
  opacity: 0.5;
  border-radius: 50;
`;
export const IconContent = styled.View`
  position: absolute;
  border-radius: 50;
  bottom: 8px;
`;
export const AreaClick = styled.TouchableOpacity`
  flex: 1;
  border-radius: 50;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const AvatarText = styled(typography.Large)`
  margin-top: ${metrics.baseMargin * 0.5}px;
  color: ${colors.black};
`;

export const Title = styled(typography.MediumTitle)`
  color: ${colors.black};
  padding: ${metrics.basePadding}px;
`;

export const Label = styled(typography.ExtraSmall)`
  padding-left: ${metrics.basePadding}px;
  padding-bottom: ${metrics.basePadding}px;
`;

export const Input = styled(general.InputText)`
  background-color: ${colors.white};
`;

export const ButtonSave = styled(general.Button)`
  background-color: ${colors.secondary};
  margin-left: ${metrics.baseMargin}px;
  margin-top: ${metrics.baseMargin}px;
`;

export const ButtonText = styled(general.ButtonText)``;

export const Division = styled.View`
  border: 1px solid ${colors.lighter};
  width: 100%;
  flex-direction: row;
`;
