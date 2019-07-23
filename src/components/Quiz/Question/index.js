import React from 'react';

import { Bar } from 'react-native-progress';

import {
  Container, Title, ContentBar, TextQuestion,
} from './styles';

export default function Question({ question, numberQuestion, total }) {
  const value = numberQuestion / total;
  return (
    <Container>
      <Title>Pergunta {numberQuestion}</Title>
      <Bar
        progress={value}
        borderRadius={0}
        color="#0B5AA3"
        width={null}
        unfilledColor="#DDE2E5"
        borderColor="#DDE2E5"
        height={3}
      />
      <TextQuestion>{question}</TextQuestion>
    </Container>
  );
}
