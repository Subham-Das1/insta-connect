import { Settings, MapPin, Link as LinkIcon } from 'lucide-react';

export function Profile() {
  const profile = {
    name: 'Sarah Wilson',
    username: 'sarahw',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
    bio: 'Photography enthusiast 📸 | Nature lover 🌿 | Coffee addict ☕',
    location: 'San Francisco, CA',
    website: 'sarahwilson.com',
    stats: {
      posts: 248,
      followers: 12400,
      following: 890,
    },
  };

  return (
    <div className="bg-white rounded-xl shadow">
      {/* Cover Photo */}
      <div className="h-48 md:h-64 overflow-hidden relative">
        <img
          src={profile.cover}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Info */}
      <div className="px-4 py-5 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end">
          {/* Avatar */}
          <div className="relative -mt-16 sm:-mt-24 mb-4 sm:mb-0">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-32 h-32 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Name and Stats */}
          <div className="sm:ml-6 flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-gray-500">@{profile.username}</p>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                <Settings className="h-5 w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 mt-4">
              <div className="text-center">
                <div className="font-bold">{profile.stats.posts}</div>
                <div className="text-gray-500 text-sm">Posts</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{profile.stats.followers.toLocaleString()}</div>
                <div className="text-gray-500 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{profile.stats.following.toLocaleString()}</div>
                <div className="text-gray-500 text-sm">Following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio and Info */}
        <div className="mt-6">
          <p className="text-gray-800 whitespace-pre-line">{profile.bio}</p>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <LinkIcon className="h-4 w-4 mr-2" />
              <a
                href={`https://${profile.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {profile.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t mt-6">
        <nav className="flex">
          <button className="flex-1 text-center py-4 font-medium border-b-2 border-blue-500 text-blue-500">
            Posts
          </button>
          <button className="flex-1 text-center py-4 font-medium text-gray-500 hover:text-gray-700">
            Media
          </button>
          <button className="flex-1 text-center py-4 font-medium text-gray-500 hover:text-gray-700">
            Likes
          </button>
        </nav>
      </div>
    </div>
  );
}
