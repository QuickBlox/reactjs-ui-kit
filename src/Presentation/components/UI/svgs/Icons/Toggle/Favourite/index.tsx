import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Favourite(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.3334 17.8566L27.1517 16.7199L22.0001 4.58325L16.8484 16.7383L3.66675 17.8566L13.6767 26.5283L10.6701 39.4166L22.0001 32.5783L33.3301 39.4166L30.3417 26.5283L40.3334 17.8566ZM22.0001 29.1499L15.1067 33.3116L16.9401 25.4649L10.8534 20.1849L18.8834 19.4883L22.0001 12.0999L25.1351 19.5066L33.1651 20.2033L27.0784 25.4833L28.9117 33.3299L22.0001 29.1499Z"
        id="Favourite"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Favourite;
