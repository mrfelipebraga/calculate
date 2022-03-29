import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Alert, ImageBackground, ScrollView, Text, View } from 'react-native';
import { Button, HelperText, RadioButton, TextInput } from 'react-native-paper';
import { styles } from './styles';

interface ConsumeProps {
  navigation: NativeStackNavigationProp<any, any>
};

export default function Consume({ navigation }: ConsumeProps) {
  const [state, setState] = useState({ jan: '', fev: '', mar: '', abr: '', mai: '', jun: '', jul: '', ago: '', set: '', out: '', nov: '', dez: '' });

  const [error, setError] = useState({ state: false, msg: '' });

  const [checked, setChecked] = useState('bifásico');
  const [checkedCircuito, setCheckedCircuito] = useState('s');

  const onPress = () => {
    const el = Object.values(state).filter(el => el == '');

    console.log(el)

    if (el.length) {
      setError({ state: true, msg: 'Você deve preencher todos os campos!' });
      return;
    } else {
      setError({ state: false, msg: '' })
    }

    let consume = 0;
    let average = 0;
    let irr = 1934.5;
    let tax = checked === 'bifásico' ? 50 : 100;

    Object.values(state).forEach(mes => {
      consume += (+mes - tax);
      console.log(mes, tax, consume)
    });

    average = Math.round(consume / 12);

    let pfv = (consume / irr) / 0.85;
    let pp = 330;
    let qp = Math.ceil(pfv / pp);
    let pfvi = (pfv * 0.75).toFixed(2);

    let sistema = checked === 'bifásico' ? 'Bifásico' : 'Trifásico';
    let circuito = checkedCircuito === 'p' ? 'Paralelo' : "Série";

    return (Alert.alert(
      "Consumo",
      "Dados de consumo armazenandos, gerando relátorio...",
      [
        { text: "Ok", onPress: () => navigation.navigate('Report', { consume, average, pfv: pfv.toFixed(2), pfvi, pp, qp, sistema, circuito }) }
      ]
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
            label="Maio"
            autoComplete={state.mai}
            value={state.mai}
            onChangeText={mai => setState(st => ({ ...st, mai }))}
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
            label="Julho"
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

          <Text style={styles.textInfo}>Sistema:</Text>

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

          <Text style={styles.textInfo}>Circuito:</Text>

          <View style={styles.radioContainer}>
            <RadioButton
              value="s"
              status={checkedCircuito === 's' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedCircuito('s')}
              uncheckedColor="#fff"
            />
            <Text style={styles.label}>Série</Text>
          </View>

          <View style={styles.radioContainer}>
            <RadioButton
              value="p"
              status={checkedCircuito === 'p' ? 'checked' : 'unchecked'}
              onPress={() => setCheckedCircuito('p')}
              uncheckedColor="#fff"
            />
            <Text style={styles.label}>Paralelo</Text>
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