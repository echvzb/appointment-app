import type {RouteType} from './types';
import {IndexPage, LoginPage, CalendarPage, ConfigPage} from '../pages';

const routes: RouteType[] = [
  ['/', IndexPage],
  ['/login', LoginPage],
  ['/config', ConfigPage],
  ['/calendar/:userId', CalendarPage],
];

export default routes;
