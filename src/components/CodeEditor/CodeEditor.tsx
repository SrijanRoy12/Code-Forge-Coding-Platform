import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Settings } from 'lucide-react';
import { ProgrammingLanguage } from '../../types';
import { useThemeStore } from '../../store/themeStore';
import { motion } from 'framer-motion';

interface CodeEditorProps {
  language: ProgrammingLanguage;
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  onSubmit: () => void;
  onReset: () => void;
  isRunning?: boolean;
  isSubmitting?: boolean;
}

const LANGUAGE_OPTIONS = [
  { value: 'python' as ProgrammingLanguage, label: 'Python', extension: 'py' },
  { value: 'javascript' as ProgrammingLanguage, label: 'JavaScript', extension: 'js' },
  { value: 'typescript' as ProgrammingLanguage, label: 'TypeScript', extension: 'ts' },
  { value: 'java' as ProgrammingLanguage, label: 'Java', extension: 'java' },
  { value: 'cpp' as ProgrammingLanguage, label: 'C++', extension: 'cpp' },
  { value: 'c' as ProgrammingLanguage, label: 'C', extension: 'c' },
  { value: 'csharp' as ProgrammingLanguage, label: 'C#', extension: 'cs' },
  { value: 'go' as ProgrammingLanguage, label: 'Go', extension: 'go' },
  { value: 'rust' as ProgrammingLanguage, label: 'Rust', extension: 'rs' },
];

export const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  value,
  onChange,
  onRun,
  onSubmit,
  onReset,
  isRunning = false,
  isSubmitting = false,
}) => {
  const { isDark } = useThemeStore();
  const [selectedLanguage, setSelectedLanguage] = useState(language);

  const handleLanguageChange = (newLanguage: ProgrammingLanguage) => {
    setSelectedLanguage(newLanguage);
    // Notify parent component about language change
    // This will be handled by the parent component
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      {/* Editor Header */}
      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <select
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value as ProgrammingLanguage)}
            className="px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Settings className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Reset Code"
          >
            <RotateCcw className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRun}
            disabled={isRunning}
            className="flex items-center space-x-2 px-4 py-2 bg-success-600 text-white rounded-md hover:bg-success-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Play className="h-4 w-4" />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSubmit}
            disabled={isSubmitting}
            className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </motion.button>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={selectedLanguage}
          value={value}
          onChange={(value) => onChange(value || '')}
          theme={isDark ? 'vs-dark' : 'light'}
          options={{
            minimap: { enabled: true },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            insertSpaces: true,
            wordWrap: 'on',
            contextmenu: true,
            selectOnLineNumbers: true,
            matchBrackets: 'always',
            autoClosingBrackets: 'always',
            autoClosingQuotes: 'always',
            folding: true,
            foldingHighlight: true,
            foldingStrategy: 'indentation',
            showFoldingControls: 'mouseover',
            unfoldOnClickAfterEndOfLine: true,
            bracketPairColorization: {
              enabled: true,
            },
          }}
        />
      </div>
    </div>
  );
};