import { useFetchUser } from '../../';

export function UserInfo() {
  const { isPending, isError, data, error } = useFetchUser(1);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="space-y-1 mb-4">
      <h2 className="text-lg font-semibold leading-none">{data.name}</h2>
      <p className="text-sm leading-none">{data.username}</p>
    </div>
  );
}
