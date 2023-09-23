import { useState } from 'react';
import useForm from './useForm';
import { awaiter } from '@/utils/helper';
import { useAuthContext } from '@/context/authContext';

export default function useRegister() {
  const randomMath = Math.floor(Math.random() * 50);
  const [state, dispatch] = useAuthContext();
  const [visible, setVisible] = useState(false);

  const { formState, register } = useForm({
    roomNumber: randomMath, username: '', password: '', confirmPassword: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const {
      roomNumber, username, password, confirmPassword,
    } = formState;
    dispatch({ type: 'AUTH_REQUEST' });
    await awaiter(2000);

    try {
      if (!password && !confirmPassword && !username) throw new Error('username dan password tidak boleh kosong');
      if (password !== confirmPassword) throw new Error('Password dan konfirmasi password tidak sama');

      dispatch({ type: 'AUTH_REGISTER', payload: { roomNumber, username, password } });

      return formState;
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: error.message });
    }

    return null;
  }

  return {
    onSubmit: handleSubmit,
    register,
    randomMath,
    visible,
    setVisible,
    state,
  };
}
