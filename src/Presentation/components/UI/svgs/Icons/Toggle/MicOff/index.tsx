import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function MicOff(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.8333 21.0833H31.7167C31.7167 22.4399 31.4233 23.7049 30.9283 24.8416L33.1833 27.0966C34.21 25.2999 34.8333 23.2649 34.8333 21.0833ZM27.4633 21.3949C27.4633 21.2849 27.5 21.1933 27.5 21.0833V10.0833C27.5 7.03992 25.0433 4.58325 22 4.58325C18.9567 4.58325 16.5 7.03992 16.5 10.0833V10.4133L27.4633 21.3949ZM7.82833 6.41659L5.5 8.74492L16.5183 19.7633V21.0833C16.5183 24.1266 18.9567 26.5833 22 26.5833C22.4033 26.5833 22.8067 26.5283 23.1917 26.4366L26.235 29.4799C24.9333 30.0849 23.485 30.4333 22 30.4333C16.94 30.4333 12.2833 26.5833 12.2833 21.0833H9.16667C9.16667 27.3349 14.1533 32.5049 20.1667 33.4033V39.4166H23.8333V33.4033C25.5017 33.1649 27.0783 32.5783 28.49 31.7533L36.1717 39.4166L38.5 37.0883L7.82833 6.41659Z"
        id="MicOff"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default MicOff;
