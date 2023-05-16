import React from 'react';
import { IconTheme } from '../../IconsCommonTypes';

function VideoFile(theme: IconTheme | undefined = undefined) {
  return (
    <svg
      width={theme && theme.width ? theme.width : '44'}
      height={theme && theme.height ? theme.height : '44'}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.0001 7.33325L36.6667 14.6666H31.1667L27.5001 7.33325H23.8334L27.5001 14.6666H22.0001L18.3334 7.33325H14.6667L18.3334 14.6666H12.8334L9.16675 7.33325H7.33341C5.31675 7.33325 3.68508 8.98325 3.68508 10.9999L3.66675 32.9999C3.66675 35.0166 5.31675 36.6666 7.33341 36.6666H36.6667C38.6834 36.6666 40.3334 35.0166 40.3334 32.9999V7.33325H33.0001Z"
        id="VideoFile"
        fill={theme && theme.color ? theme.color : 'var(--color-icon)'}
      />
    </svg>
  );
}

export default VideoFile;
