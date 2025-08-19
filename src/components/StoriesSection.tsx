import { Story } from "./Story";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";

export const StoriesSection = () => {
  const stories = [
    { id: 1, username: "Your story", avatar: avatar1, isViewed: false },
    { id: 2, username: "sarah_joy", avatar: avatar2, isViewed: false },
    { id: 3, username: "mike_travels", avatar: avatar1, isViewed: true },
    { id: 4, username: "foodie_life", avatar: avatar2, isViewed: false },
    { id: 5, username: "art_studio", avatar: avatar1, isViewed: true },
    { id: 6, username: "nature_pics", avatar: avatar2, isViewed: false },
    { id: 7, username: "tech_guru", avatar: avatar1, isViewed: false },
  ];

  return (
    <div className="bg-card border border-card-border rounded-lg p-4 mb-6">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <Story
            key={story.id}
            username={story.username}
            avatar={story.avatar}
            isViewed={story.isViewed}
          />
        ))}
      </div>
    </div>
  );
};