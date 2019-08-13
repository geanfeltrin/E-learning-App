import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, ScrollView, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';
import Header from '~/components/Header';
import Header2 from '~/components/Header2';

import CardsCourses from '~/components/CardsCourses';

import { getCoursesRequest } from '~/store/Modules/courses/actions';

export default function Main({ navigation }) {
  const profile = useSelector(state => state.user.profile);
  const courses = useSelector(state => state.courses.data);
  const loading = useSelector(state => state.courses.loading);
  const scale = useRef(new Animated.Value(0)).current;
  if (courses) {
    console.log(courses.items);
  }
  const dispatch = useDispatch();

  useEffect(() => {
    const { student_id, company_id } = profile.session;
    dispatch(getCoursesRequest(student_id, company_id));
  }, [dispatch, profile.session]);

  return (
    <Container>
      {/* <Header title="Meus Cursos" titleSize="extraLarge" /> */}
      <Header2 title="Meus Cursos" />
      <ScrollView
        style={{ backgroundColor: '#F2F4F7' }}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { y: scale },
            },
          },
        ])}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Content>
            {courses &&
              courses.items.map(item => (
                // <CardsCourses
                //     title="teste"
                //     subTitle="teste22"
                //     nameIcon="arrow-right-circle"
                //     colorIcon="#0B5AA3"
                //     border="primary"
                //     textColor="primary"
                //     onPress={() => navigation.navigate('Blocos')}
                //     />
                <CardsCourses
                  key={item.class_id}
                  title={item.course_name}
                  subTitle="70% concluído"
                  nameIcon="arrow-right-circle"
                  colorIcon="#0B5AA3"
                  type="image"
                  onPress={() => navigation.navigate('Blocos')}
                />
              ))}
          </Content>
        )}
      </ScrollView>
    </Container>
  );
}

Main.navigationOptions = {
  header: null,
};

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
