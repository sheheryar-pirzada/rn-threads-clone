import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../views/Search';
import SearchPage from '../views/search/SearchPage';

const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="search-main" component={Search} />
      <Stack.Screen
        options={{
          presentation: 'card',
          animation: 'fade',
        }}
        name="search-page"
        component={SearchPage}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
