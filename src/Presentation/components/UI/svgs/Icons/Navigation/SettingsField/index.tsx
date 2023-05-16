import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function SettingsField(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.09 23.7233C35.1634 23.1733 35.2 22.605 35.2 22C35.2 21.4133 35.1634 20.8267 35.0717 20.2767L38.7934 17.38C39.1234 17.1233 39.215 16.6283 39.0134 16.2617L35.4934 10.175C35.2734 9.77166 34.815 9.64333 34.4117 9.77166L30.03 11.5317C29.1134 10.835 28.1417 10.2483 27.06 9.80833L26.4 5.15166C26.3267 4.71166 25.96 4.39999 25.52 4.39999H18.48C18.04 4.39999 17.6917 4.71166 17.6184 5.15166L16.9584 9.80833C15.8767 10.2483 14.8867 10.8533 13.9884 11.5317L9.6067 9.77166C9.20337 9.62499 8.74504 9.77166 8.52504 10.175L5.02337 16.2617C4.80337 16.6467 4.8767 17.1233 5.24337 17.38L8.96504 20.2767C8.87337 20.8267 8.80004 21.4317 8.80004 22C8.80004 22.5683 8.8367 23.1733 8.92837 23.7233L5.2067 26.62C4.8767 26.8767 4.78504 27.3717 4.98671 27.7383L8.5067 33.825C8.7267 34.2283 9.18504 34.3567 9.58837 34.2283L13.97 32.4683C14.8867 33.165 15.8584 33.7517 16.94 34.1917L17.6 38.8483C17.6917 39.2883 18.04 39.6 18.48 39.6H25.52C25.96 39.6 26.3267 39.2883 26.3817 38.8483L27.0417 34.1917C28.1234 33.7517 29.1134 33.165 30.0117 32.4683L34.3934 34.2283C34.7967 34.375 35.255 34.2283 35.475 33.825L38.995 27.7383C39.215 27.335 39.1234 26.8767 38.775 26.62L35.09 23.7233ZM22 28.6C18.37 28.6 15.4 25.63 15.4 22C15.4 18.37 18.37 15.4 22 15.4C25.63 15.4 28.6 18.37 28.6 22C28.6 25.63 25.63 28.6 22 28.6Z"
        id="SettingsField"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default SettingsField;
