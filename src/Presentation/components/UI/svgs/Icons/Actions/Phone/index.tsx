import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function Phone(theme: IconTheme | undefined = undefined) {
  return !theme?.applyZoom ? (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.99 9.16667C12.1 10.7983 12.375 12.3933 12.815 13.915L10.615 16.115C9.86333 13.915 9.38667 11.5867 9.22167 9.16667H11.99ZM30.0667 31.2033C31.625 31.6433 33.22 31.9183 34.8333 32.0283V34.76C32.4133 34.595 30.085 34.1183 27.8667 33.385L30.0667 31.2033ZM13.75 5.5H7.33333C6.325 5.5 5.5 6.325 5.5 7.33333C5.5 24.5483 19.4517 38.5 36.6667 38.5C37.675 38.5 38.5 37.675 38.5 36.6667V30.2683C38.5 29.26 37.675 28.435 36.6667 28.435C34.3933 28.435 32.175 28.0683 30.1217 27.39C29.9383 27.3167 29.7367 27.2983 29.5533 27.2983C29.0767 27.2983 28.6183 27.4817 28.2517 27.83L24.2183 31.8633C19.03 29.205 14.7767 24.97 12.1367 19.7817L16.17 15.7483C16.6833 15.235 16.83 14.52 16.6283 13.8783C15.95 11.825 15.5833 9.625 15.5833 7.33333C15.5833 6.325 14.7583 5.5 13.75 5.5Z"
        id="Phone"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  ) : (
    <svg
      width={theme && theme.width ? theme.width : '32'}
      height={theme && theme.height ? theme.height : '32'}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.01 19.38C22.78 19.38 21.59 19.18 20.48 18.82C20.13 18.7 19.74 18.79 19.47 19.06L17.9 21.03C15.07 19.68 12.42 17.13 11.01 14.2L12.96 12.54C13.23 12.26 13.31 11.87 13.2 11.52C12.83 10.41 12.64 9.22 12.64 7.99C12.64 7.45 12.19 7 11.65 7H8.19C7.65 7 7 7.24 7 7.99C7 17.28 14.73 25 24.01 25C24.72 25 25 24.37 25 23.82V20.37C25 19.83 24.55 19.38 24.01 19.38Z"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default Phone;
