import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, metrics, general } from '~/styles';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${colors.white};
  justify-content: flex-start;
  align-items: stretch;
  width: ${metrics.screenWidth};
`;

export const Content = styled.View``;

export const ImageLogo = styled.View`
  justify-content: center;
  align-items: center;
  width: ${metrics.screenWidth};
  height: 52px;
  margin-top: ${getStatusBarHeight() + 30};
  margin-bottom: 60px;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  margin-bottom: 57px;
  color: ${colors.black};
`;

export const Form = styled.View`
  align-items: center;
`;

export const InputText = styled(general.InputText)``;

export const ForgottenPassword = styled.TouchableOpacity`
  justify-content: flex-end;
  width: ${metrics.screenWidth - metrics.baseMargin * 2}px;
  align-items: flex-end;
  margin-bottom: ${metrics.baseMargin * 1.5}px;
`;

export const ForgotText = styled.Text`
  text-align: right;
  color: ${colors.tertiary};
  font-style: normal;
  font-size: 12px;
  letter-spacing: 1.008;
  text-decoration: underline;
`;

export const SubmitButton = styled(general.Button)``;

export const TextButton = styled(general.ButtonText)``;

export const ContentText = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AccountText = styled.Text`
  font-size: 12px;
  letter-spacing: 1.008;
  color: ${colors.light};
`;

export const AccountButton = styled.TouchableOpacity``;

export const AccountButtonTxt = styled.Text`
  font-size: 12px;
  letter-spacing: 1.008;
  text-decoration: underline;
  color: ${colors.tertiary};
`;
