import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function AddContact(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.4999 22C31.5516 22 34.8333 18.7183 34.8333 14.6666C34.8333 10.615 31.5516 7.33331 27.4999 7.33331C23.4483 7.33331 20.1666 10.615 20.1666 14.6666C20.1666 18.7183 23.4483 22 27.4999 22ZM27.4999 11C29.5166 11 31.1666 12.65 31.1666 14.6666C31.1666 16.6833 29.5166 18.3333 27.4999 18.3333C25.4833 18.3333 23.8333 16.6833 23.8333 14.6666C23.8333 12.65 25.4833 11 27.4999 11ZM27.4999 25.6666C22.6049 25.6666 12.8333 28.1233 12.8333 33V36.6666H42.1666V33C42.1666 28.1233 32.3949 25.6666 27.4999 25.6666ZM16.4999 33C16.9033 31.68 22.5683 29.3333 27.4999 29.3333C32.4499 29.3333 38.1333 31.6983 38.4999 33H16.4999ZM10.9999 27.5V22H16.4999V18.3333H10.9999V12.8333H7.33325V18.3333H1.83325V22H7.33325V27.5H10.9999Z"
        id="AddContact"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default AddContact;
