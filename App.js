import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telefono, setTelefono] = useState('');

  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');

  const validateForm = () => {
    let valid = true;

    // Validación de nombre
    if (!nombre) {
      setNombreError('El nombre es obligatorio');
      valid = false;
    } else if (nombre.length < 3) {
      setNombreError('El nombre debe tener al menos 3 caracteres');
      valid = false;
    } else {
      setNombreError('');
    }

    // Validación de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('El correo es obligatorio');
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('El correo debe tener un formato válido');
      valid = false;
    } else {
      setEmailError('');
    }

    // Validación de contraseña
    if (!password) {
      setPasswordError('La contraseña es obligatoria');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      valid = false;
    } else {
      setPasswordError('');
    }

    // Validación de confirmación de contraseña
    if (!confirmPassword) {
      setConfirmPasswordError('Debes confirmar la contraseña');
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Las contraseñas no coinciden');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    // Validación de teléfono
    const phoneRegex = /^\d{10}$/;
    if (!telefono) {
      setTelefonoError('El teléfono es obligatorio');
      valid = false;
    } else if (!phoneRegex.test(telefono)) {
      setTelefonoError('El teléfono debe tener exactamente 10 dígitos');
      valid = false;
    } else {
      setTelefonoError('');
    }

    if (valid) {
      Alert.alert('Registro exitoso');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrate</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      {nombreError ? <Text style={styles.error}>{nombreError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="numeric"
        maxLength={10}
      />
      {telefonoError ? <Text style={styles.error}>{telefonoError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={validateForm}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 2, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 5, marginTop: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  error: { color: 'red', marginBottom: 8, marginLeft: 2 },
});