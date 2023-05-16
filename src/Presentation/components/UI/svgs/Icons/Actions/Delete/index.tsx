import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Delete(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0001 34.8333C11.0001 36.85 12.6501 38.5 14.6667 38.5H29.3334C31.3501 38.5 33.0001 36.85 33.0001 34.8333V12.8333H11.0001V34.8333ZM14.6667 16.5H29.3334V34.8333H14.6667V16.5ZM28.4167 7.33333L26.5834 5.5H17.4167L15.5834 7.33333H9.16675V11H34.8334V7.33333H28.4167Z"
        id="Delete"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Delete;
