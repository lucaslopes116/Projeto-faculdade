import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import the different screens
import Loading from './pages/Loading'
import Register from './pages/Register'
import Login from './pages/Login'
import Main from './pages/Main'
// create our app's navigation stack
const Routes = createAppContainer (createSwitchNavigator (
  {
    Loading,
    Register,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading',
  },
  
  
))
export default Routes


