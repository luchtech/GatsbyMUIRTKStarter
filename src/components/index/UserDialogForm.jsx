import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Box, TextField } from '@mui/material';
import * as React from 'react';

export default function UserDialogForm({ data }) {
  const { id, first_name, last_name, avatar, email } = data;

  useEffect(() => {
    console.log('id: ' + id);
    console.log('first_name: ' + first_name);
    console.log('last_name: ' + last_name);
    console.log('avatar: ' + avatar);
    console.log('email: ' + email);
  }, [id, first_name, last_name, avatar, email]);

  return (
    <Grid container spacing={2} key={id}>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" alignItems="center" py={3}>
          <Avatar
            alt={first_name}
            src={avatar}
            sx={{
              width: (theme) => theme.spacing(20),
              height: (theme) => theme.spacing(20),
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size={'small'}
          label="First Name"
          aria-readonly
          value={first_name}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size={'small'}
          label="Last Name"
          aria-readonly
          value={last_name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          size={'small'}
          label="Email Address"
          aria-readonly
          value={email}
        />
      </Grid>
    </Grid>
  );
}
