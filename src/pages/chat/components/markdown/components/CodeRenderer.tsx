import React from 'react';

interface CodeRendererProps {
  children: React.ReactNode;
  inline?: boolean;
  className?: string;
}

export const CodeRenderer: React.FC<CodeRendererProps> = ({ 
  children, 
  inline = false,
  className = ''
}) => {
  const isLanguageSpecified = className?.startsWith('language-');
  
  if (inline) {
    return (
      <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    );
  }

  return (
    <pre className={`${isLanguageSpecified ? className : ''} bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto`}>
      <code className="text-sm font-mono">
        {children}
      </code>
    </pre>
  );
}; 