import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, ImageBackground, ScrollView, Text, View } from 'react-native';
import { Button, HelperText, RadioButton, TextInput } from 'react-native-paper';
import { styles } from './styles';

interface ConsumeProps {
  navigation: NativeStackNavigationProp<any, any>
};

export default function Consume({ navigation }: ConsumeProps) {
  const [state, setState] = useState({ jan: '', fev: '', mar: '', abr: '', jun: '', jul: '', ago: '', set: '', out: '', nov: '', dez: '' });

  const [error, setError] = useState({ state: false, msg: '' });

  const [checked, setChecked] = useState('bifásico');

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
      "Consumo",
      "Dados de consumo armazenandos, gerando relátorio..."
    ))
  }

  return (
    <ImageBackground source={require("./../../assets/wallpaper3.jpg")} resizeMode="cover" style={styles.image}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Consumo Mensal</Text>
          <TextInput
            label="Janeiro"
            autoComplete={state.jan}
            value={state.jan}
            onChangeText={jan => setState(st => ({ ...st, jan }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Fevereiro"
            autoComplete={state.fev}
            value={state.fev}
            onChangeText={fev => setState(st => ({ ...st, fev }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Março"
            autoComplete={state.mar}
            value={state.mar}
            onChangeText={mar => setState(st => ({ ...st, mar }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Abril"
            autoComplete={state.abr}
            value={state.abr}
            onChangeText={abr => setState(st => ({ ...st, abr }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Junho"
            autoComplete={state.jun}
            value={state.jun}
            onChangeText={jun => setState(st => ({ ...st, jun }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Junlho"
            autoComplete={state.jul}
            value={state.jul}
            onChangeText={jul => setState(st => ({ ...st, jul }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Agosto"
            autoComplete={state.ago}
            value={state.ago}
            onChangeText={ago => setState(st => ({ ...st, ago }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Setembro"
            autoComplete={state.set}
            value={state.set}
            onChangeText={set => setState(st => ({ ...st, set }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Outubro"
            autoComplete={state.out}
            value={state.out}
            onChangeText={out => setState(st => ({ ...st, out }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Novembro"
            autoComplete={state.nov}
            value={state.nov}
            onChangeText={nov => setState(st => ({ ...st, nov }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <TextInput
            label="Dezembro"
            autoComplete={state.dez}
            value={state.dez}
            onChangeText={dez => setState(st => ({ ...st, dez }))}
            style={styles.input}
            autoCorrect={false}
            mode='flat'
            keyboardType="numeric"
          />

          <View style={styles.radioContainer}>
            <RadioButton
              value="bifásico"
              status={checked === 'bifásico' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('bifásico')}
              uncheckedColor="#fff"
            />
            <Text style={styles.label}>Bifásico</Text>
          </View>

          <View style={styles.radioContainer}>
            <RadioButton
              value="trifásico"
              status={checked === 'trifásico' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('trifásico')}
              uncheckedColor="#fff"
            />
            <Text style={styles.label}>Trifásico</Text>
          </View>

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
      </ScrollView>
    </ImageBackground >
  );
}