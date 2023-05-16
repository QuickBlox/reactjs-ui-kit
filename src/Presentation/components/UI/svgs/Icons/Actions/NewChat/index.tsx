import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function NewChat(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.3334 7.33335C40.3334 5.31669 38.6834 3.66669 36.6667 3.66669H7.33341C5.31675 3.66669 3.66675 5.31669 3.66675 7.33335V29.3334C3.66675 31.35 5.31675 33 7.33341 33H33.0001L40.3334 40.3334V7.33335ZM36.6667 31.4784L34.5217 29.3334H7.33341V7.33335H36.6667V31.4784ZM23.8334 9.16669H20.1667V16.5H12.8334V20.1667H20.1667V27.5H23.8334V20.1667H31.1667V16.5H23.8334V9.16669Z"
        id="NewChat"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default NewChat;
