import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import the different screens
import Loading from './src/pages/Loading'
import Register from './src/pages/Register'
import Login from './src/pages/Login'
import Main from './src/pages/Main'
// create our app's navigation stack
const App = createAppContainer (createSwitchNavigator (
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
export default App


