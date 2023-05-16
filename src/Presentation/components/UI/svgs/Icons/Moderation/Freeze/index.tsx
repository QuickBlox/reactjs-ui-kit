import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Freeze(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.3334 20.1667H32.6884L38.6284 14.2267L36.0434 11.6234L27.5001 20.1667H23.8334V16.5001L32.3767 7.95675L29.7734 5.37175L23.8334 11.3117V3.66675H20.1667V11.3117L14.2267 5.37175L11.6234 7.95675L20.1667 16.5001V20.1667H16.5001L7.95675 11.6234L5.37175 14.2267L11.3117 20.1667H3.66675V23.8334H11.3117L5.37175 29.7734L7.95675 32.3767L16.5001 23.8334H20.1667V27.5001L11.6234 36.0434L14.2267 38.6284L20.1667 32.6884V40.3334H23.8334V32.6884L29.7734 38.6284L32.3767 36.0434L23.8334 27.5001V23.8334H27.5001L36.0434 32.3767L38.6284 29.7734L32.6884 23.8334H40.3334V20.1667Z"
        id="Freeze"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Freeze;
