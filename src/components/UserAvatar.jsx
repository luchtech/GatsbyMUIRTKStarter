import React from 'react';
import { Avatar } from '@mui/material';

const UserAvatar = ({
  width = 32,
  height = 32,
  src = '',
  firstName = '',
  lastName = '',
  ...rest
}) => {
  let name = firstName.charAt(0) + lastName.charAt(0).trim().toUpperCase();
  return (
    <Avatar src={src} alt={name} sx={{ width, height }} {...rest}>
      {name}
    </Avatar>
  );
};

export default UserAvatar;
