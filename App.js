import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import StackNav from './components/StackNav';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style='auto' />
        <StackNav />
      </NavigationContainer>
    </PaperProvider>
  );
}
