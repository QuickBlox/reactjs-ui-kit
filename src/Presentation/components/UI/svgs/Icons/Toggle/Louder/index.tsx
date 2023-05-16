import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Louder(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 16.5V27.5H12.8333L22 36.6666V7.3333L12.8333 16.5H5.5ZM18.3333 16.1883V27.8116L14.355 23.8333H9.16667V20.1666H14.355L18.3333 16.1883ZM30.25 22C30.25 18.755 28.38 15.9683 25.6667 14.6116V29.37C28.38 28.0316 30.25 25.245 30.25 22ZM25.6667 5.92163V9.6983C30.965 11.275 34.8333 16.1883 34.8333 22C34.8333 27.8116 30.965 32.725 25.6667 34.3016V38.0783C33.0183 36.41 38.5 29.8466 38.5 22C38.5 14.1533 33.0183 7.58996 25.6667 5.92163Z"
        id="Louder"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Louder;
