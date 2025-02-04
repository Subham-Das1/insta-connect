import { useState } from "react";
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark } from "lucide-react";

export function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Sarah Wilson",
        username: "sarahw",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      },
      content: "Just finished my morning hike! The view was absolutely breathtaking 🏔️",
      image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80",
      likes: 243,
      comments: 18,
      timestamp: "2h ago",
      liked: false,
      saved: false,
    },
    {
      id: 2,
      user: {
        name: "Alex Chen",
        username: "alexc",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      },
      content: "Working on some new designs for an upcoming project. Can't wait to share more! 🎨",
      likes: 156,
      comments: 12,
      timestamp: "4h ago",
      liked: true,
      saved: true,
    },
  ]);

  const toggleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 } 
        : post
    ));
  };

  const toggleSave = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, saved: !post.saved } 
        : post
    ));
  };

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <article key={post.id} className="bg-white rounded-xl shadow">
          {/* Post Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold">{post.user.name}</h3>
                <p className="text-sm text-gray-500">@{post.user.username}</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Post Content */}
          <div className="px-4 py-2">
            <p className="text-gray-800">{post.content}</p>
          </div>

          {/* Post Image */}
          {post.image && (
            <div className="mt-2">
              <img src={post.image} alt="Post content" className="w-full object-cover max-h-[32rem]" />
            </div>
          )}

          {/* Post Actions */}
          <div className="px-4 py-2">
            <div className="flex items-center justify-between border-t border-b py-2">
              <div className="flex items-center space-x-4">
                <button onClick={() => toggleLike(post.id)} className={`flex items-center space-x-1 ${post.liked ? 'text-red-500' : 'text-gray-600'}`}>
                  <Heart className={`h-5 w-5 ${post.liked ? 'fill-current' : ''}`} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600">
                  <MessageCircle className="h-5 w-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="text-gray-600">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              <button onClick={() => toggleSave(post.id)} className={post.saved ? "text-blue-500" : "text-gray-600"}>
                <Bookmark className={`h-5 w-5 ${post.saved ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>

          {/* Post Footer */}
          <div className="px-4 py-2">
            <span className="text-sm text-gray-500">{post.timestamp}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
