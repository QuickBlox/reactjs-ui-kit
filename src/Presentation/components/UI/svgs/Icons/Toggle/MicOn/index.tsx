import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function MicOn(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="MicOn"
    >
      <path
        d="M22.0001 26.5833C25.0434 26.5833 27.5001 24.1266 27.5001 21.0833V10.0833C27.5001 7.03992 25.0434 4.58325 22.0001 4.58325C18.9567 4.58325 16.5001 7.03992 16.5001 10.0833V21.0833C16.5001 24.1266 18.9567 26.5833 22.0001 26.5833Z"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
      <path
        d="M31.1667 21.0833C31.1667 26.1433 27.0601 30.2499 22.0001 30.2499C16.9401 30.2499 12.8334 26.1433 12.8334 21.0833H9.16675C9.16675 27.5549 13.9517 32.8716 20.1667 33.7699V39.4166H23.8334V33.7699C30.0484 32.8716 34.8334 27.5549 34.8334 21.0833H31.1667Z"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default MicOn;
