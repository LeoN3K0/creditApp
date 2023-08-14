import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import StackNav from './components/StackNav';
import { MonthProvider } from './MonthContext';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <PaperProvider>
      <MonthProvider>
      <NavigationContainer>
        <StatusBar style={colorScheme === 'dark' ? 'dark' : 'light'} />
        <StackNav />
      </NavigationContainer>
      </MonthProvider>
    </PaperProvider>
  );
}
