import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function CameraOff(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.4166 12.8333L32.0833 20.1666V13.7499C32.0833 12.7416 31.2583 11.9166 30.2499 11.9166H18.9199L39.4166 32.4133V12.8333ZM6.91159 4.58325L4.58325 6.91159L9.58825 11.9166H8.24992C7.24159 11.9166 6.41659 12.7416 6.41659 13.7499V32.0833C6.41659 33.0916 7.24159 33.9166 8.24992 33.9166H30.2499C30.6349 33.9166 30.9649 33.7699 31.2399 33.5866L37.0883 39.4166L39.4166 37.0883L6.91159 4.58325Z"
        id="CameraOff"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default CameraOff;
