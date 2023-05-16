import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function TextDocument(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.6668 3.66675H11.0002C8.9835 3.66675 7.35183 5.31675 7.35183 7.33341L7.3335 36.6667C7.3335 38.6834 8.96516 40.3334 10.9818 40.3334H33.0002C35.0168 40.3334 36.6668 38.6834 36.6668 36.6667V14.6667L25.6668 3.66675ZM29.3335 33.0001H14.6668V29.3334H29.3335V33.0001ZM29.3335 25.6667H14.6668V22.0001H29.3335V25.6667ZM23.8335 16.5001V6.41675L33.9168 16.5001H23.8335Z"
        id="TextDocument"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default TextDocument;
