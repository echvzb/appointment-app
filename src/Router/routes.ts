import type {RouteType} from './types';
import {
  IndexPage,
  LoginPage,
  CalendarPage,
  ConfigPage,
  ServicesPage,
  NewServicePage,
} from '../pages';

const routes: RouteType[] = [
  ['/', IndexPage],
  ['/login', LoginPage],
  ['/config', ConfigPage],
  ['/calendar/:userId', CalendarPage],
  ['/services', ServicesPage],
  ['/services/new', NewServicePage],
];

export default routes;
