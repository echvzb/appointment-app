import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
import {DarkTheme, LightTheme} from 'baseui';

export const currentThemeAtom = atomWithStorage<'light' | 'dark'>(
  'theme',
  'light',
);

export const themeAtom = atom((get) =>
  get(currentThemeAtom) === 'light' ? LightTheme : DarkTheme,
);
