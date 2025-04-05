
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import VoiceInput from './VoiceInput';

interface VoiceFormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onVoiceResult: (text: string) => void;
  error?: string;
  as?: 'input' | 'textarea' | 'select';
  children?: React.ReactNode;
  rows?: number;
}

const VoiceFormField: React.FC<VoiceFormFieldProps> = ({
  label,
  id,
  name,
  type = 'text',
  required = false,
  placeholder,
  value,
  onChange,
  onVoiceResult,
  error,
  as = 'input',
  children,
  rows = 3
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        {as === 'input' && (
          <Input
            id={id}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-grow"
          />
        )}
        
        {as === 'textarea' && (
          <Textarea
            id={id}
            name={name}
            rows={rows}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="flex-grow"
          />
        )}
        
        {as === 'select' && (
          <select
            id={id}
            name={name}
            required={required}
            value={value}
            onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
            className="flex-grow appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            {children}
          </select>
        )}
        
        <VoiceInput 
          fieldType={name} 
          onResult={onVoiceResult}
          className="ml-2" 
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default VoiceFormField;
