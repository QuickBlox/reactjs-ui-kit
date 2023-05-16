import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function CameraOn(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.1667 19.25V12.8333C31.1667 11.825 30.3417 11 29.3333 11H7.33333C6.325 11 5.5 11.825 5.5 12.8333V31.1667C5.5 32.175 6.325 33 7.33333 33H29.3333C30.3417 33 31.1667 32.175 31.1667 31.1667V24.75L38.5 32.0833V11.9167L31.1667 19.25Z"
        id="CameraOn"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default CameraOn;
