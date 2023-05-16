import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function ScreenShare(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6667 33.0002C38.6833 33.0002 40.315 31.3502 40.315 29.3335L40.3333 11.0002C40.3333 8.96516 38.6833 7.3335 36.6667 7.3335H7.33333C5.29833 7.3335 3.66667 8.96516 3.66667 11.0002V29.3335C3.66667 31.3502 5.29833 33.0002 7.33333 33.0002H0V36.6668H44V33.0002H36.6667ZM23.8333 26.5285V22.5135C18.7367 22.5135 15.3817 24.0718 12.8333 27.5002C13.86 22.6052 16.7017 17.7285 23.8333 16.7385V12.8335L31.1667 19.6718L23.8333 26.5285Z"
        id="ScreenShare"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default ScreenShare;
