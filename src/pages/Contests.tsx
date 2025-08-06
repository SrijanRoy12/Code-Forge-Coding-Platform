import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Trophy, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock contest data
const mockContests = [
  {
    id: '1',
    title: 'Weekly Contest 375',
    description: 'Solve algorithmic problems in a timed environment',
    start_time: '2024-01-20T09:00:00Z',
    end_time: '2024-01-20T10:30:00Z',
    duration: 90,
    participants: 15420,
    status: 'Running' as const,
    is_rated: true,
    prize_pool: '$500',
    problems: ['1', '2', '3', '4'],
  },
  {
    id: '2',
    title: 'Biweekly Contest 120',
    description: 'Challenge yourself with harder problems',
    start_time: '2024-01-25T14:30:00Z',
    end_time: '2024-01-25T17:00:00Z',
    duration: 150,
    participants: 0,
    status: 'Upcoming' as const,
    is_rated: true,
    prize_pool: '$1000',
    problems: ['5', '6', '7', '8'],
  },
  {
    id: '3',
    title: 'Weekly Contest 374',
    description: 'Past contest with great problems',
    start_time: '2024-01-13T09:00:00Z',
    end_time: '2024-01-13T10:30:00Z',
    duration: 90,
    participants: 18750,
    status: 'Ended' as const,
    is_rated: true,
    problems: ['9', '10', '11', '12'],
  },
];

const statusColors = {
  Running: 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300',
  Upcoming: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300',
  Ended: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
};

const statusIcons = {
  Running: Trophy,
  Upcoming: Calendar,
  Ended: Star,
};

export const Contests: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTimeUntilStart = (startTime: string) => {
    const now = new Date();
    const start = new Date(startTime);
    const diff = start.getTime() - now.getTime();
    
    if (diff <= 0) return 'Started';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Contests
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Compete with developers worldwide in timed programming contests.
        </p>
      </div>

      {/* Contest Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center">
            <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <Trophy className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">124</h3>
              <p className="text-gray-600 dark:text-gray-300">Total Contests</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center">
            <div className="p-3 bg-success-100 dark:bg-success-900 rounded-lg">
              <Users className="h-6 w-6 text-success-600 dark:text-success-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">250K+</h3>
              <p className="text-gray-600 dark:text-gray-300">Participants</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center">
            <div className="p-3 bg-warning-100 dark:bg-warning-900 rounded-lg">
              <Star className="h-6 w-6 text-warning-600 dark:text-warning-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$50K+</h3>
              <p className="text-gray-600 dark:text-gray-300">Prize Pool</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contests List */}
      <div className="space-y-6">
        {mockContests.map((contest, index) => {
          const StatusIcon = statusIcons[contest.status];
          
          return (
            <motion.div
              key={contest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <StatusIcon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {contest.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {contest.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[contest.status]}`}>
                      {contest.status}
                    </span>
                    {contest.is_rated && (
                      <span className="px-3 py-1 bg-warning-100 dark:bg-warning-900 text-warning-700 dark:text-warning-300 rounded-full text-sm font-medium">
                        Rated
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(contest.start_time)}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{contest.duration} minutes</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{contest.participants > 0 ? `${contest.participants.toLocaleString()} participants` : 'No participants yet'}</span>
                  </div>
                  
                  {contest.prize_pool && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Trophy className="h-4 w-4 mr-2" />
                      <span>{contest.prize_pool} prize</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {contest.problems.length} problems
                    </span>
                    {contest.status === 'Upcoming' && (
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        Starts in {getTimeUntilStart(contest.start_time)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    {contest.status === 'Running' && (
                      <Link
                        to={`/contests/${contest.id}`}
                        className="inline-flex items-center px-4 py-2 bg-success-600 text-white rounded-lg hover:bg-success-700 transition-colors"
                      >
                        Join Contest
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                    
                    {contest.status === 'Upcoming' && (
                      <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                        Register
                        <Calendar className="ml-2 h-4 w-4" />
                      </button>
                    )}
                    
                    {contest.status === 'Ended' && (
                      <Link
                        to={`/contests/${contest.id}/results`}
                        className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        View Results
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to Compete?
        </h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Join thousands of developers in our weekly and monthly contests. 
          Improve your problem-solving skills and climb the global leaderboard.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
        >
          Create Account
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );
};