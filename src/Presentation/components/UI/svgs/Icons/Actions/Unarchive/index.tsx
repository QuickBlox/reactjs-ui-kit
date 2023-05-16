import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Unarchive(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.6567 9.58833L35.1083 6.50833C34.6133 5.885 33.8617 5.5 33 5.5H11C10.1383 5.5 9.38667 5.885 8.87333 6.50833L6.34333 9.58833C5.81167 10.2117 5.5 11.0367 5.5 11.9167V34.8333C5.5 36.85 7.15 38.5 9.16667 38.5H34.8333C36.85 38.5 38.5 36.85 38.5 34.8333V11.9167C38.5 11.0367 38.1883 10.2117 37.6567 9.58833ZM11.44 9.16667H32.56L34.0817 11H9.93667L11.44 9.16667ZM9.16667 34.8333V14.6667H34.8333V34.8333H9.16667ZM14.6667 25.6667H19.3417V31.1667H24.6583V25.6667H29.3333L22 18.3333L14.6667 25.6667Z"
        id="Unarchive"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Unarchive;
