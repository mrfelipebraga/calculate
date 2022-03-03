import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';

export default function SignIn() {
  const [mail, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const onPress = () => {
    console.log('press')
  }

  const hasErrors = () => {
    if (!mail.length) return false;

    if (mail.includes(' ')) return true;

    return !mail.includes('@');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.inputs}>
        <TextInput
          label="E-mail"
          value={mail}
          onChangeText={text => setMail(text)}
          style={styles.input}
          autoComplete={mail}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
        />

        <HelperText type="error" visible={hasErrors()}>
          E-mail inválido!
        </HelperText>

        <TextInput
          label="Senha"
          secureTextEntry={true}
          value={pass}
          onChangeText={text => setPass(text)}
          style={styles.input}
          autoComplete={pass}
        />
      </View>

      <Button mode='contained' dark style={styles.button} onPress={onPress}>
        Entrar
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 42,
    color: '#3498db'
  },
  inputs: {
    marginVertical: 30
  },
  input: {
    marginVertical: 10
  },
  button: {
    paddingVertical: 8
  }
});
