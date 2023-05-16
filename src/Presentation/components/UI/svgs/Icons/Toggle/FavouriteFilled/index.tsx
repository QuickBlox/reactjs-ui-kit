import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function FavouriteFilled(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9998 32.5783L33.3298 39.4166L30.3232 26.5283L40.3332 17.8566L27.1515 16.7383L21.9998 4.58325L16.8482 16.7383L3.6665 17.8566L13.6765 26.5283L10.6698 39.4166L21.9998 32.5783Z"
        id="FavouriteFilled"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default FavouriteFilled;
