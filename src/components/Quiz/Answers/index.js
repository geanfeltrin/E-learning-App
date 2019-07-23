import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  Container, Wrapper, AnswerText, Content,
} from './styles';

export default function Answers({ answer }) {
  const [clicked, setClicked] = useState(false);
  const [indexSelected, setIndexSelected] = useState('');

  function handleClicked(item, index) {
    setClicked(!clicked);
    setIndexSelected(index);
  }
  console.log(clicked, indexSelected);

  const iconSelect = new Array(answer.length)
    .join()
    .split(',')
    .map(() => 'circle');

  iconSelect[indexSelected] = 'check-circle';

  return (
    <View>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <Container>
          {answer.map((item, index) => (
            <Content key={index} onPress={() => handleClicked(item, index)}>
              <Wrapper
                border={iconSelect[index] === 'circle' ? 'transparent' : '1px solid #3AA96C'}
              >
                <Icon
                  name={iconSelect[index]}
                  size={25}
                  color={iconSelect[index] === 'circle' ? '#ACB5BD' : '#3AA96C'}
                />
                <AnswerText>{item}</AnswerText>
              </Wrapper>
            </Content>
          ))}
        </Container>
      </ScrollView>
    </View>
  );
}

Answers.propTypes = {
  answer: PropTypes.arrayOf.isRequired,
};
