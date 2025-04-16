import React from 'react';

interface TableRendererProps {
  children: React.ReactNode;
}

export const TableRenderer: React.FC<TableRendererProps> = ({ children }) => {
  return (
    <div className="table-wrapper">
      <table className="min-w-full divide-y divide-gray-200">
        {children}
      </table>
    </div>
  );
};

// Table sub-components
export const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <thead className="bg-gray-50">{children}</thead>
);

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
);

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <tr className="hover:bg-gray-50">{children}</tr>
);

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    {children}
  </th>
);

export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <td className="px-6 py-4 whitespace-pre-wrap text-sm text-gray-500">
    {children}
  </td>
); 