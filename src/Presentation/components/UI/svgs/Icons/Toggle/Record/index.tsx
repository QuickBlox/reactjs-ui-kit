import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Record(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0002 36.6666C30.1003 36.6666 36.6668 30.1001 36.6668 21.9999C36.6668 13.8997 30.1003 7.33325 22.0002 7.33325C13.9 7.33325 7.3335 13.8997 7.3335 21.9999C7.3335 30.1001 13.9 36.6666 22.0002 36.6666Z"
        id="Record"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Record;
