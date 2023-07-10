import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Post from '../views/Post';

const Stack = createNativeStackNavigator();

function PostStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="post"
        component={Post}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default PostStack;
