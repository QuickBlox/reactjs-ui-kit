import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function PhoneField(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.685 28.1967C34.43 28.1967 32.2483 27.83 30.2133 27.17C29.5717 26.95 28.8567 27.115 28.3617 27.61L25.4833 31.2217C20.295 28.7467 15.4367 24.0717 12.8517 18.7L16.4267 15.6567C16.9217 15.1433 17.0683 14.4283 16.8667 13.7867C16.1883 11.7517 15.84 9.57 15.84 7.315C15.84 6.325 15.015 5.5 14.025 5.5H7.68167C6.69167 5.5 5.5 5.94 5.5 7.315C5.5 24.3467 19.6717 38.5 36.685 38.5C37.9867 38.5 38.5 37.345 38.5 36.3367V30.0117C38.5 29.0217 37.675 28.1967 36.685 28.1967Z"
        id="PhoneField"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default PhoneField;
