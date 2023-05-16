import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Edit(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.4978 31.6273V38.5023H12.3728L32.6495 18.2256L25.7745 11.3506L5.4978 31.6273ZM37.9661 12.9089C38.6811 12.1939 38.6811 11.0389 37.9661 10.3239L33.6761 6.03393C32.9611 5.31893 31.8061 5.31893 31.0911 6.03393L27.7361 9.38893L34.6111 16.2639L37.9661 12.9089Z"
        id="Edit"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Edit;
