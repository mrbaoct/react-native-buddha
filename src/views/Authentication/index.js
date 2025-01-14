import {
  createAppContainer
} from 'react-navigation'

import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from './Login'
import RegisterScreen from './Register'
import ResetScreen from './Reset'

const AuthNavigation = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Reset: ResetScreen,
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
})

export default createAppContainer(AuthNavigation)