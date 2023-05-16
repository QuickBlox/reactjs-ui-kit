import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Notifications(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9999 39.875C24.0166 39.875 25.6666 38.225 25.6666 36.2083H18.3333C18.3333 38.225 19.9833 39.875 21.9999 39.875ZM32.9999 28.875V19.7083C32.9999 14.08 30.0116 9.36833 24.7499 8.12167V6.875C24.7499 5.35333 23.5216 4.125 21.9999 4.125C20.4783 4.125 19.2499 5.35333 19.2499 6.875V8.12167C14.0066 9.36833 10.9999 14.0617 10.9999 19.7083V28.875L7.33325 32.5417V34.375H36.6666V32.5417L32.9999 28.875ZM29.3333 30.7083H14.6666V19.7083C14.6666 15.1617 17.4349 11.4583 21.9999 11.4583C26.5649 11.4583 29.3333 15.1617 29.3333 19.7083V30.7083Z"
        id="Notifications"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Notifications;
