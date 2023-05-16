import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Remove(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.7482 14.6666L21.9998 19.415L17.2515 14.6666L14.6665 17.2516L19.4148 22L14.6665 26.7483L17.2515 29.3333L21.9998 24.585L26.7482 29.3333L29.3332 26.7483L24.5848 22L29.3332 17.2516L26.7482 14.6666ZM21.9998 3.66663C11.8615 3.66663 3.6665 11.8616 3.6665 22C3.6665 32.1383 11.8615 40.3333 21.9998 40.3333C32.1382 40.3333 40.3332 32.1383 40.3332 22C40.3332 11.8616 32.1382 3.66663 21.9998 3.66663ZM21.9998 36.6666C13.9148 36.6666 7.33317 30.085 7.33317 22C7.33317 13.915 13.9148 7.33329 21.9998 7.33329C30.0848 7.33329 36.6665 13.915 36.6665 22C36.6665 30.085 30.0848 36.6666 21.9998 36.6666Z"
        id="Remove"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Remove;
