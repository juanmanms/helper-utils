// src/utils/passwordUtils.ts

// Lista de palabras en español
const words: string[] = [
    'gato', 'perro', 'casa', 'árbol', 'sol', 'luna', 'cielo', 'flor', 'agua', 'fuego',
    'tierra', 'viento', 'montaña', 'río', 'mar', 'libro', 'mesa', 'silla', 'puerta', 'ventana'
  ];
  
  // Generar una contraseña completamente aleatoria
  export const generateRandomPassword = (
    length: number,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean
  ): string => {
    const lowercaseLetters: string = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers: string = '0123456789';
    const symbols: string = '!@#$%^&*()_+{}:"<>?[];,./`~';
  
    let characters: string = lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
  
    let generatedPassword: string = '';
    for (let i = 0; i < length; i++) {
      const randomIndex: number = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
  
    return generatedPassword;
  };
  
  // Generar una frase segura
  export const generateSecurePhrase = (
    includeNumbers: boolean,
    includeSymbols: boolean
  ): string => {
    // Seleccionar 2-4 palabras al azar
    const numWords: number = Math.floor(Math.random() * 3) + 2; // Entre 2 y 4 palabras
    let phrase: string = '';
  
    for (let i = 0; i < numWords; i++) {
      const randomWord: string = words[Math.floor(Math.random() * words.length)];
      phrase += randomWord;
    }
  
    // Aplicar transformaciones
    phrase = phrase
      .replace(/a/gi, '@')  // Reemplazar 'a' por '@'
      .replace(/e/gi, '3')  // Reemplazar 'e' por '3'
      .replace(/i/gi, '1')  // Reemplazar 'i' por '1'
      .replace(/o/gi, '0')  // Reemplazar 'o' por '0'
      .replace(/s/gi, '$'); // Reemplazar 's' por '$'
  
    // Añadir un número y un símbolo al azar
    if (includeNumbers) {
      const randomNumber: string = Math.floor(Math.random() * 10).toString();
      phrase += randomNumber;
    }
    if (includeSymbols) {
      const symbols: string = '!@#$%^&*()_+{}:"<>?[];,./`~';
      const randomSymbol: string = symbols[Math.floor(Math.random() * symbols.length)];
      phrase += randomSymbol;
    }
  
    return phrase;
  };