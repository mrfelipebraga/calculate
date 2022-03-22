import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 42,
    color: '#3498db',
    fontFamily: 'Roboto_700Bold'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  inputs: {
    marginVertical: 30
  },
  input: {
    marginVertical: 5
  },
  button: {
    paddingVertical: 10
  }
});