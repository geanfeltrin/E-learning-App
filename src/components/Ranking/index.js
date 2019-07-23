import React from 'react';
import { View } from 'react-native';
import CoinIcon from '~/assets/ComponetsSvg/Coins';
import MedalIcon from '~/assets/ComponetsSvg/Medal';
import DiamondsIcon from '~/assets/ComponetsSvg/Diamonds';

import {
  RankingContainer,
  ClassificationContainer,
  ClassificationText,
  MetricsContainer,
  Wrapper,
  MetricsText,
  Span,
  PointsText,
} from './styles';

export default function Ranking() {
  return (
    <View>
      <RankingContainer>
        <ClassificationContainer>
          <ClassificationText>Classificação: 4/5</ClassificationText>
        </ClassificationContainer>
        <MetricsContainer>
          <Wrapper>
            <CoinIcon />
            <PointsText>15680</PointsText>
            <MetricsText>
              <Span>R</Span>COINS
            </MetricsText>
          </Wrapper>
          <Wrapper>
            <MedalIcon />
            <PointsText>132º</PointsText>
            <MetricsText>
              <Span>R</Span>ANKING
            </MetricsText>
          </Wrapper>
          <Wrapper>
            <DiamondsIcon />
            <PointsText>30</PointsText>
            <MetricsText>
              <Span>R</Span>Diamonds
            </MetricsText>
          </Wrapper>
        </MetricsContainer>
      </RankingContainer>
    </View>
  );
}
