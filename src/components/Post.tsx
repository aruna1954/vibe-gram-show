import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface PostProps {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  timeAgo: string;
}

export const Post = ({ username, avatar, image, caption, likes, timeAgo }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-card border border-card-border rounded-lg overflow-hidden mb-6 shadow-post">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-story p-0.5">
            <img
              src={avatar}
              alt={username}
              className="w-full h-full rounded-full object-cover bg-card p-0.5"
            />
          </div>
          <span className="font-semibold text-sm">{username}</span>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Image */}
      <div className="aspect-square">
        <img
          src={image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLiked(!isLiked)}
              className="p-0 hover:bg-transparent"
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  isLiked ? "fill-red-500 text-red-500" : "text-foreground"
                }`}
              />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
              <MessageCircle className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
              <Send className="w-6 h-6" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSaved(!isSaved)}
            className="p-0 hover:bg-transparent"
          >
            <Bookmark
              className={`w-6 h-6 transition-colors ${
                isSaved ? "fill-foreground text-foreground" : "text-foreground"
              }`}
            />
          </Button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm mb-2">
          {isLiked ? likes + 1 : likes} likes
        </p>

        {/* Caption */}
        <div className="text-sm mb-2">
          <span className="font-semibold mr-2">{username}</span>
          <span>{caption}</span>
        </div>

        {/* Time */}
        <p className="text-xs text-muted-foreground">{timeAgo}</p>
      </div>
    </div>
  );
};