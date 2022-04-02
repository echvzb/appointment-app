import {TimezonePicker} from 'baseui/datepicker';
import {HeadingMedium, HeadingXSmall} from 'baseui/typography';
import {FormControl} from 'baseui/form-control';
import {Button} from 'baseui/button';
import {Checkbox, STYLE_TYPE, LABEL_PLACEMENT} from 'baseui/checkbox';
import {Save} from 'react-feather';
import {useStyletron} from 'baseui';
import {useConfig} from './Config.hook';

export const Config = () => {
  const {
    currentConfig,
    isSuccess,
    updateDisabled,
    handleTimeZoneChange,
    handleIsBusinessAccountChange,
    handleUpdate,
    isUpdateLoading,
  } = useConfig();
  const [css, theme] = useStyletron();
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
          <Checkbox
            checked={currentConfig.isBusinessAccount}
            checkmarkType={STYLE_TYPE.toggle_round}
            labelPlacement={LABEL_PLACEMENT.right}
            onChange={handleIsBusinessAccountChange}
          >
            Business account
          </Checkbox>
          <div
            className={css({
              marginTop: theme.sizing.scale1200,
            })}
          >
            <Button
              startEnhancer={<Save />}
              disabled={updateDisabled}
              isLoading={isUpdateLoading}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </div>
        </>
      )}
    </>
  );
};
