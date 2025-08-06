export interface ContestData {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  duration: number; // in minutes
  problems: string[]; // problem IDs
  participants: number;
  status: 'Upcoming' | 'Running' | 'Ended';
  is_rated: boolean;
  prize_pool?: string;
}

export const contestsData: ContestData[] = [
  {
    id: '1',
    title: 'Weekly Contest 375',
    description: 'Solve algorithmic problems in a timed environment. Test your skills against developers worldwide.',
    start_time: '2024-01-20T09:00:00Z',
    end_time: '2024-01-20T10:30:00Z',
    duration: 90,
    problems: ['1', '26', '51', '60'], // Easy, Medium, Hard, Hard
    participants: 15420,
    status: 'Running',
    is_rated: true,
    prize_pool: '$500',
  },
  {
    id: '2',
    title: 'Biweekly Contest 120',
    description: 'Challenge yourself with harder problems and longer duration. Perfect for improving problem-solving skills.',
    start_time: '2024-01-25T14:30:00Z',
    end_time: '2024-01-25T17:00:00Z',
    duration: 150,
    problems: ['27', '32', '52', '61'], // Medium, Medium, Hard, Hard
    participants: 0,
    status: 'Upcoming',
    is_rated: true,
    prize_pool: '$1000',
  },
  {
    id: '3',
    title: 'Weekly Contest 374',
    description: 'Past contest with great algorithmic challenges. Review problems and learn from solutions.',
    start_time: '2024-01-13T09:00:00Z',
    end_time: '2024-01-13T10:30:00Z',
    duration: 90,
    problems: ['2', '28', '53', '62'], // Easy, Medium, Hard, Medium
    participants: 18750,
    status: 'Ended',
    is_rated: true,
  },
  {
    id: '4',
    title: 'Monthly Challenge - January',
    description: 'Monthly themed contest focusing on dynamic programming and graph algorithms.',
    start_time: '2024-01-28T10:00:00Z',
    end_time: '2024-01-28T13:00:00Z',
    duration: 180,
    problems: ['15', '29', '54', '63'], // Easy, Medium, Hard, Medium
    participants: 0,
    status: 'Upcoming',
    is_rated: true,
    prize_pool: '$2000',
  },
  {
    id: '5',
    title: 'Speed Coding Challenge',
    description: 'Fast-paced contest with shorter problems. Perfect for practicing implementation speed.',
    start_time: '2024-01-22T16:00:00Z',
    end_time: '2024-01-22T17:00:00Z',
    duration: 60,
    problems: ['3', '4', '5', '6'], // Easy problems for speed
    participants: 8934,
    status: 'Ended',
    is_rated: false,
  },
  {
    id: '6',
    title: 'Algorithm Masters Cup',
    description: 'Elite competition for advanced programmers. Featuring the most challenging problems.',
    start_time: '2024-02-01T12:00:00Z',
    end_time: '2024-02-01T16:00:00Z',
    duration: 240,
    problems: ['55', '56', '57', '58', '59'], // Hard problems
    participants: 0,
    status: 'Upcoming',
    is_rated: true,
    prize_pool: '$5000',
  },
  {
    id: '7',
    title: 'Beginner Friendly Contest',
    description: 'Perfect for newcomers to competitive programming. Focus on fundamental concepts.',
    start_time: '2024-01-30T18:00:00Z',
    end_time: '2024-01-30T20:00:00Z',
    duration: 120,
    problems: ['1', '2', '3', '4'], // Easy problems
    participants: 0,
    status: 'Upcoming',
    is_rated: false,
  },
  {
    id: '8',
    title: 'Data Structures Showdown',
    description: 'Contest focused on advanced data structures: trees, graphs, heaps, and more.',
    start_time: '2024-01-18T11:00:00Z',
    end_time: '2024-01-18T13:30:00Z',
    duration: 150,
    problems: ['18', '19', '20', '21'], // Tree problems
    participants: 12456,
    status: 'Ended',
    is_rated: true,
    prize_pool: '$750',
  },
  {
    id: '9',
    title: 'String Algorithms Special',
    description: 'Specialized contest featuring string manipulation and pattern matching problems.',
    start_time: '2024-02-03T15:00:00Z',
    end_time: '2024-02-03T17:30:00Z',
    duration: 150,
    problems: ['27', '28', '48', '74'], // String problems
    participants: 0,
    status: 'Upcoming',
    is_rated: true,
    prize_pool: '$800',
  },
  {
    id: '10',
    title: 'Math & Logic Challenge',
    description: 'Contest emphasizing mathematical thinking and logical problem solving.',
    start_time: '2024-02-05T13:00:00Z',
    end_time: '2024-02-05T15:00:00Z',
    duration: 120,
    problems: ['2', '30', '59', '69'], // Math problems
    participants: 0,
    status: 'Upcoming',
    is_rated: true,
    prize_pool: '$600',
  }
];

// Helper functions
export const getContestsByStatus = (status: 'Upcoming' | 'Running' | 'Ended') => {
  return contestsData.filter(contest => contest.status === status);
};

export const getContestById = (id: string) => {
  return contestsData.find(contest => contest.id === id);
};

export const getUpcomingContests = () => {
  return contestsData
    .filter(contest => contest.status === 'Upcoming')
    .sort((a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime());
};

export const getRunningContests = () => {
  return contestsData.filter(contest => contest.status === 'Running');
};

export const getPastContests = () => {
  return contestsData
    .filter(contest => contest.status === 'Ended')
    .sort((a, b) => new Date(b.start_time).getTime() - new Date(a.start_time).getTime());
};