import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function ChatFilled(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6667 3.66663H7.33341C5.31675 3.66663 3.66675 5.31663 3.66675 7.33329V40.3333L11.0001 33H36.6667C38.6834 33 40.3334 31.35 40.3334 29.3333V7.33329C40.3334 5.31663 38.6834 3.66663 36.6667 3.66663Z"
        id="ChatFilled"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default ChatFilled;
