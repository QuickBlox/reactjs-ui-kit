import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function AttachmentIcon(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.9635 19.4074L20.0553 34.3156C17.1903 37.1805 12.5494 37.1805 9.6844 34.3156C6.81944 31.4506 6.81944 26.8096 9.6844 23.9447L25.8889 7.74014C27.6779 5.95117 30.5818 5.95116 32.3707 7.74014C34.1597 9.52912 34.1597 12.433 32.3707 14.222L18.7589 27.8338C18.0459 28.5468 16.8792 28.5468 16.1662 27.8338C15.4532 27.1208 15.4532 25.954 16.1662 25.241L28.4817 12.9256L26.5371 10.9811L14.2217 23.2965C12.4327 25.0855 12.4327 27.9893 14.2217 29.7783C16.0106 31.5673 18.9145 31.5673 20.7035 29.7783L34.3153 16.1665C37.1802 13.3015 37.1802 8.66056 34.3153 5.7956C31.4503 2.93064 26.8093 2.93064 23.9444 5.7956L7.73986 22.0001C3.79891 25.9411 3.79891 32.3192 7.73986 36.2601C11.6808 40.2011 18.0589 40.2011 21.9998 36.2601L36.908 21.3519L34.9635 19.4074Z"
        id="Attachment"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default AttachmentIcon;
