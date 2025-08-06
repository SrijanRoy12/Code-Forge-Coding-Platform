export interface User {
  id: string;
  email: string;
  username: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
  country?: string;
  company?: string;
  github_url?: string;
  linkedin_url?: string;
  total_solved: number;
  easy_solved: number;
  medium_solved: number;
  hard_solved: number;
  ranking: number;
  contest_rating: number;
  max_streak: number;
  current_streak: number;
  created_at: string;
  updated_at: string;
}

export interface Problem {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  companies: string[];
  likes: number;
  dislikes: number;
  acceptance_rate: number;
  total_submissions: number;
  total_accepted: number;
  constraints: string;
  examples: ProblemExample[];
  hints: string[];
  similar_problems: string[];
  editorial_id?: string;
  is_premium: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProblemExample {
  input: string;
  output: string;
  explanation?: string;
}

export interface Submission {
  id: string;
  user_id: string;
  problem_id: string;
  language: string;
  code: string;
  status: 'Pending' | 'Accepted' | 'Wrong Answer' | 'Time Limit Exceeded' | 'Memory Limit Exceeded' | 'Runtime Error' | 'Compile Error';
  runtime?: number;
  memory?: number;
  error_message?: string;
  test_cases_passed: number;
  total_test_cases: number;
  submitted_at: string;
}

export interface Contest {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  duration: number; // in minutes
  problems: string[]; // problem IDs
  participants: number;
  is_rated: boolean;
  prize_pool?: string;
  status: 'Upcoming' | 'Running' | 'Ended';
  created_at: string;
}

export interface Discussion {
  id: string;
  user_id: string;
  problem_id?: string;
  contest_id?: string;
  title: string;
  content: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  replies_count: number;
  is_pinned: boolean;
  created_at: string;
  updated_at: string;
}

export interface Editorial {
  id: string;
  problem_id: string;
  title: string;
  content: string;
  approach: string;
  complexity_analysis: string;
  code_solutions: CodeSolution[];
  diagrams?: string[];
  created_at: string;
  updated_at: string;
}

export interface CodeSolution {
  language: string;
  code: string;
  explanation: string;
}

export interface TestCase {
  id: string;
  problem_id: string;
  input: string;
  expected_output: string;
  is_example: boolean;
  is_hidden: boolean;
}

export type ProgrammingLanguage = 
  | 'javascript'
  | 'python'
  | 'java'
  | 'cpp'
  | 'c'
  | 'csharp'
  | 'go'
  | 'rust'
  | 'typescript';

export interface CodeExecutionResult {
  status: 'success' | 'error' | 'timeout';
  output?: string;
  error?: string;
  runtime?: number;
  memory?: number;
}