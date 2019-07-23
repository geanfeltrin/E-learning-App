import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { Container, Content, Title, Status, ContentIcon } from './styles';

export default function CardCollapsed({ title, status, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse() {
    setCollapsed(!collapsed);
  }

  return (
    <Container>
      <Content onPress={() => handleCollapse()}>
        <Title>{title}</Title>

        <ContentIcon>
          <Status>{status}</Status>
          <Icon
            name={collapsed ? 'x' : 'chevron-down'}
            size={24}
            color="#212429"
          />
        </ContentIcon>
      </Content>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {collapsed && <>{children}</>}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

CardCollapsed.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
