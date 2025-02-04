import { useState } from 'react';
import { Search as SearchIcon, Hash } from 'lucide-react';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('top');

  const trendingTopics = [
    { tag: 'photography', posts: '125K' },
    { tag: 'technology', posts: '98K' },
    { tag: 'travel', posts: '85K' },
    { tag: 'food', posts: '76K' },
    { tag: 'art', posts: '65K' }
  ];

  const suggestedUsers = [
    {
      id: 1,
      name: 'Emma Thompson',
      username: 'emmaphoto',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      followers: '12.5K'
    },
    {
      id: 2,
      name: 'David Chen',
      username: 'davidtech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
      followers: '8.2K'
    },
    {
      id: 3,
      name: 'Sophie Williams',
      username: 'sophiearts',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      followers: '15.7K'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for people, topics, or keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('top')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'top'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Top
          </button>
          <button
            onClick={() => setActiveTab('people')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'people'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            People
          </button>
          <button
            onClick={() => setActiveTab('tags')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'tags'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Tags
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === 'top' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Trending Topics</h3>
              {trendingTopics.map((topic) => (
                <div
                  key={topic.tag}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <Hash className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">#{topic.tag}</p>
                      <p className="text-sm text-gray-500">{topic.posts} posts</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'people' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Suggested People</h3>
              {suggestedUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">@{user.username}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tags' && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <button
                    key={topic.tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{topic.tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
