import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors, metrics } from '~/styles';

import Teacher from '../../assets/Teacher.png';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: metrics.screenWidth,
    alignItems: 'flex-end',
    backgroundColor: `${colors.primary}`,
  },
  headerTitle: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: '700',
    fontSize: 28,
    color: `${colors.white}`,
  },
  headerImage: {
    width: 140,
    height: 77,
  },
});
export default function Header2({ title, scale, small }) {
  const styleT = {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: '600',
    fontSize: 16,
  };
  const styleI = {
    display: 'none',
  };
  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: scale.interpolate({
            inputRange: [0, 140],
            outputRange: [129, 56],
            extrapolate: 'clamp',
          }),
        },
      ]}
    >
      <Animated.Text
        numberOfLines={scale.interpolate({
          inputRange: [30, 140],
          outputRange: [3, 1],
          extrapolate: 'clamp',
        })}
        style={[
          styles.headerTitle,
          {
            fontSize: scale.interpolate({
              inputRange: [120, 140],
              outputRange: [28, 21],
              extrapolate: 'clamp',
            }),
            paddingBottom: scale.interpolate({
              inputRange: [120, 140],
              outputRange: [16, small ? 18 : 14],
              extrapolate: 'clamp',
            }),
            paddingLeft: scale.interpolate({
              inputRange: [80, 140],
              outputRange: [0, 50],
              extrapolate: 'clamp',
            }),
            fontWeight: scale.interpolate({
              inputRange: [120, 140],
              outputRange: [small ? '600' : '700', small ? '600' : '400'],
              extrapolate: 'clamp',
            }),
          },
          small && styleT,
        ]}
      >
        {title}
      </Animated.Text>

      <Animated.Image
        source={Teacher}
        style={[
          styles.headerImage,
          {
            opacity: scale.interpolate({
              inputRange: [0, 140],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
          },
          small && styleI,
        ]}
        resizeMethod="resize"
      />
    </Animated.View>
  );
}

Header2.propTypes = {
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  scale: PropTypes.shape({
    interpolate: PropTypes.func.isRequired,
  }).isRequired,
};

Header2.defaultProps = {
  small: false,
};
