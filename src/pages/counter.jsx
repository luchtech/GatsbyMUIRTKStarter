import React from 'react';
import Layout from '../components/Layout';
import { ButtonGroup, Container, Link, Paper, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from '../features/counter/counterSlice';
import SEO from '../components/SEO';
import Typography from '@mui/material/Typography';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  const handleDecrementByAmount = (amount) => {
    dispatch(decrementByAmount(amount));
  };

  return (
    <Layout>
      <SEO title={'Counter'} />
      <Container
        maxWidth={'sm'}
        sx={{
          py: (theme) => theme.spacing(3),
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Counter
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          gutterBottom
        >
          This counter app uses{' '}
          {
            <Link href={'https://redux-toolkit.js.org/'} target={'_blank'}>
              Redux Toolkit
            </Link>
          }{' '}
          to demonstrate data manipulation at frontend level. Also, with the
          help of{' '}
          {
            <Link
              href={'https://www.npmjs.com/package/redux-persist'}
              target={'_blank'}
            >
              Redux Persist
            </Link>
          }
          , the current count will persist on page reload.
        </Typography>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            mx: 1,
          }}
        >
          <TextField
            aria-readonly={true}
            label={'Count'}
            value={count}
            variant={'outlined'}
            inputProps={{
              style: {
                textAlign: 'center',
                fontSize: 'xxx-large',
                fontWeight: 'bold',
              },
            }}
            fullWidth
          />
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{
              mt: (theme) => theme.spacing(3),
            }}
          >
            <Button onClick={() => handleDecrementByAmount(5)}>-5</Button>
            <Button onClick={handleDecrement}>-1</Button>
            <Button onClick={handleIncrement}>+1</Button>
            <Button onClick={() => handleIncrementByAmount(5)}>+5</Button>
          </ButtonGroup>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Counter;
