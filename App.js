import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Dimensions
} from 'react-native';
import Landing from './src/components/Landing'
import SignIn from './src/components/SignIn'
import SignUp from './src/components/SignUp'
import Home from './src/components/Home'
import Profile from './src/components/Profile'
import Favourites from './src/components/Favourites'
import Search from './src/components/Search'
import { AuthProvider, useAuth } from './src/components/AuthContext'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const LandingStack = createStackNavigator()

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

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }}>
        <Stack.Navigator
          screenOptions={{
            gestureEnabeled: true,
            gestureDirection: 'horizontal'
          }}
        >

          <Stack.Screen
            name="Landing"
            component={Landing}
          />
          <Stack.Screen
            name="Sign In"
            component={SignIn}
          />
          <Stack.Screen
            name="Sign Up"
            component={SignUp}
          />
          <Stack.Screen name='Home' component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App;
