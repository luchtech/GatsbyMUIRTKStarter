import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeLayout from '../components/HomeLayout';
import SEO from '../components/SEO';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterUserMutation } from '../services/register';
import { registerSchema } from '../schemas/register';
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect } from 'react';
import Link from '../components/Link';

export default function SignUp() {
  const [registerUser, { data: registerData, isLoading }] =
    useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log('Registering...', data);
    registerUser(data);
  };

  useEffect(() => {
    if (registerData) {
      console.log('Received', registerData);
    } else {
      console.log('No data');
    }
    return () => {};
  }, [registerData]);

  return (
    <HomeLayout>
      <SEO title={'Register'} />
      <Container maxWidth={'sm'}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="last_name"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  {...register('email')}
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  {...register('password')}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={isLoading}
            >
              Sign Up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </HomeLayout>
  );
}
