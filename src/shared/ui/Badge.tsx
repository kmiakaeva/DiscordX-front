import { BadgeStatus } from '../model/types';

const badgeStatusConfig = {
  online: { color: 'bg-green-500', icon: <circle cx="6" cy="6" fill="currentColor" /> },
  inactive: {
    color: 'bg-zinc-800',
    icon: (
      <g>
        <circle cx="7" cy="7" r="5" fill="#fbbf24" />
        <circle cx="5" cy="5" r="3" fill="#27272a" />
      </g>
    ),
  },
  doNotDisturb: {
    color: 'bg-red-500',
    icon: (
      <g>
        <rect x="2.5" y="5.5" width="7.5" height="2" fill="#27272a" />
      </g>
    ),
  },
  invisible: {
    color: 'bg-zinc-400',
    icon: (
      <g>
        <circle cx="6" cy="6" r="4" fill="#27272a" />
      </g>
    ),
  },
};

export function Badge({ status }: { status: BadgeStatus }) {
  const { color, icon } = badgeStatusConfig[status];

  return (
    <div
      className={`absolute bottom-[1px] right-[-1px] h-4 w-4 rounded-full ${color} flex items-center justify-center`}
    >
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        {icon}
      </svg>
    </div>
  );
}
