import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routes/router';
import { AuthProvider } from './src/contexts/auth';
import { Theme as ThemeProvider } from './src/contexts/theme';
import { MenuProvider } from './src/contexts/menu';
import { DotsProvider } from './src/contexts/dots';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider>
          <MenuProvider>
            <DotsProvider>
              <Router />
            </DotsProvider>
          </MenuProvider>
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;