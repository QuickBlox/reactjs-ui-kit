import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Minimize(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4999 16.4999V5.49992H13.8333V10.2483L8.16825 4.58325L5.58325 7.16825L11.2483 12.8333H6.49992V16.4999H17.4999ZM39.4999 16.4999V12.8333H34.7516L40.4166 7.16825L37.8316 4.58325L32.1666 10.2483V5.49992H28.4999V16.4999H39.4999ZM6.49992 27.4999V31.1666H11.2483L5.58325 36.8316L8.16825 39.4166L13.8333 33.7516V38.4999H17.4999V27.4999H6.49992ZM28.4999 27.4999V38.4999H32.1666V33.7516L37.8316 39.4166L40.4166 36.8316L34.7516 31.1666H39.4999V27.4999H28.4999Z"
        id="Minimize"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Minimize;
