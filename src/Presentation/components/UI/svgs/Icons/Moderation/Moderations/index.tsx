import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Moderations(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 31.1667V34.8333H16.5V31.1667H5.5ZM5.5 9.16667V12.8333H23.8333V9.16667H5.5ZM23.8333 38.5V34.8333H38.5V31.1667H23.8333V27.5H20.1667V38.5H23.8333ZM12.8333 16.5V20.1667H5.5V23.8333H12.8333V27.5H16.5V16.5H12.8333ZM38.5 23.8333V20.1667H20.1667V23.8333H38.5ZM27.5 16.5H31.1667V12.8333H38.5V9.16667H31.1667V5.5H27.5V16.5Z"
        id="Moderations"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Moderations;
