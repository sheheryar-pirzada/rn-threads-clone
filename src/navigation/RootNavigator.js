import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import Home from '../views/Home';
import Activity from '../views/Activity';
import Profile from '../views/Profile';
import { screenOptions } from '../utils/screen.utils';
import SearchStack from './Search.stack';
import PostStack from './Post.stack';
import { colors } from '../styles/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Nil() {
  return null;
}

const tabBarButton = (props, navigation) => (
  <Pressable
    {...props}
    style={{
      justifyContent: 'center',
      marginHorizontal: '8%',
    }}
    onPress={() => navigation.navigate('post-main')}
  >
    <Feather name="edit" size={24} color={colors.muted} />
  </Pressable>
);

function RootNavigator({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => screenOptions({ route })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={SearchStack} />
      <Tab.Screen
        name="post"
        component={Nil}
        options={{
          tabBarButton: (props) => tabBarButton(props, navigation),
        }}
      />
      <Tab.Screen name="activity" component={Activity} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="app"
        component={RootNavigator}
      />
      <Stack.Screen
        options={{
          presentation: 'formSheet',
          animation: 'slide_from_bottom',
        }}
        name="post-main"
        component={PostStack}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
