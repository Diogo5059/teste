// src/hooks/useLocalStorage.jsx
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    
    try {
      // Tentar obter valor do localStorage
      const item = window.localStorage.getItem(key);
      // Analisar o JSON armazenado ou retornar initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  
  // Atualizar localStorage quando o estado mudar
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // Salvar estado
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.log(error);
      }
    }
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue];
}