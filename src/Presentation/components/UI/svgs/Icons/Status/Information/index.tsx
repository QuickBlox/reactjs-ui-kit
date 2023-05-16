import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Information(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1667 27.5001H23.8334V31.1667H20.1667V27.5001ZM20.1667 12.8334H23.8334V23.8334H20.1667V12.8334ZM21.9817 3.66675C11.8617 3.66675 3.66675 11.8801 3.66675 22.0001C3.66675 32.1201 11.8617 40.3334 21.9817 40.3334C32.1201 40.3334 40.3334 32.1201 40.3334 22.0001C40.3334 11.8801 32.1201 3.66675 21.9817 3.66675ZM22.0001 36.6667C13.8967 36.6667 7.33341 30.1034 7.33341 22.0001C7.33341 13.8967 13.8967 7.33341 22.0001 7.33341C30.1034 7.33341 36.6667 13.8967 36.6667 22.0001C36.6667 30.1034 30.1034 36.6667 22.0001 36.6667Z"
        id="Information"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Information;
