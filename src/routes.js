import React from 'react';

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import IconFeather from 'react-native-vector-icons/Feather';

import Main from '~/pages/Main';

import SignIn from '~/pages/SignIn';

import ForgotterPassword from '~/pages/ForgottenPassword';

import Blocos from '~/pages/Course/Blocos';
import Modules from '~/pages/Course/Modules';
import Lessons from '~/pages/Course/Lessons';

import Profile from '~/pages/Profile';
import ProfileEdit from '~/pages/ProfileEdit';

import Notification from '~/pages/Notification';

import Quiz from '~/pages/QuizPage';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  const IconComponent = IconFeather;
  let iconName;
  if (routeName === 'Main') {
    iconName = 'clipboard';
  }
  if (routeName === 'Notification') {
    iconName = 'bell';
  }
  if (routeName === 'Profile') {
    iconName = 'user';
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const Routes = (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          ForgotterPassword,
        }),
        App: createBottomTabNavigator(
          {
            Main: {
              screen: createStackNavigator(
                {
                  Lessons,
                  Main,
                  Blocos,
                  Modules,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: { tabBarLabel: 'Meus Cursos' },
            },
            Notification: {
              screen: Notification,
              navigationOptions: { tabBarLabel: 'Notificação' },
            },
            Profile: {
              screen: createStackNavigator(
                {
                  Profile,
                  ProfileEdit,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: { tabBarLabel: 'Perfil' },
            },
          },
          {
            defaultNavigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
            }),
            tabBarOptions: {
              activeTintColor: '#0B5AA3',
              inactiveTintColor: '#ACB5BD',
              style: {
                backgroundColor: '#FFFFFF',
                height: 48,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );

export default Routes;
