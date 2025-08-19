import { Post } from "./Post";
import { StoriesSection } from "./StoriesSection";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";

export const Feed = () => {
  const posts = [
    {
      id: "1",
      username: "sarah_joy",
      avatar: avatar1,
      image: post1,
      caption: "Golden hour magic at the mountains! ✨ Nothing beats this view after a long hike.",
      likes: 342,
      timeAgo: "2 hours ago",
    },
    {
      id: "2",
      username: "mike_travels",
      avatar: avatar2,
      image: post2,
      caption: "Perfect morning coffee to start the day ☕️ This cozy cafe has the best atmosphere!",
      likes: 189,
      timeAgo: "5 hours ago",
    },
  ];

  return (
    <div className="max-w-md mx-auto">
      <StoriesSection />
      <div>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};