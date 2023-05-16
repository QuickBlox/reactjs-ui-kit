import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function ReplyField(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3333 15.5833V8.25L5.5 21.0833L18.3333 33.9167V26.4C27.5 26.4 33.9167 29.3333 38.5 35.75C36.6667 26.5833 31.1667 17.4167 18.3333 15.5833Z"
        id="ReplyField"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default ReplyField;
