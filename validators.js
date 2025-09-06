export const validateNombre = (nombre) => {
  if (!nombre) return "El nombre es obligatorio";
  if (nombre.length < 3) return "El nombre debe tener al menos 3 caracteres";
  return "";
};

export const validateEmail = (email) => {
  if (!email) return "El correo es obligatorio";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "El correo debe tener un formato válido";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "La contraseña es obligatoria";
  if (password.length < 6) return "La contraseña debe tener al menos 6 caracteres";
  return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return "Debes confirmar la contraseña";
  if (password !== confirmPassword) return "Las contraseñas no coinciden";
  return "";
};

export const validateTelefono = (telefono) => {
  if (!telefono) return "El teléfono es obligatorio";
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(telefono)) return "El teléfono debe tener exactamente 10 dígitos";
  return "";
};

export const getPasswordStrength = (password) => {
  if (password.length < 6) return "Débil";
  if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8) return "Fuerte";
  if (password.length >= 6) return "Media";
  return "Débil";
};