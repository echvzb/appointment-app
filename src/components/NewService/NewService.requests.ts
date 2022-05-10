import {http} from '../../request';
import type {NewServiceI} from './NewService.types';

export const createService = (data: NewServiceI) =>
  http.post('/services', data);
