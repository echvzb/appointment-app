import {Radio, RadioGroup, ALIGN} from 'baseui/radio';
import {Button} from 'baseui/button';
import {useCalendarServices} from './CalendarServices.hook';

export const CalendarServices = () => {
  const {data, handleChange, userServiceId, handleSubmit} =
    useCalendarServices();
  return (
    <>
      <RadioGroup
        name="userService"
        value={userServiceId}
        onChange={handleChange}
        align={ALIGN.horizontal}
      >
        {data &&
          [].concat(data).map(({_id, name, timeInMinutes}) => (
            <Radio
              key={_id}
              value={_id}
              description={`${timeInMinutes} minutes`}
            >
              {name}
            </Radio>
          ))}
      </RadioGroup>
      <Button
        onClick={handleSubmit}
        disabled={!userServiceId}
        $style={{marginBlock: '20px'}}
      >
        Next
      </Button>
    </>
  );
};
