import * as React from "react";
import Avatar from "@mui/material/Avatar";
import LoadingButton from "@mui/lab/LoadingButton";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Img from "../images/calendar.jpeg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas/login";
import Seo from "../components/Seo";
import Link from "../components/Link";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authentication/authSlice";
import { useLoginUserMutation } from "../app/services/auth";
import { navigate } from "@reach/router";
import useAuth from "../app/hooks/useAuth";
import LoadingBackdrop from "../components/LoadingBackdrop";
import { useLayoutEffect } from "react";

export default function Login() {
  // Auth

  const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();
  const { isLoggedIn, auth } = useAuth();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Logging in...", data);
    loginUser(data)
      .unwrap()
      .then((res) => {
        console.log("Result", res);
        dispatch(setCredentials(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    console.log("Logged In:", isLoggedIn);
    if (isLoggedIn) {
      navigate(-1).catch(navigate("/"));
    }
  }, [isLoggedIn, auth]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Seo title={"Login"} />
      <CssBaseline />
      <LoadingBackdrop open={isLoggedIn} />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Img})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
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
              {...register("email")}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
            />
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
