import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 70,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 42,
    color: '#fff',
    fontFamily: 'Roboto_300Light',
    marginBottom: 30
  },
  input: {
    marginBottom: 20
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    paddingVertical: 10
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  },
  label: {
    color: '#fff',
    fontSize: 18
  }
});