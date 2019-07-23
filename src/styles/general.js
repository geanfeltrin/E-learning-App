import styled from 'styled-components/native';
import colors from './colors';
import metrics from './metrics';

export const Button = styled.TouchableOpacity`
  height: 44px;
  width: ${metrics.screenWidth - metrics.baseMargin * 2}px;
  background-color: ${colors.primary};
  border-radius: ${metrics.baseRadius};
  justify-content: center;
  align-items: center;
  margin-bottom: ${metrics.baseMargin * 1.5}px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${colors.white};
  font-style: normal;
  font-size: 16px;
`;

export const InputText = styled.TextInput.attrs({ placeholderTextColor: `${colors.light}` })`
  border-radius: ${metrics.baseRadius};
  background-color: ${colors.background};
  width: ${metrics.screenWidth - metrics.baseMargin * 2}px;

  border: 1px solid ${colors.lighter};
  /* box-sizing: border-box; */
  height: 48px;
  margin-bottom: ${metrics.baseMargin}px;
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  padding-left: ${metrics.basePadding}px;
  font-style: normal;
  font-size: 16px;
`;
