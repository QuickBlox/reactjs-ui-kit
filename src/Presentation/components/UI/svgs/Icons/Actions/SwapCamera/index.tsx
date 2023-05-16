import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function SwapCamera(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6665 9.16667H30.8548L27.4998 5.5H16.4998L13.1448 9.16667H7.33317C5.3165 9.16667 3.6665 10.8167 3.6665 12.8333V34.8333C3.6665 36.85 5.3165 38.5 7.33317 38.5H36.6665C38.6832 38.5 40.3332 36.85 40.3332 34.8333V12.8333C40.3332 10.8167 38.6832 9.16667 36.6665 9.16667ZM27.4998 30.25V25.6667H16.4998V30.25L10.0832 23.8333L16.4998 17.4167V22H27.4998V17.4167L33.9165 23.8333L27.4998 30.25Z"
        id="SwapCamera"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default SwapCamera;
