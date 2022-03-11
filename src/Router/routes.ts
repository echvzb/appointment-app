import type {RouteType} from './types';
import {IndexPage, LoginPage, CalendarPage} from '../pages';

const routes: RouteType[] = [
  ['/', IndexPage],
  ['/login', LoginPage],
  ['/calendar/:userId', CalendarPage],
];

export default routes;
