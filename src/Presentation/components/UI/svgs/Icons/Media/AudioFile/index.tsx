import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function AudioFile(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.375 21.9999C34.375 18.7549 32.505 15.9683 29.7917 14.6116V29.3699C32.505 28.0316 34.375 25.2449 34.375 21.9999ZM9.625 16.4999V27.4999H16.9583L26.125 36.6666V7.33325L16.9583 16.4999H9.625Z"
        id="AudioFile"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default AudioFile;
