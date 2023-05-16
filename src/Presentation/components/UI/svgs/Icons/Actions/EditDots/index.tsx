import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function EditDots(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '32'}
      height={theme && theme.height ? theme.height : '32'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 12C17.1 12 18 11.1 18 10C18 8.9 17.1 8 16 8C14.9 8 14 8.9 14 10C14 11.1 14.9 12 16 12ZM16 14C14.9 14 14 14.9 14 16C14 17.1 14.9 18 16 18C17.1 18 18 17.1 18 16C18 14.9 17.1 14 16 14ZM16 20C14.9 20 14 20.9 14 22C14 23.1 14.9 24 16 24C17.1 24 18 23.1 18 22C18 20.9 17.1 20 16 20Z"
        id="EditDots"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default EditDots;
