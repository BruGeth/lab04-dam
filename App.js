import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import {
  validateNombre,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateTelefono,
  getPasswordStrength,
} from "./validators";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [telefono, setTelefono] = useState("");

  const [nombreError, setNombreError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [telefonoError, setTelefonoError] = useState("");

  // Validación en tiempo real
  const handleNombre = (text) => {
    setNombre(text);
    setNombreError(validateNombre(text));
  };
  const handleEmail = (text) => {
    setEmail(text);
    setEmailError(validateEmail(text));
  };
  const handlePassword = (text) => {
    setPassword(text);
    setPasswordError(validatePassword(text));
  };
  const handleConfirmPassword = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError(validateConfirmPassword(password, text));
  };
  const handleTelefono = (text) => {
    setTelefono(text);
    setTelefonoError(validateTelefono(text));
  };

  const validateForm = () => {
    const nombreErr = validateNombre(nombre);
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    const confirmPasswordErr = validateConfirmPassword(password, confirmPassword);
    const telefonoErr = validateTelefono(telefono);

    setNombreError(nombreErr);
    setEmailError(emailErr);
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmPasswordErr);
    setTelefonoError(telefonoErr);

    if (
      !nombreErr &&
      !emailErr &&
      !passwordErr &&
      !confirmPasswordErr &&
      !telefonoErr
    ) {
      Alert.alert("Registro exitoso");
    }
  };

  // Íconos según validez
  const getIcon = (error, value) => {
    if (!value) return "";
    return error ? "❌" : "✅";
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Registrate</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={nombre}
            onChangeText={handleNombre}
            placeholderTextColor="#888"
          />
          <Text style={styles.icon}>{getIcon(nombreError, nombre)}</Text>
        </View>
        {nombreError ? <Text style={styles.error}>{nombreError}</Text> : null}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={handleEmail}
            keyboardType="email-address"
            placeholderTextColor="#888"
          />
          <Text style={styles.icon}>{getIcon(emailError, email)}</Text>
        </View>
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={handlePassword}
            placeholderTextColor="#888"
          />
          <Text style={styles.icon}>{getIcon(passwordError, password)}</Text>
        </View>
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        <Text style={[styles.strength, 
          getPasswordStrength(password)==="Fuerte"?styles.strong:
          getPasswordStrength(password)==="Media"?styles.medium:
          styles.weak
        ]}>
          Fortaleza: {getPasswordStrength(password)}
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={handleConfirmPassword}
            placeholderTextColor="#888"
          />
          <Text style={styles.icon}>{getIcon(confirmPasswordError, confirmPassword)}</Text>
        </View>
        {confirmPasswordError ? (
          <Text style={styles.error}>{confirmPasswordError}</Text>
        ) : null}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={telefono}
            onChangeText={handleTelefono}
            keyboardType="numeric"
            maxLength={10}
            placeholderTextColor="#888"
          />
          <Text style={styles.icon}>{getIcon(telefonoError, telefono)}</Text>
        </View>
        {telefonoError ? (
          <Text style={styles.error}>{telefonoError}</Text>
        ) : null}

        <TouchableOpacity style={styles.button} onPress={validateForm}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 28,
    textAlign: "center",
    color: "#22223b",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#bfc0c0",
    backgroundColor: "#f7f7fa",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: "#22223b",
  },
  icon: {
    fontSize: 22,
    marginLeft: 8,
  },
  button: {
    backgroundColor: "#4ea8de",
    padding: 16,
    borderRadius: 10,
    marginTop: 22,
    shadowColor: "#4ea8de",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 1,
  },
  error: {
    color: "#e63946",
    marginBottom: 10,
    marginLeft: 2,
    fontSize: 14,
  },
  strength: {
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 2,
    fontSize: 15,
  },
  weak: {
    color: "#e63946",
  },
  medium: {
    color: "#f9a826",
  },
  strong: {
    color: "#43aa8b",
  },
});