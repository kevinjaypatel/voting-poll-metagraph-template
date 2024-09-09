import React from 'react';

interface ReadOnlyTextBlockProps {
  text: string;
  className?: string;
}

const ReadOnlyTextBlock: React.FC<ReadOnlyTextBlockProps> = ({ text, className = '' }) => {
  return (
    <div
      className={`bg-gray-100 border border-gray-300 rounded-md p-3 whitespace-pre-wrap break-words ${className}`}
      aria-readonly="true"
      tabIndex={0}
    >
      {text}
    </div>
  );
};

export default ReadOnlyTextBlock;