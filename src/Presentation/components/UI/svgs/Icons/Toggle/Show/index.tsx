import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Show(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0002 8.25C12.8335 8.25 5.00516 13.9517 1.8335 22C5.00516 30.0483 12.8335 35.75 22.0002 35.75C31.1668 35.75 38.9952 30.0483 42.1668 22C38.9952 13.9517 31.1668 8.25 22.0002 8.25ZM22.0002 31.1667C16.9402 31.1667 12.8335 27.06 12.8335 22C12.8335 16.94 16.9402 12.8333 22.0002 12.8333C27.0602 12.8333 31.1668 16.94 31.1668 22C31.1668 27.06 27.0602 31.1667 22.0002 31.1667ZM22.0002 16.5C18.9568 16.5 16.5002 18.9567 16.5002 22C16.5002 25.0433 18.9568 27.5 22.0002 27.5C25.0435 27.5 27.5002 25.0433 27.5002 22C27.5002 18.9567 25.0435 16.5 22.0002 16.5Z"
        id="Show"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Show;
