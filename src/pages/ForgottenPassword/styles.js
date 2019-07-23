import styled from 'styled-components/native';

import { colors, metrics, general } from '~/styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.white};
  justify-content: flex-start;
  align-items: stretch;
  width: ${metrics.screenWidth};
`;

export const Content = styled.View`
  width: ${metrics.screenWidth};
  justify-content: flex-start;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 30};
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 38px;
  text-align: left;
  margin-top: 54.51px;
  margin-bottom: ${metrics.baseMargin * 1.5}px;
  color: ${colors.black};
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
`;

export const InputText = styled(general.InputText)`
  margin-bottom: ${metrics.baseMargin * 1.5}px;
`;

export const SubmitButton = styled(general.Button)``;

export const TextButton = styled(general.ButtonText)`
  font-weight: bold;
`;
