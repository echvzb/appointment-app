import {useConfig} from './Config.hook';

export const Config = () => {
  const {config} = useConfig();
  console.log(config);
  return null;
};
