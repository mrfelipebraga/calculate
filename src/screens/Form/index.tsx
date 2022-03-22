import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, ImageBackground, Text, View } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { styles } from './styles';

interface FormProps {
  navigation: NativeStackNavigationProp<any, any>
};

export default function Form({ navigation }: FormProps) {
  const [state, setState] = useState({ nome: '', cpf: '', rg: '', endereco: '', bairro: '', cidade: '', estado: '', });

  const [error, setError] = useState({ state: false, msg: '' })

  const onPress = () => {
    const el = Object.values(state).filter(el => el == '');

    console.log(el)

    if (el.length) {
      setError({ state: true, msg: 'Você deve preencher todos os campos!' });
      return;
    } else {
      setError({ state: false, msg: '' })
    }

    return (Alert.alert(
      "Cadastramento",
      "Cliente foi cadastrado com sucesso, deseja prosseguir para o preenchimento do consumo?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => navigation.navigate('Consume') }
      ]
    ))
  }

  return (
    <ImageBackground source={require("./../../assets/wallpaper2.jpg")} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Formulário</Text>
        <TextInput
          label="Nome"
          autoComplete={state.nome}
          value={state.nome}
          onChangeText={nome => setState(st => ({ ...st, nome }))}
          style={styles.input}
          autoCorrect={false}
          mode='flat'
        />

        <TextInput
          label="CPF"
          autoComplete={state.cpf}
          value={state.cpf}
          onChangeText={cpf => setState(st => ({ ...st, cpf }))}
          style={styles.input}
          autoCorrect={false}
          mode='flat'
        />

        <TextInput
          label="RG"
          autoComplete={state.rg}
          value={state.rg}
          onChangeText={rg => setState(st => ({ ...st, rg }))}
          style={styles.input}
          autoCorrect={false}
          mode='flat'
        />

        <TextInput
          label="Endereço"
          autoComplete={state.endereco}
          value={state.endereco}
          onChangeText={endereco => setState(st => ({ ...st, endereco }))}
          style={styles.input}
          autoCorrect={false}
          mode='flat'
        />

        <TextInput
          label="Bairro"
          autoComplete={state.bairro}
          value={state.bairro}
          onChangeText={bairro => setState(st => ({ ...st, bairro }))}
          style={styles.input}
          autoCorrect={false}
          mode='flat'
        />

        <TextInput
          label="Cidade"
          autoComplete={state.cidade}
          value={state.cidade}
          onChangeText={cidade => setState(st => ({ ...st, cidade }))}
          style={styles.input}
          autoCorrect={false}
          mode='flat'
        />

        <TextInput
          label="Estado"
          autoComplete={state.estado}
          value={state.estado}
          onChangeText={estado => setState(st => ({ ...st, estado }))}
          style={styles.input}
          autoCorrect={false}
          mode='flat'
        />

        <HelperText type="error" visible={error.state} style={{ textAlign: 'center' }}>{error.msg}</HelperText>


        <Button
          mode='contained'
          dark
          style={{ marginTop: 30 }}
          labelStyle={styles.button}
          onPress={onPress}
        >
          Cadastrar
        </Button>

      </View>
    </ImageBackground>
  );
}