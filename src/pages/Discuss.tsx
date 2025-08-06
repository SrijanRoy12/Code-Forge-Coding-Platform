import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, ThumbsUp, MessageSquare, Clock, Pin, Filter } from 'lucide-react';

// Mock discussion data
const mockDiscussions = [
  {
    id: '1',
    title: 'Two Sum - Multiple approaches and optimization techniques',
    content: 'I wanted to share different ways to solve the Two Sum problem and discuss their time complexities...',
    user: {
      username: 'algo_master',
      avatar_url: null,
    },
    problem_title: 'Two Sum',
    tags: ['Hash Table', 'Array', 'Optimization'],
    upvotes: 156,
    replies_count: 23,
    is_pinned: true,
    created_at: '2024-01-15T10:30:00Z',
  },
  {
    id: '2',
    title: 'Best practices for competitive programming in Python',
    content: 'After participating in many contests, here are some Python-specific tips that helped me...',
    user: {
      username: 'python_guru',
      avatar_url: null,
    },
    tags: ['Python', 'Tips', 'Competitive Programming'],
    upvotes: 89,
    replies_count: 15,
    is_pinned: false,
    created_at: '2024-01-14T16:45:00Z',
  },
  {
    id: '3',
    title: 'Weekly Contest 374 - Problem 3 discussion',
    content: 'Did anyone else struggle with the third problem? I got TLE on large inputs...',
    user: {
      username: 'contest_lover',
      avatar_url: null,
    },
    contest_title: 'Weekly Contest 374',
    tags: ['Contest', 'Time Limit Exceeded'],
    upvotes: 42,
    replies_count: 8,
    is_pinned: false,
    created_at: '2024-01-13T11:20:00Z',
  },
  {
    id: '4',
    title: 'Dynamic Programming patterns and when to use them',
    content: 'A comprehensive guide to recognizing DP problems and choosing the right approach...',
    user: {
      username: 'dp_expert',
      avatar_url: null,
    },
    tags: ['Dynamic Programming', 'Patterns', 'Guide'],
    upvotes: 234,
    replies_count: 45,
    is_pinned: false,
    created_at: '2024-01-12T09:15:00Z',
  },
];

const allTags = Array.from(new Set(mockDiscussions.flatMap(d => d.tags)));

export const Discuss: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'replies'>('recent');

  const filteredDiscussions = mockDiscussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         discussion.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => discussion.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (a.is_pinned && !b.is_pinned) return -1;
    if (!a.is_pinned && b.is_pinned) return 1;
    
    switch (sortBy) {
      case 'popular':
        return b.upvotes - a.upvotes;
      case 'replies':
        return b.replies_count - a.replies_count;
      case 'recent':
      default:
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
  });

  const formatTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Discussions
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Share knowledge, ask questions, and learn from the community.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Discussion
        </motion.button>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="replies">Most Replies</option>
          </select>

          {/* Tags Filter */}
          <select
            multiple
            value={selectedTags}
            onChange={(e) => setSelectedTags(Array.from(e.target.selectedOptions, option => option.value))}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        {/* Active Filters */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedTags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
              >
                {tag}
                <button
                  onClick={() => setSelectedTags(tags => tags.filter(t => t !== tag))}
                  className="ml-2 text-primary-500 hover:text-primary-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Discussions List */}
      <div className="space-y-4">
        {sortedDiscussions.map((discussion, index) => (
          <motion.div
            key={discussion.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start space-x-4">
              {/* User Avatar */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">
                    {discussion.user.username[0].toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  {discussion.is_pinned && (
                    <Pin className="h-4 w-4 text-warning-500" />
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    {discussion.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                  {discussion.content}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>by {discussion.user.username}</span>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTimeAgo(discussion.created_at)}
                    </div>
                    {discussion.problem_title && (
                      <span className="text-primary-600 dark:text-primary-400">
                        in {discussion.problem_title}
                      </span>
                    )}
                    {discussion.contest_title && (
                      <span className="text-warning-600 dark:text-warning-400">
                        in {discussion.contest_title}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {discussion.upvotes}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {discussion.replies_count}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {discussion.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {sortedDiscussions.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No discussions found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Be the first to start a discussion on this topic.
          </p>
          <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <Plus className="h-4 w-4 mr-2" />
            Start Discussion
          </button>
        </div>
      )}
    </div>
  );
};