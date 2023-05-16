import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function FullScreen(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5 5.5L31.7167 9.71667L26.4183 14.9783L29.0217 17.5817L34.2833 12.2833L38.5 16.5V5.5H27.5ZM5.5 16.5L9.71667 12.2833L14.9783 17.5817L17.5817 14.9783L12.2833 9.71667L16.5 5.5H5.5V16.5ZM16.5 38.5L12.2833 34.2833L17.5817 29.0217L14.9783 26.4183L9.71667 31.7167L5.5 27.5V38.5H16.5ZM38.5 27.5L34.2833 31.7167L29.0217 26.4183L26.4183 29.0217L31.7167 34.2833L27.5 38.5H38.5V27.5Z"
        id="FullScreen"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default FullScreen;
