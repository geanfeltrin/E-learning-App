import React, { useState, useRef } from 'react';
import { View, Image, Animated } from 'react-native';

import { Container, Title } from './styles';
import Teacher from '../../assets/Teacher.png';

export default function Header2({ title, Children }) {
  const scale = useRef(new Animated.Value(0)).current;
  return (
    <Container>
      <Title>{title}</Title>
      <Image
        source={Teacher}
        style={{ width: 140, height: 77 }}
        resizeMethod="resize"
      />
    </Container>
  );
}
