import { Button } from "@/components/ui/button";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";

export const SuggestedUsers = () => {
  const suggestions = [
    {
      id: 1,
      username: "alex_photo",
      name: "Alex Photography",
      avatar: avatar1,
      mutualFollowers: 5,
    },
    {
      id: 2,
      username: "travel_diary",
      name: "Travel Diary",
      avatar: avatar2,
      mutualFollowers: 12,
    },
    {
      id: 3,
      username: "fitness_life",
      name: "Fitness Life",
      avatar: avatar1,
      mutualFollowers: 3,
    },
  ];

  return (
    <div className="bg-card border border-card-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-muted-foreground">Suggested for you</h3>
        <Button variant="ghost" size="sm" className="text-xs">
          See All
        </Button>
      </div>
      
      <div className="space-y-3">
        {suggestions.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{user.username}</p>
                <p className="text-xs text-muted-foreground">
                  Followed by {user.mutualFollowers} others
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="text-xs">
              Follow
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};