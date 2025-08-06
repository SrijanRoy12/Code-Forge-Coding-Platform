import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, CheckCircle, Circle, Star, Users, Clock } from 'lucide-react';

// Mock data - replace with actual API calls
const mockProblems = [
  {
    id: '1',
    title: 'Two Sum',
    slug: 'two-sum',
    difficulty: 'Easy' as const,
    tags: ['Array', 'Hash Table'],
    companies: ['Google', 'Amazon', 'Microsoft'],
    acceptance_rate: 49.1,
    total_submissions: 8500000,
    likes: 25000,
    is_premium: false,
    status: 'solved' as const,
  },
  {
    id: '2',
    title: 'Add Two Numbers',
    slug: 'add-two-numbers',
    difficulty: 'Medium' as const,
    tags: ['Linked List', 'Math', 'Recursion'],
    companies: ['Facebook', 'Apple'],
    acceptance_rate: 35.8,
    total_submissions: 3200000,
    likes: 18000,
    is_premium: false,
    status: 'attempted' as const,
  },
  {
    id: '3',
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    difficulty: 'Medium' as const,
    tags: ['Hash Table', 'String', 'Sliding Window'],
    companies: ['Adobe', 'Bloomberg'],
    acceptance_rate: 33.0,
    total_submissions: 4100000,
    likes: 22000,
    is_premium: false,
    status: null,
  },
  {
    id: '4',
    title: 'Median of Two Sorted Arrays',
    slug: 'median-of-two-sorted-arrays',
    difficulty: 'Hard' as const,
    tags: ['Array', 'Binary Search', 'Divide and Conquer'],
    companies: ['Google', 'Microsoft'],
    acceptance_rate: 34.5,
    total_submissions: 1800000,
    likes: 15000,
    is_premium: true,
    status: null,
  },
];

const difficultyColors = {
  Easy: 'text-success-600 dark:text-success-400',
  Medium: 'text-warning-600 dark:text-warning-400',
  Hard: 'text-error-600 dark:text-error-400',
};

const statusIcons = {
  solved: CheckCircle,
  attempted: Circle,
};

export const Problems: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(mockProblems.flatMap(p => p.tags)));

  const filteredProblems = mockProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = !selectedDifficulty || problem.difficulty === selectedDifficulty;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => problem.tags.includes(tag));
    
    return matchesSearch && matchesDifficulty && matchesTags;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Problems
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Solve coding challenges to improve your algorithmic thinking and programming skills.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Tags Filter */}
          <div className="relative">
            <select
              multiple
              value={selectedTags}
              onChange={(e) => setSelectedTags(Array.from(e.target.selectedOptions, option => option.value))}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedDifficulty || selectedTags.length > 0) && (
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedDifficulty && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                {selectedDifficulty}
                <button
                  onClick={() => setSelectedDifficulty('')}
                  className="ml-2 text-primary-500 hover:text-primary-700"
                >
                  ×
                </button>
              </span>
            )}
            {selectedTags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-success-100 dark:bg-success-900 text-success-700 dark:text-success-300"
              >
                {tag}
                <button
                  onClick={() => setSelectedTags(tags => tags.filter(t => t !== tag))}
                  className="ml-2 text-success-500 hover:text-success-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Problems List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Acceptance
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Tags
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredProblems.map((problem, index) => {
                const StatusIcon = problem.status ? statusIcons[problem.status] : null;
                
                return (
                  <motion.tr
                    key={problem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {StatusIcon && (
                        <StatusIcon 
                          className={`h-5 w-5 ${
                            problem.status === 'solved' 
                              ? 'text-success-500' 
                              : 'text-warning-500'
                          }`} 
                        />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Link
                          to={`/problems/${problem.slug}`}
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                        >
                          {problem.title}
                        </Link>
                        {problem.is_premium && (
                          <Star className="ml-2 h-4 w-4 text-warning-500" />
                        )}
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <Users className="h-3 w-3 mr-1" />
                        {problem.total_submissions.toLocaleString()}
                        <span className="mx-2">•</span>
                        <span className="text-success-500">
                          {problem.likes.toLocaleString()} likes
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${difficultyColors[problem.difficulty]}`}>
                        {problem.difficulty}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {problem.acceptance_rate}%
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {problem.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {problem.tags.length > 3 && (
                          <span className="inline-block px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                            +{problem.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {filteredProblems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 text-lg">
            No problems found matching your criteria.
          </div>
        </div>
      )}
    </div>
  );
};