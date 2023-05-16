import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Like(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0003 38.8209L19.342 36.4009C9.90033 27.8392 3.66699 22.1925 3.66699 15.2625C3.66699 9.61587 8.10366 5.1792 13.7503 5.1792C16.9403 5.1792 20.002 6.6642 22.0003 9.01087C23.9987 6.6642 27.0603 5.1792 30.2503 5.1792C35.897 5.1792 40.3337 9.61587 40.3337 15.2625C40.3337 22.1925 34.1003 27.8392 24.6587 36.4192L22.0003 38.8209Z"
        id="Like"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Like;
