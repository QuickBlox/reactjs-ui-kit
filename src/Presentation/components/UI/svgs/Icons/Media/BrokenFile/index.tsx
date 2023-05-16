import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function BrokenFile(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.4426 38.8576L5.14262 2.55762L2.55762 5.14262L6.79262 9.39595V33.5409C6.79262 35.5576 8.44262 37.2076 10.4593 37.2076H34.6043L38.8393 41.4426L41.4426 38.8576ZM10.4593 33.5409V13.0626L22.9993 25.6026L21.4593 27.5276L17.7926 22.5409L12.2926 29.8743H27.2709L30.9376 33.5409H10.4593ZM15.6476 7.87428L11.9809 4.20762H36.1259C38.1426 4.20762 39.7926 5.85762 39.7926 7.87428V32.0193L36.1259 28.3526V7.87428H15.6476Z"
        id="BrokenFile"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default BrokenFile;
