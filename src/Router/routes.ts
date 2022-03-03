import type {RouteType} from './types';
import {IndexPage, LoginPage} from '../pages';

const routes: RouteType[] = [
  ['/', IndexPage],
  ['/login', LoginPage],
];

export default routes;
