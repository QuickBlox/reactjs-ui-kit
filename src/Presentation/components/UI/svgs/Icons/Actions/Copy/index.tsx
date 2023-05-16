import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Copy(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.2502 1.83337H8.25016C6.2335 1.83337 4.5835 3.48337 4.5835 5.50004V31.1667H8.25016V5.50004H30.2502V1.83337ZM35.7502 9.16671H15.5835C13.5668 9.16671 11.9168 10.8167 11.9168 12.8334V38.5C11.9168 40.5167 13.5668 42.1667 15.5835 42.1667H35.7502C37.7668 42.1667 39.4168 40.5167 39.4168 38.5V12.8334C39.4168 10.8167 37.7668 9.16671 35.7502 9.16671ZM35.7502 38.5H15.5835V12.8334H35.7502V38.5Z"
        id="Copy"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Copy;
