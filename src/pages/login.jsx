import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Img from '../images/calendar.jpeg';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from '../services/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../schemas/login';
import SEO from '../components/SEO';
import { useEffect } from 'react';
import Link from '../components/Link';

export default function SignInSide() {
  const [loginUser, { data: loginData, isLoading: isLoggingIn }] =
    useLoginUserMutation();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log('Logging in...', data);
    loginUser(data);
  };

  useEffect(() => {
    if (loginData) {
      console.log('Received', loginData);
    } else {
      console.log('No data');
    }
    return () => {};
  }, [loginData]);

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <SEO title={'Login'} />
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Img})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              {...register('email')}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              // name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password')}
            />
            {/*{isError && (*/}
            {/*  <Typography color={'red'} variant={'h6'}>*/}
            {/*    James*/}
            {/*  </Typography>*/}
            {/*)}*/}
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={isLoggingIn}
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
