import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function PrivateChat(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.9999 15.5833H31.1666V11.9167C31.1666 6.85667 27.0599 2.75 21.9999 2.75C16.9399 2.75 12.8333 6.85667 12.8333 11.9167V15.5833H10.9999C8.98325 15.5833 7.33325 17.2333 7.33325 19.25V37.5833C7.33325 39.6 8.98325 41.25 10.9999 41.25H32.9999C35.0166 41.25 36.6666 39.6 36.6666 37.5833V19.25C36.6666 17.2333 35.0166 15.5833 32.9999 15.5833ZM16.4999 11.9167C16.4999 8.87333 18.9566 6.41667 21.9999 6.41667C25.0433 6.41667 27.4999 8.87333 27.4999 11.9167V15.5833H16.4999V11.9167ZM32.9999 37.5833H10.9999V19.25H32.9999V37.5833ZM21.9999 32.0833C24.0166 32.0833 25.6666 30.4333 25.6666 28.4167C25.6666 26.4 24.0166 24.75 21.9999 24.75C19.9833 24.75 18.3333 26.4 18.3333 28.4167C18.3333 30.4333 19.9833 32.0833 21.9999 32.0833Z"
        id="PrivateChat"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default PrivateChat;
