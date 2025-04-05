
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation, LANGUAGES } from '@/contexts/TranslationContext';

interface LanguageDropdownProps {
  className?: string;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ className }) => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={className}
          title={t('translate')}
        >
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-2 ${language === lang.code ? 'bg-accent text-accent-foreground' : ''}`}
          >
            <span>{lang.name}</span>
            {language === lang.code && (
              <span className="ml-auto h-2 w-2 rounded-full bg-blue-600"></span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
