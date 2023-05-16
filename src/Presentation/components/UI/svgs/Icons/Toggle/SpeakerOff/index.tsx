import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function SpeakerOff(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.25 22C30.25 18.755 28.38 15.9683 25.6667 14.6117V18.6633L30.1583 23.155C30.2133 22.7883 30.25 22.4033 30.25 22ZM34.8333 22C34.8333 23.7233 34.4667 25.3367 33.8433 26.84L36.6117 29.6083C37.8217 27.335 38.5 24.75 38.5 22C38.5 14.1533 33.0183 7.59 25.6667 5.92167V9.69833C30.965 11.275 34.8333 16.1883 34.8333 22ZM7.82833 5.5L5.5 7.82833L14.1717 16.5H5.5V27.5H12.8333L22 36.6667V24.3283L29.7917 32.12C28.5633 33.0733 27.1883 33.825 25.6667 34.2833V38.06C28.1967 37.4917 30.4883 36.3183 32.4317 34.7417L36.1717 38.5L38.5 36.1717L7.82833 5.5ZM22 7.33333L18.1683 11.165L22 14.9967V7.33333Z"
        id="SpeakerOff"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default SpeakerOff;
