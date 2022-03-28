import {TimezonePicker} from 'baseui/datepicker';
import {HeadingMedium, HeadingXSmall} from 'baseui/typography';
import {FormControl} from 'baseui/form-control';
import {Button} from 'baseui/button';
import {Save} from 'react-feather';
import {useConfig} from './Config.hook';

export const Config = () => {
  const {currentConfig, isSuccess, updateDisabled, handleTimeZoneChange} =
    useConfig();
  return (
    <>
      <HeadingMedium>Configuration</HeadingMedium>
      {isSuccess && (
        <>
          <FormControl
            label={
              <HeadingXSmall $style={{margin: 0}}>Time zone</HeadingXSmall>
            }
          >
            <TimezonePicker
              value={currentConfig.timeZone}
              onChange={handleTimeZoneChange}
            />
          </FormControl>
          <Button startEnhancer={<Save />} disabled={updateDisabled}>
            Update
          </Button>
        </>
      )}
    </>
  );
};
