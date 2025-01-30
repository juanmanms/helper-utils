import { useState } from 'react';
import { generateRandomPassword, generateSecurePhrase } from '../utils/passwordUtils';

const usePasswordGenerator = () => {
  const [password, setPassword] = useState<string>('');
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [usePhrase, setUsePhrase] = useState<boolean>(false);

  const generatePassword = (): void => {
    if (usePhrase) {
      setPassword(generateSecurePhrase(includeNumbers, includeSymbols));
    } else {
      setPassword(
        generateRandomPassword(length, includeUppercase, includeNumbers, includeSymbols)
      );
    }
  };

  return {
    password,
    length,
    setLength,
    includeUppercase,
    setIncludeUppercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    usePhrase,
    setUsePhrase,
    generatePassword,
  };
};

export default usePasswordGenerator;