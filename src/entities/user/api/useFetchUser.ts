import { useQuery } from '@tanstack/react-query';

import { User } from '../model/types';

const fetchUser = async (id: number) => {
  const response = await fetch(`http://localhost:3000/users/${id}`);
  if (!response.ok) {
    throw new Error('User not found');
  }

  const { result } = await response.json();
  return result;
};

export const useFetchUser = (id: number) => {
  return useQuery<User, Error>({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
  });
};
