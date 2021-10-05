import * as React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useLazyGetUserQuery } from '../../services/users';
import UserDialogForm from './UserDialogForm';

export default function UserDialog({ id }) {
  const [open, setOpen] = React.useState(false);

  const [
    trigger,
    {
      // originalArgs,
      data,
      isFetching,
      // error,
      // requestId,
      // endpointName,
      // startedTimeStamp,
      // fulfilledTimeStamp,
      // isUninitialized,
      isLoading,
      isSuccess,
      // isError,
    },
  ] = useLazyGetUserQuery();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      trigger(id);
    }
  }, [open]);

  // useEffect(() => {
  //   console.log('originalArgs', originalArgs);
  //   console.log('error', error);
  //   console.log('data', data);
  //   console.log('requestId', requestId);
  //   console.log('endpointName', endpointName);
  //   console.log('startedTimeStamp', startedTimeStamp);
  //   console.log('fulfilledTimeStamp', fulfilledTimeStamp);
  //   console.log('isUninitialized', isUninitialized);
  //   console.log('isLoading', isLoading);
  //   console.log('isFetching', isFetching);
  //   console.log('isSuccess', isSuccess);
  //   console.log('isError', isError);
  // }, [
  //   originalArgs,
  //   error,
  //   data,
  //   requestId,
  //   endpointName,
  //   startedTimeStamp,
  //   fulfilledTimeStamp,
  //   isUninitialized,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  //   isError,
  // ]);

  return (
    <div>
      <Button onClick={handleClickOpen}>More...</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography paragraph align={'center'}>
              The information of the selected user is fetched by{' '}
              {<Link href={''}>useLazyQuery</Link>} of{' '}
              {
                <Link
                  href={'https://redux-toolkit.js.org/rtk-query/overview'}
                  target={'_blank'}
                >
                  RTK Query
                </Link>
              }
              . The query is manually triggered on open dialog. The 2-second
              delay is intentional.
            </Typography>
          </DialogContentText>
          {(isFetching || isLoading) && (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress />
            </Box>
          )}
          {!isFetching && !isLoading && isSuccess && (
            <UserDialogForm data={data} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
