interface StoryProps {
  username: string;
  avatar: string;
  isViewed?: boolean;
}

export const Story = ({ username, avatar, isViewed = false }: StoryProps) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className={`p-0.5 rounded-full ${isViewed ? 'bg-border' : 'bg-gradient-story'} transition-transform group-hover:scale-105`}>
        <div className="w-16 h-16 rounded-full bg-card p-0.5">
          <img
            src={avatar}
            alt={username}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs text-muted-foreground max-w-[70px] truncate">
        {username}
      </span>
    </div>
  );
};