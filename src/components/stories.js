import { useState } from 'react';
import { Plus } from 'lucide-react';

export function Stories() {
  const [stories] = useState([
    {
      id: 1,
      user: {
        name: 'Your Story',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      },
      hasStory: false,
      viewed: false,
    },
    {
      id: 2,
      user: {
        name: 'Emma Thompson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      },
      hasStory: true,
      viewed: false,
    },
    {
      id: 3,
      user: {
        name: 'David Chen',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
      },
      hasStory: true,
      viewed: true,
    },
    {
      id: 4,
      user: {
        name: 'Sophie Williams',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      },
      hasStory: true,
      viewed: false,
    },
    {
      id: 5,
      user: {
        name: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      },
      hasStory: true,
      viewed: false,
    },
  ]);

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className={`relative w-16 h-16 rounded-full ${
              story.hasStory && !story.viewed
                ? 'p-1 bg-gradient-to-tr from-green-400 to-blue-600' // Changed border color
                : story.viewed
                ? 'p-1 bg-gray-300' // Adjusted viewed story color
                : ''
            }`}>
              <div className="relative w-full h-full bg-white rounded-full p-0.5">
                <img
                  src={story.user.avatar}
                  alt={story.user.name}
                  className="w-full h-full rounded-full object-cover"
                />
                {!story.hasStory && (
                  <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white">
                    <Plus className="w-3 h-3 text-white" />
                  </button>
                )}
              </div>
            </div>
            <span className="text-xs text-gray-600 truncate w-16 text-center">
              {story.user.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}