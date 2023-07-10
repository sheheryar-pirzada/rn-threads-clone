import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { styles } from './src/styles/styles';
import { AppProvider } from './src/context/AppContext';

export default function App() {
  LogBox.ignoreLogs([
    'Animated: `useNativeDriver` was not specified.',
    'Animated.event now requires a second argument for options',
  ]);
  return (
    <AppProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView
            edges={['top', 'left']}
            style={styles.container}
          >
            <RootNavigator />
            <StatusBar style="light" />
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </AppProvider>
  );
}
