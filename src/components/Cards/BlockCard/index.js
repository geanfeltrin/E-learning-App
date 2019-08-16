import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import {
  Container,
  Content,
  Title,
  SubTitle,
  ContentIcon,
  ContentTitle,
  SectionList,
} from './styles';

import BlockList from '~/components/Lists/BlockList';

export default function BlockCard({ data, hash, navigation }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse() {
    setCollapsed(!collapsed);
  }

  useEffect(() => {
    if ([data].length <= 1) {
      setCollapsed(true);
    }
  }, [data]);

  return (
    <Container>
      <Content onPress={() => handleCollapse()}>
        <ContentTitle>
          <Title>Bloco Atual</Title>
          <SubTitle numberOfLines={1}>{data.currentBlockName}</SubTitle>
        </ContentTitle>
        <ContentIcon>
          <Icon
            name={collapsed ? 'x' : 'chevron-down'}
            size={24}
            color="#212429"
          />
        </ContentIcon>
      </Content>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {collapsed && (
            <View>
              <SectionList
                data={data.currentBlockSubjects}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <BlockList data={item} hash={hash} navigation={navigation} />
                )}
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

BlockCard.propTypes = {
  data: PropTypes.shape({
    currentBlockSubjects: PropTypes.array,
    currentBlockName: PropTypes.string,
  }).isRequired,

  navigation: PropTypes.shape({}).isRequired,
  hash: PropTypes.string.isRequired,
};
