import {useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {getConfig} from './Config.requests';
import type {Config, HandleTimeZoneChange} from './Config.types';

export const useConfig = () => {
  const {data: config, isSuccess} = useQuery('getConfig', getConfig);
  const [currentConfig, setCurrentConfig] = useState<Config>({timeZone: 'UTC'});
  const [updateDisabled, setUpdateDisabled] = useState(true);
  const handleTimeZoneChange = ({id}: HandleTimeZoneChange) => {
    setCurrentConfig((prevCurrentConfig) => ({
      ...prevCurrentConfig,
      timeZone: id,
    }));
  };
  useEffect(() => {
    if (isSuccess) {
      const unknownConfig = config as unknown;
      const parsedConfig = unknownConfig as Config;
      setCurrentConfig(parsedConfig);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isSuccess) {
      for (const property of Object.keys(currentConfig)) {
        console.log(
          currentConfig[property],
          config[property],
          currentConfig[property] !== config[property],
        );
        if (currentConfig[property] !== config[property]) {
          setUpdateDisabled(false);
          return;
        }
      }
      setUpdateDisabled(true);
    }
  }, [currentConfig, isSuccess]);
  return {currentConfig, isSuccess, updateDisabled, handleTimeZoneChange};
};
