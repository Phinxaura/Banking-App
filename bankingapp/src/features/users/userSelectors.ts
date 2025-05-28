import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

// Base selector
const selectUsersState = (state: RootState) => state.users;

// Memoized selectors
export const selectAllUsers = createSelector(
  [selectUsersState],
  (usersState) => usersState.users
);

export const selectUsersLoading = createSelector(
  [selectUsersState],
  (usersState) => usersState.loading
);

export const selectUsersError = createSelector(
  [selectUsersState],
  (usersState) => usersState.error
);
