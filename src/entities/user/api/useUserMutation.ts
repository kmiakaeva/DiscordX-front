import { useMutation, useQueryClient } from '@tanstack/react-query';

import { User } from '../model/types';

type Props = {
  id: number;
  data: Partial<User>;
};

const mutateUser = async ({ id, data }: Props) => {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update user');

  const { result } = await response.json();
  return result;
};

export const useUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mutateUser,
    onSuccess: (updatedUser: User) => {
      // Update cached data
      queryClient.setQueryData(['user', updatedUser.id], updatedUser);
      // Refetch the user data to ensure we have the latest data
      queryClient.invalidateQueries({ queryKey: ['user', updatedUser.id] });
    },
  });
};
