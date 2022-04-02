import {useEffect, useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import {getConfig, updateConfig} from './Config.requests';
import type {Config, HandleTimeZoneChange} from './Config.types';

export const useConfig = () => {
  const {data: config, isSuccess, refetch} = useQuery('getConfig', getConfig);
  const {mutateAsync, isLoading: isUpdateLoading} = useMutation(updateConfig);
  const [currentConfig, setCurrentConfig] = useState<Config>({
    timeZone: 'UTC',
    isBusinessAccount: false,
  });
  const [updateDisabled, setUpdateDisabled] = useState(true);
  const handleTimeZoneChange = ({id}: HandleTimeZoneChange) => {
    setCurrentConfig((prevCurrentConfig) => ({
      ...prevCurrentConfig,
      timeZone: id,
    }));
  };
  const handleIsBusinessAccountChange = () =>
    setCurrentConfig((prevCurrentConfig) => ({
      ...prevCurrentConfig,
      isBusinessAccount: !prevCurrentConfig.isBusinessAccount,
    }));
  const handleUpdate = async () => {
    try {
      await mutateAsync(currentConfig);
      refetch();
      setUpdateDisabled(true);
    } catch (error) {}
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
        if (currentConfig[property] !== config[property]) {
          setUpdateDisabled(false);
          return;
        }
      }
      setUpdateDisabled(true);
    }
  }, [currentConfig, isSuccess]);
  return {
    currentConfig,
    isSuccess,
    updateDisabled,
    handleTimeZoneChange,
    isUpdateLoading,
    handleUpdate,
    handleIsBusinessAccountChange,
  };
};
