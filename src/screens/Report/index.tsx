import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from './styles';

type RootStackParamList = {
  Report: { consume: Number, average: Number, pfv: Number, pfvi: Number, pp: Number, qp: Number, sistema: string, circuito: string } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Report'>;

export default function Report({ route, navigation }: Props) {

  const { consume = 0, average = 0, pfv = 0, pfvi = 0, pp = 0, qp = 0, sistema = '', circuito = '' } = route.params || {};

  return (
    <ImageBackground source={require("./../../assets/wallpaper5.jpg")} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Consumo anual:</Text>
          <Text style={styles.info}>{consume} kWh/ano</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Consumo médio mensal:</Text>
          <Text style={styles.info}>{average} kWh/mês</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Potencia do sistema:</Text>
          <Text style={styles.info}>{pfv} kWp</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Inversor de "valor da conta":</Text>
          <Text style={styles.info}>{pfvi} kW</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Quantidade de painéis:</Text>
          <Text style={styles.info}>{qp}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Potencia dos painéis:</Text>
          <Text style={styles.info}>{pp} w</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Sistema:</Text>
          <Text style={styles.info}>{sistema}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.label}>Circuito:</Text>
          <Text style={styles.info}>{circuito}</Text>
        </View>

        <Button
          mode='contained'
          dark
          style={{ marginTop: 30 }}
          labelStyle={styles.button}
          onPress={() => navigation.navigate('Consume')}
        >
          Editar dados
        </Button>
      </View>
    </ImageBackground>
  );
}