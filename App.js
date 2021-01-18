import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Dimensions,
  View
} from 'react-native';
import Landing from './src/components/Landing'
import SignIn from './src/components/SignIn'
import SignUp from './src/components/SignUp'
import Home from './src/components/Home'
import Sell from './src/components/Sell'
import Profile from './src/components/Profile'
import Favourites from './src/components/Favourites'
import Search from './src/components/Search'
import { useAuth } from './src/components/AuthContext'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Favourites') {
            iconName = 'heart'
          } else if (route.name === 'Profile') {
            iconName = 'person'
          } else if (route.name === 'Search') {
            iconName = 'search'
          } else if (route.name === 'Sell') {
            iconName = 'add-circle'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        headerMode: 'none'

      })}
      tabBarOptions={{
        activeTintColor: '#fdfdfd',
        inactiveTintColor: '#0E6154',
        showLabel: false,
        style: { backgroundColor: '#47CCB8' }
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      <Tab.Screen
        name="Sell"
        component={Sell}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{ tabBarBadge: 2 }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        iconName='ios-list-box'
      />
    </Tab.Navigator >
  )
}

const LandingStack = createStackNavigator();
function LandingScreens() {
  return (
    <LandingStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <LandingStack.Screen
        name="Landing"
        component={Landing}
      />
      <LandingStack.Screen
        name="Sign In"
        component={SignIn}
      />
      <LandingStack.Screen
        name="Sign Up"
        component={SignUp}
      />
    </LandingStack.Navigator >
  )
}

const Stack = createStackNavigator()
const App = () => {
  const { currentUser } = useAuth()
  return (
    <NavigationContainer style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabeled: true,
          gestureDirection: 'horizontal'
        }}
      >
        {!currentUser
          ?
          <Stack.Screen name='Landing' component={LandingScreens} />
          :
          <Stack.Screen name='Earn  Of It' component={HomeTabs} />
        }
      </Stack.Navigator>
    </NavigationContainer>

  )
}


export default App;
