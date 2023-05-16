import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function StopShare(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.9033 32.615L42.57 36.2817H44V32.615H38.9033ZM40.315 28.9483L40.3333 10.615C40.3333 8.58 38.6833 6.94833 36.6667 6.94833H13.2367L22.825 16.5367C23.155 16.4633 23.485 16.4083 23.8333 16.3533V12.4483L31.1667 19.2867L28.27 21.9817L38.4267 32.1383C39.545 31.5333 40.315 30.3233 40.315 28.9483ZM4.38167 2.75L2.035 5.07833L4.85833 7.90167C4.125 8.56167 3.66667 9.53333 3.66667 10.615V28.9483C3.66667 30.965 5.29833 32.615 7.33333 32.615H0V36.2817H33.2383L38.2067 41.25L40.535 38.9217L4.38167 2.75ZM12.8333 27.115C13.4017 24.4017 14.52 21.7067 16.6283 19.6717L19.5433 22.5867C16.72 23.2833 14.5933 24.75 12.8333 27.115Z"
        id="StopShare"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default StopShare;
