import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  fontFamily: 'Roboto_400Regular',
  colors: {
    ...DefaultTheme.colors,
    primary: '#72c1e8',
    accent: '#f0c020',
  },
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Routes />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
