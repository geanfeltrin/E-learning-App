import React, { useEffect, useRef, useCallback } from 'react';
import { ActivityIndicator, ScrollView, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, List } from './styles';

import Header2 from '~/components/Header2';
import Teacher from '../../assets/Teacher.png';

import { getCoursesRequest } from '~/store/Modules/courses/actions';
import CourseCard from '~/components/Cards/CourseCard';

export default function Main({ navigation }) {
  const profile = useSelector(state => state.user.profile);
  const courses = useSelector(state => state.courses.data);
  const loading = useSelector(state => state.courses.loading);
  const scale = useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();

  const handleRefresh = useCallback(() => {
    const { student_id: studentId, company_id: companyId } = profile.session;

    dispatch(getCoursesRequest(studentId, companyId));
  }, [dispatch, profile.session]);

  useEffect(() => {
    const { student_id: studentId, company_id: companyId } = profile.session;

    dispatch(getCoursesRequest(studentId, companyId));
  }, [dispatch, profile.session]);

  function handleNavigation(hash, courseName) {
    navigation.navigate('Blocos', { hash, courseName });
  }
  return (
    <Container>
      <Header2 title="Meus Cursos" scale={scale} image={Teacher} />
      <ScrollView
        style={{ backgroundColor: '#F2F4F7' }}
        scrollEventThrottle={20}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: { y: scale },
            },
          },
        ])}
      >
        {loading && <ActivityIndicator />}
        {courses && !loading && (
          <List
            data={courses.items}
            keyExtractor={item => String(item.class_id)}
            renderItem={({ item }) => (
              <CourseCard
                data={item}
                onNav={() => handleNavigation(item.hash, item.course_name)}
              />
            )}
            refreshing={loading}
            onRefresh={handleRefresh}
          />
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
