import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Stream(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.5002 5.5H5.50016C3.4835 5.5 1.8335 7.15 1.8335 9.16667V14.6667H5.50016V9.16667H38.5002V34.8333H25.6668V38.5H38.5002C40.5168 38.5 42.1668 36.85 42.1668 34.8333V9.16667C42.1668 7.15 40.5168 5.5 38.5002 5.5ZM1.8335 33V38.5H7.3335C7.3335 35.4567 4.87683 33 1.8335 33ZM1.8335 25.6667V29.3333C6.8935 29.3333 11.0002 33.44 11.0002 38.5H14.6668C14.6668 31.405 8.9285 25.6667 1.8335 25.6667ZM1.8335 18.3333V22C10.9452 22 18.3335 29.3883 18.3335 38.5H22.0002C22.0002 27.3533 12.9618 18.3333 1.8335 18.3333Z"
        id="Stream"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Stream;
