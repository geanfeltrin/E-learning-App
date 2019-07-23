import { NavigationActions } from 'react-navigation';

let nav;

function setBottomNavigator(navigatorRef) {
  nav = navigatorRef;
}

function navigate(routeName, params) {
  nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

export default { setBottomNavigator, navigate };
