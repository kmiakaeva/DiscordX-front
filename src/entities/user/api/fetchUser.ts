export const fetchUser = async (id: number) => {
  const response = await fetch(`http://localhost:3000/users/${id}`);
  if (!response.ok) {
    throw new Error('User not found');
  }

  const { result } = await response.json();
  return result;
};
