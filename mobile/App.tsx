import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Router from './src/routes/router';
import { AuthProvider } from './src/contexts/auth';
import { Theme } from './src/contexts/theme';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Theme>
          <StatusBar style="auto" />
          <Router />
        </Theme>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;