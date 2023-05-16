import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Remove2(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8332 20.1666V23.8333H31.1665V20.1666H12.8332ZM21.9998 3.66663C11.8798 3.66663 3.6665 11.88 3.6665 22C3.6665 32.12 11.8798 40.3333 21.9998 40.3333C32.1198 40.3333 40.3332 32.12 40.3332 22C40.3332 11.88 32.1198 3.66663 21.9998 3.66663ZM21.9998 36.6666C13.9148 36.6666 7.33317 30.085 7.33317 22C7.33317 13.915 13.9148 7.33329 21.9998 7.33329C30.0848 7.33329 36.6665 13.915 36.6665 22C36.6665 30.085 30.0848 36.6666 21.9998 36.6666Z"
        id="Remove2"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Remove2;
