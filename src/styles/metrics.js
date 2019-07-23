import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 16,
  basePadding: 16,
  baseRadius: 8,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
