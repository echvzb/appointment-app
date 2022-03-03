import {atom} from 'jotai';
import type {User} from '../state.types';

export const userAtom = atom<User>({isAuthenticated: false});

export const setUserAtom = atom(null, (_get, set, newUser: User) => {
  set(userAtom, newUser);
});
