import React, { useState, useEffect } from 'react';

import { ScrollView } from 'react-native';
import {
  Container,
  Content,
  Title,
  ContentButton,
  ButtonLeave,
  ButtonNext,
  ButtonText,
} from './styles';

import Question from '~/components/Quiz/Question';

import Answers from '~/components/Quiz/Answers';

const resposta = [
  'Valvas aórtica e tricúspide',
  'Valvas pulmonar e aórtica',
  'Valvas pulmonar e tricúspide',
  'Valvas pulmonar e tricúspide',
  'Valvas pulmonar e tricúspide',
  'Valvas pulmonar e tricúspide',
  'Valvas pulmonar e tricúspide',
  'Valvas pulmonar e tricúspide dasdhasudha suhduas hdasu hduas hdsauh duashd uashd usahdu sahdusa hduash duash ausdh aushusadh udahsud ',
];

export default function QuizPage() {
  return (
    <Container>
      <Question
        numberQuestion="5"
        total="10"
        question="O coração se contrai duas vezes em cada batida. Uma é a contração atrial e a outra é a contração ventricular. Quais duas valvas cardíacas se abrem durante a contração ventricular?"
      />

      <Content>
        <Title>Escolha uma Resposta:</Title>
        <Answers answer={resposta} />
      </Content>

      <ContentButton>
        <ButtonLeave>
          <ButtonText color="#F03D3E">Sair</ButtonText>
        </ButtonLeave>
        <ButtonNext>
          <ButtonText color="#3AA96C">Avançar</ButtonText>
        </ButtonNext>
      </ContentButton>
    </Container>
  );
}
