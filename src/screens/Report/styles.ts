import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
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
  image: {
    flex: 1,
    justifyContent: "center"
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 28,
    alignItems: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  info: {
    fontSize: 20,
    marginLeft: 10,
    color: '#fff'
  },
  button: {
    paddingVertical: 10
  },
});