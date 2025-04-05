
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'kn', name: 'Kannada' },
  { code: 'mr', name: 'Marathi' },
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
    // Add more common strings here
    ourMission: 'Our Mission',
    ourValues: 'Our Values',
    ourTeam: 'Our Team',
    startYourCampaign: 'Start Your Campaign',
    contactUs: 'Contact Us',
    getInTouch: 'Get In Touch',
    sendMessage: 'Send Message',
    yourName: 'Your name',
    yourEmail: 'Your email',
    yourMessage: 'Your message',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
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
    // Add more translations
    ourMission: 'हमारा मिशन',
    ourValues: 'हमारे मूल्य',
    ourTeam: 'हमारी टीम',
    startYourCampaign: 'अपना अभियान शुरू करें',
    contactUs: 'संपर्क करें',
    getInTouch: 'संपर्क में रहें',
    sendMessage: 'संदेश भेजें',
    yourName: 'आपका नाम',
    yourEmail: 'आपका ईमेल',
    yourMessage: 'आपका संदेश',
    email: 'ईमेल',
    phone: 'फोन',
    address: 'पता',
  },
  kn: {
    home: 'ಮುಖಪುಟ',
    aboutUs: 'ನಮ್ಮ ಬಗ್ಗೆ',
    mentorship: 'ಮಾರ್ಗದರ್ಶನ',
    crowdfunding: 'ಜನಸಮೂಹ ಧನಸಹಾಯ',
    scholarships: 'ವಿದ್ಯಾರ್ಥಿವೇತನ',
    contact: 'ಸಂಪರ್ಕ',
    signIn: 'ಸೈನ್ ಇನ್',
    signUp: 'ಸೈನ್ ಅಪ್',
    translate: 'ಅನುವಾದಿಸಿ',
    // Add more translations
    ourMission: 'ನಮ್ಮ ಮಿಷನ್',
    ourValues: 'ನಮ್ಮ ಮೌಲ್ಯಗಳು',
    ourTeam: 'ನಮ್ಮ ತಂಡ',
    startYourCampaign: 'ನಿಮ್ಮ ಕ್ಯಾಂಪೇನ್ ಪ್ರಾರಂಭಿಸಿ',
    contactUs: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    getInTouch: 'ಸಂಪರ್ಕದಲ್ಲಿರಿ',
    sendMessage: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    yourName: 'ನಿಮ್ಮ ಹೆಸರು',
    yourEmail: 'ನಿಮ್ಮ ಇಮೇಲ್',
    yourMessage: 'ನಿಮ್ಮ ಸಂದೇಶ',
    email: 'ಇಮೇಲ್',
    phone: 'ಫೋನ್',
    address: 'ವಿಳಾಸ',
  },
  mr: {
    home: 'मुख्यपृष्ठ',
    aboutUs: 'आमच्याबद्दल',
    mentorship: 'मार्गदर्शन',
    crowdfunding: 'क्राउडफंडिंग',
    scholarships: 'शिष्यवृत्ती',
    contact: 'संपर्क',
    signIn: 'साइन इन',
    signUp: 'साइन अप',
    translate: 'भाषांतर करा',
    // Add more translations
    ourMission: 'आमचे ध्येय',
    ourValues: 'आमची मूल्ये',
    ourTeam: 'आमचा संघ',
    startYourCampaign: 'तुमची मोहीम सुरू करा',
    contactUs: 'आमच्याशी संपर्क साधा',
    getInTouch: 'संपर्कात रहा',
    sendMessage: 'संदेश पाठवा',
    yourName: 'तुमचे नाव',
    yourEmail: 'तुमचा ईमेल',
    yourMessage: 'तुमचा संदेश',
    email: 'ईमेल',
    phone: 'फोन',
    address: 'पत्ता',
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
    // Add more translations
    ourMission: 'Nuestra Misión',
    ourValues: 'Nuestros Valores',
    ourTeam: 'Nuestro Equipo',
    startYourCampaign: 'Inicia tu Campaña',
    contactUs: 'Contáctanos',
    getInTouch: 'Ponte en Contacto',
    sendMessage: 'Enviar Mensaje',
    yourName: 'Tu nombre',
    yourEmail: 'Tu correo electrónico',
    yourMessage: 'Tu mensaje',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    address: 'Dirección',
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
    // Add more translations
    ourMission: 'Notre Mission',
    ourValues: 'Nos Valeurs',
    ourTeam: 'Notre Équipe',
    startYourCampaign: 'Démarrer Votre Campagne',
    contactUs: 'Contactez-Nous',
    getInTouch: 'Entrer en Contact',
    sendMessage: 'Envoyer un Message',
    yourName: 'Votre nom',
    yourEmail: 'Votre email',
    yourMessage: 'Votre message',
    email: 'Email',
    phone: 'Téléphone',
    address: 'Adresse',
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
    // Add more translations
    ourMission: 'Unsere Mission',
    ourValues: 'Unsere Werte',
    ourTeam: 'Unser Team',
    startYourCampaign: 'Starten Sie Ihre Kampagne',
    contactUs: 'Kontaktieren Sie Uns',
    getInTouch: 'Kontakt Aufnehmen',
    sendMessage: 'Nachricht Senden',
    yourName: 'Ihr Name',
    yourEmail: 'Ihre E-Mail',
    yourMessage: 'Ihre Nachricht',
    email: 'E-Mail',
    phone: 'Telefon',
    address: 'Adresse',
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
        kn: '[ಕನ್ನಡ] ',
        mr: '[मराठी] ',
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
