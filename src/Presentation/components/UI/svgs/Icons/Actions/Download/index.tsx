import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Download(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.8333 22V34.8333H9.16667V22H5.5V34.8333C5.5 36.85 7.15 38.5 9.16667 38.5H34.8333C36.85 38.5 38.5 36.85 38.5 34.8333V22H34.8333ZM23.8333 23.2283L28.5817 18.4983L31.1667 21.0833L22 30.25L12.8333 21.0833L15.4183 18.4983L20.1667 23.2283V5.5H23.8333V23.2283Z"
        id="Download"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Download;
