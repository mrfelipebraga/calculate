import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { styles } from './styles';

const image = { uri: "./../../assets/wallpaper.jpg" };

interface SignInProps {
  navigation: NativeStackNavigationProp<any, any>
};

export default function SignIn({ navigation }: SignInProps) {
  const [mail, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const [erro, setErro] = useState({ state: false, msg: '' });

  const onPress = () => {
    if (!mail && !pass) {
      setErro({ state: true, msg: 'Você deve preencher todos os campos!' });
      return;
    }

    if (mail === 'admin@admin.com' && pass === 'admin')
      navigation.navigate('Form');
    else setErro({ state: true, msg: 'Usuário ou senha inválido!' })
  }

  const hasErrors = () => {
    if (!mail.length) return false;

    if (mail.includes(' ')) return true;

    return !mail.includes('@');
  };

  useEffect(() => {
    if (mail && pass) {
      setErro({ state: false, msg: '' })
    }
  }, [mail, pass])

  return (
    <ImageBackground source={require("./../../assets/wallpaper4.jpg")} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Usina Solar</Text>
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
            mode='outlined'
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
            mode='outlined'
          />
        </View>

        <Button mode='contained' dark labelStyle={styles.button} onPress={onPress} >
          Entrar
        </Button>

        <HelperText type="error" visible={erro.state} style={{ textAlign: 'center' }}>{erro.msg}</HelperText>
      </View>
    </ImageBackground>
  );
}
