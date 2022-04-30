import type {RouteType} from './types';
import {
  IndexPage,
  LoginPage,
  CalendarPage,
  ConfigPage,
  ServicesPage,
} from '../pages';

const routes: RouteType[] = [
  ['/', IndexPage],
  ['/login', LoginPage],
  ['/config', ConfigPage],
  ['/calendar/:userId', CalendarPage],
  ['/services', ServicesPage],
];

export default routes;
