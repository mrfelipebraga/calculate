import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View } from 'react-native';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import SignIn from './src/screens/SignIn';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <SignIn />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
