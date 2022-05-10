import {useState, ChangeEvent} from 'react';
import {useMutation} from 'react-query';
import {useNavigate} from 'react-router-dom';
import {createService} from './NewService.requests';
import type {NewServiceI} from './NewService.types';

export const useCreateService = () => {
  const [newService, setNewService] = useState<NewServiceI>({
    name: '',
    timeInMinutes: 0,
  });
  const {mutateAsync} = useMutation(createService);
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setNewService({...newService, [name]: value});
  };
  const handleSubmit = async () => {
    try {
      await mutateAsync(newService);
      navigate('/services');
    } catch (error) {
      console.error(error);
    }
  };

  return {handleSubmit, handleChange, newService};
};
