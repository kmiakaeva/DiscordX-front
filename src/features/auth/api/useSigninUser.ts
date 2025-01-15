import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FormData } from '../model/types';

const signinUser = async (data: FormData) => {
  const response = await fetch('http://localhost:3000/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Unknown error occurred');
  }

  const { result } = await response.json();
  return result;
};

export const useSigninUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signinUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
