import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function OutcomeCall(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.1667 22L40.3334 12.8333L31.1667 3.66663V9.16663H23.8334V16.5H31.1667V22ZM34.8334 30.25C32.5417 30.25 30.3417 29.8833 28.2884 29.205C27.6467 29.0033 26.9317 29.15 26.4184 29.645L22.3851 33.6783C17.1967 31.0383 12.9434 26.8033 10.3034 21.5966L14.3367 17.545C14.8501 17.0683 14.9967 16.3533 14.7951 15.7116C14.1167 13.6583 13.7501 11.4583 13.7501 9.16663C13.7501 8.15829 12.9251 7.33329 11.9167 7.33329H5.50008C4.49175 7.33329 3.66675 8.15829 3.66675 9.16663C3.66675 26.3816 17.6184 40.3333 34.8334 40.3333C35.8417 40.3333 36.6667 39.5083 36.6667 38.5V32.0833C36.6667 31.075 35.8417 30.25 34.8334 30.25Z"
        id="OutcomeCall"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default OutcomeCall;
