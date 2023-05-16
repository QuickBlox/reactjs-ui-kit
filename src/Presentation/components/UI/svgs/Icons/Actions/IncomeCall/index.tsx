import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function IncomeCall(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1367 19.7908C14.7767 24.9792 19.03 29.2142 24.2183 31.8725L28.2517 27.8392C28.7467 27.3442 29.48 27.1792 30.1217 27.3992C32.175 28.0775 34.3933 28.4442 36.6667 28.4442C37.675 28.4442 38.5 29.2692 38.5 30.2775V36.6758C38.5 37.6842 37.675 38.5092 36.6667 38.5092C19.4517 38.5092 5.5 24.5575 5.5 7.34251C5.5 6.33418 6.325 5.50918 7.33333 5.50918H13.75C14.7583 5.50918 15.5833 6.33418 15.5833 7.34251C15.5833 9.63418 15.95 11.8342 16.6283 13.8875C16.83 14.5292 16.6833 15.2442 16.17 15.7575L12.1367 19.7908ZM36.96 6.77418L35.6583 5.49084L23.8333 17.0408V9.17584H22V20.1758H33V18.3425H25.3917L36.96 6.77418Z"
        id="IncomeCall"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default IncomeCall;
