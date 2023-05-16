import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function GifFile(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.6429 14H24.7143V30.2857H20.6429V14ZM13.8571 14H5.71429C4.08571 14 3 15.3571 3 16.7143V27.5714C3 28.9286 4.08571 30.2857 5.71429 30.2857H13.8571C15.4857 30.2857 16.5714 28.9286 16.5714 27.5714V22.1429H12.5V26.2143H7.07143V18.0714H16.5714V16.7143C16.5714 15.3571 15.4857 14 13.8571 14ZM41 18.0714V14H28.7857V30.2857H32.8571V24.8571H38.2857V20.7857H32.8571V18.0714H41Z"
        id="GifFile"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default GifFile;
