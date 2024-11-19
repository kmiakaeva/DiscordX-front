type Props = {
  name: string;
  username: string;
};

export function UserInfo({ name, username }: Props) {
  return (
    <div className="space-y-1 mb-4">
      <h2 className="text-lg font-semibold leading-none">{name}</h2>
      <p className="text-sm leading-none">{username}</p>
    </div>
  );
}
