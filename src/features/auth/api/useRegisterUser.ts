import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FormData } from '../model/types';

const registerUser = async (data: FormData) => {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Unknown error occurred');
  }

  const { result } = await response.json();
  return result;
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
