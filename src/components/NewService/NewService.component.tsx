import {useCreateService} from './NewService.hook';
import {Input} from 'baseui/input';
import {Button} from 'baseui/button';
import {FormControl} from 'baseui/form-control';

export const NewService = () => {
  const {handleChange, handleSubmit, newService} = useCreateService();
  return (
    <>
      <FormControl label="Name">
        <Input name="name" value={newService.name} onChange={handleChange} />
      </FormControl>
      <FormControl label="Time in minutes">
        <Input
          name="timeInMinutes"
          value={newService.timeInMinutes}
          onChange={handleChange}
          min={1}
        />
      </FormControl>
      <Button
        onClick={handleSubmit}
        disabled={!(newService.name && newService.timeInMinutes > 0)}
      >
        Create
      </Button>
    </>
  );
};
