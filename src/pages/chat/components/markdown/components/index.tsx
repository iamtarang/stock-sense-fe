import React from 'react';
import type { Components } from 'react-markdown';
import { TableRenderer } from './TableRenderer';
import { CodeRenderer } from './CodeRenderer';

export const MarkdownComponents: Components = {
  // Table components
  table: ({ children }) => (
    <TableRenderer>{children}</TableRenderer>
  ),
  
  // Text formatting
  p: ({ children }) => (
    <p className="text-gray-700 text-sm leading-relaxed mb-4">{children}</p>
  ),
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-gray-900 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-gray-900 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-medium text-gray-900 mb-2">{children}</h3>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 text-sm text-gray-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 text-sm text-gray-700">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="mb-2">{children}</li>
  ),

  // Code
  code: ({ node, inline, children, ...props }) => (
    <CodeRenderer inline={!!inline} {...props}>{children}</CodeRenderer>
  ),

  // Links
  a: ({ children, href }) => (
    <a 
      href={href}
      className="text-blue-600 hover:text-blue-800 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-200 pl-4 py-2 mb-4 italic text-gray-600">
      {children}
    </blockquote>
  ),
}; 