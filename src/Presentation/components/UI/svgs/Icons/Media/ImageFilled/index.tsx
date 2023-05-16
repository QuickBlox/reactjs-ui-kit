import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function ImageFilled(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.5 34.8333V9.16667C38.5 7.15 36.85 5.5 34.8333 5.5H9.16667C7.15 5.5 5.5 7.15 5.5 9.16667V34.8333C5.5 36.85 7.15 38.5 9.16667 38.5H34.8333C36.85 38.5 38.5 36.85 38.5 34.8333ZM15.5833 24.75L20.1667 30.2683L26.5833 22L34.8333 33H9.16667L15.5833 24.75Z"
        id="ImageFilled"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default ImageFilled;
