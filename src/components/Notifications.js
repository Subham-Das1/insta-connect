import { useState } from 'react';
import { Heart, MessageCircle, UserPlus, Image as ImageIcon } from 'lucide-react';

export function Notifications() {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'like',
      user: {
        name: 'Emma Thompson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
      },
      content: 'liked your post',
      time: '2m ago',
      read: false
    },
    {
      id: 2,
      type: 'comment',
      user: {
        name: 'David Chen',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
      },
      content: 'commented on your photo',
      time: '1h ago',
      read: true
    },
    {
      id: 3,
      type: 'follow',
      user: {
        name: 'Sophie Williams',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
      },
      content: 'started following you',
      time: '3h ago',
      read: false
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'like':
        return <Heart className="h-5 w-5 text-red-500" />;
      case 'comment':
        return <MessageCircle className="h-5 w-5 text-blue-500" />;
      case 'follow':
        return <UserPlus className="h-5 w-5 text-green-500" />;
      default:
        return <ImageIcon className="h-5 w-5 text-purple-500" />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'all'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('mentions')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'mentions'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Mentions
          </button>
        </div>

        {/* Notifications List */}
        <div className="divide-y">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={notification.user.avatar}
                  alt={notification.user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">
                        {notification.user.name}
                      </span>
                      <span className="text-gray-500">{notification.content}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {notification.time}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    {getIcon(notification.type)}
                    <span className="text-sm text-gray-500">
                      {notification.type === 'like'
                        ? 'Liked your post'
                        : notification.type === 'comment'
                        ? 'Left a comment'
                        : 'Started following you'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
