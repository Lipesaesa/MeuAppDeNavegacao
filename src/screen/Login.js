import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
  const [usuario, onChangeUsuario] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <TextInput
          style={styles.input}
          onChangeText={onChangeUsuario}
          value={usuario}
          placeholder="Digite aqui o seu Usuario"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Digite aqui a sua Senha"
          keyboardType="text"
        />
      <View style={styles.buttonContainer}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('UsuarioLogado')}
        />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#dda0dd',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
  },
   input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
