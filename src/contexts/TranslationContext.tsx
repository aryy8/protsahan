
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
];

// Create a type for our translations
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

// Initial translations for common UI elements
const initialTranslations: Translations = {
  en: {
    home: 'Home',
    aboutUs: 'About Us',
    mentorship: 'Mentorship',
    crowdfunding: 'Crowdfunding',
    scholarships: 'Scholarships',
    contact: 'Contact',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    translate: 'Translate',
  },
  hi: {
    home: 'होम',
    aboutUs: 'हमारे बारे में',
    mentorship: 'मेंटरशिप',
    crowdfunding: 'क्राउडफंडिंग',
    scholarships: 'छात्रवृत्ति',
    contact: 'संपर्क',
    signIn: 'साइन इन',
    signUp: 'साइन अप',
    translate: 'अनुवाद करें',
  },
  es: {
    home: 'Inicio',
    aboutUs: 'Sobre Nosotros',
    mentorship: 'Mentoría',
    crowdfunding: 'Financiación Colectiva',
    scholarships: 'Becas',
    contact: 'Contacto',
    signIn: 'Iniciar Sesión',
    signUp: 'Registrarse',
    translate: 'Traducir',
  },
  fr: {
    home: 'Accueil',
    aboutUs: 'À Propos',
    mentorship: 'Mentorat',
    crowdfunding: 'Financement',
    scholarships: 'Bourses',
    contact: 'Contact',
    signIn: 'Se Connecter',
    signUp: 'S\'inscrire',
    translate: 'Traduire',
  },
  de: {
    home: 'Startseite',
    aboutUs: 'Über Uns',
    mentorship: 'Mentorschaft',
    crowdfunding: 'Crowdfunding',
    scholarships: 'Stipendien',
    contact: 'Kontakt',
    signIn: 'Anmelden',
    signUp: 'Registrieren',
    translate: 'Übersetzen',
  },
};

type TranslationContextType = {
  language: string;
  setLanguage: (code: string) => void;
  t: (key: string) => string;
  translateText: (text: string, targetLang: string) => Promise<string>;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState<Translations>(initialTranslations);

  // Function to get a translated value
  const t = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    return translations.en[key] || key;
  };

  // Function to translate text using Google Translate API or similar
  const translateText = async (text: string, targetLang: string): Promise<string> => {
    try {
      // For demonstration, we'll use a mock implementation
      // In a real app, you would call a translation API here
      console.log(`Translating "${text}" to ${targetLang}`);
      
      // For now, return a simulated translation based on language
      if (targetLang === 'en') return text;
      
      // Mock translation by adding a prefix based on language
      const prefixes: {[key: string]: string} = {
        hi: '[हिंदी] ',
        es: '[Español] ',
        fr: '[Français] ',
        de: '[Deutsch] ',
      };
      
      return prefixes[targetLang] + text;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text on error
    }
  };

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, translateText }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
