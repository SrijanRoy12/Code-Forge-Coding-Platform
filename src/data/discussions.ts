export interface DiscussionData {
  id: string;
  title: string;
  content: string;
  user: {
    username: string;
    avatar_url?: string;
  };
  problem_title?: string;
  contest_title?: string;
  tags: string[];
  upvotes: number;
  replies_count: number;
  is_pinned: boolean;
  created_at: string;
}

export const discussionsData: DiscussionData[] = [
  {
    id: '1',
    title: 'Two Sum - Multiple approaches and optimization techniques',
    content: 'I wanted to share different ways to solve the Two Sum problem and discuss their time complexities. The brute force approach is O(n²), but we can optimize it to O(n) using a hash map. Here are the key insights...',
    user: {
      username: 'algo_master',
      avatar_url: undefined,
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
    content: 'After participating in many contests, here are some Python-specific tips that helped me improve my ranking: 1. Use sys.stdin for faster input, 2. Prefer list comprehensions, 3. Know your built-in functions...',
    user: {
      username: 'python_guru',
      avatar_url: undefined,
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
    content: 'Did anyone else struggle with the third problem? I got TLE on large inputs even with what I thought was an optimal solution. Looking for hints on the correct approach...',
    user: {
      username: 'contest_lover',
      avatar_url: undefined,
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
    content: 'A comprehensive guide to recognizing DP problems and choosing the right approach. I\'ll cover: 1. Optimal substructure, 2. Overlapping subproblems, 3. Common patterns like knapsack, LIS, LCS...',
    user: {
      username: 'dp_expert',
      avatar_url: undefined,
    },
    tags: ['Dynamic Programming', 'Patterns', 'Guide'],
    upvotes: 234,
    replies_count: 45,
    is_pinned: false,
    created_at: '2024-01-12T09:15:00Z',
  },
  {
    id: '5',
    title: 'Binary Search - Common mistakes and how to avoid them',
    content: 'Binary search seems simple but has many edge cases. Here are the most common mistakes I see: 1. Integer overflow in mid calculation, 2. Infinite loops with wrong boundary updates, 3. Off-by-one errors...',
    user: {
      username: 'binary_search_pro',
      avatar_url: undefined,
    },
    tags: ['Binary Search', 'Common Mistakes', 'Tutorial'],
    upvotes: 178,
    replies_count: 31,
    is_pinned: false,
    created_at: '2024-01-11T14:22:00Z',
  },
  {
    id: '6',
    title: 'Graph algorithms cheat sheet',
    content: 'Quick reference for graph algorithms with time complexities: DFS O(V+E), BFS O(V+E), Dijkstra O((V+E)logV), Floyd-Warshall O(V³), Kruskal O(ElogE), Prim O(ElogV)...',
    user: {
      username: 'graph_ninja',
      avatar_url: undefined,
    },
    tags: ['Graph', 'Algorithms', 'Cheat Sheet'],
    upvotes: 312,
    replies_count: 18,
    is_pinned: true,
    created_at: '2024-01-10T08:45:00Z',
  },
  {
    id: '7',
    title: 'Sliding Window technique explained with examples',
    content: 'The sliding window technique is powerful for array/string problems. I\'ll explain with examples: 1. Fixed size windows, 2. Variable size windows, 3. When to expand vs contract the window...',
    user: {
      username: 'sliding_window_master',
      avatar_url: undefined,
    },
    tags: ['Sliding Window', 'Array', 'String', 'Tutorial'],
    upvotes: 145,
    replies_count: 27,
    is_pinned: false,
    created_at: '2024-01-09T13:18:00Z',
  },
  {
    id: '8',
    title: 'Backtracking vs Dynamic Programming - When to use which?',
    content: 'Both techniques solve optimization problems but in different ways. Backtracking explores all possibilities, DP stores solutions to subproblems. Here\'s how to choose...',
    user: {
      username: 'optimization_expert',
      avatar_url: undefined,
    },
    tags: ['Backtracking', 'Dynamic Programming', 'Comparison'],
    upvotes: 203,
    replies_count: 39,
    is_pinned: false,
    created_at: '2024-01-08T11:30:00Z',
  },
  {
    id: '9',
    title: 'Tree traversal methods - Recursive vs Iterative',
    content: 'Comparing different approaches to tree traversal. Recursive is cleaner but uses O(h) space. Iterative uses explicit stack but gives more control. Morris traversal uses O(1) space...',
    user: {
      username: 'tree_traverser',
      avatar_url: undefined,
    },
    problem_title: 'Binary Tree Inorder Traversal',
    tags: ['Tree', 'Traversal', 'Recursion', 'Iteration'],
    upvotes: 167,
    replies_count: 22,
    is_pinned: false,
    created_at: '2024-01-07T15:42:00Z',
  },
  {
    id: '10',
    title: 'Bit manipulation tricks every programmer should know',
    content: 'Essential bit manipulation techniques: 1. Check if power of 2: n & (n-1) == 0, 2. Toggle bit: n ^= (1 << i), 3. Count set bits: Brian Kernighan\'s algorithm...',
    user: {
      username: 'bit_wizard',
      avatar_url: undefined,
    },
    tags: ['Bit Manipulation', 'Tricks', 'Optimization'],
    upvotes: 289,
    replies_count: 33,
    is_pinned: false,
    created_at: '2024-01-06T09:25:00Z',
  },
  {
    id: '11',
    title: 'String algorithms - KMP, Rabin-Karp, and Z-algorithm',
    content: 'Deep dive into advanced string matching algorithms. When to use each one and their trade-offs in terms of preprocessing time, search time, and space complexity...',
    user: {
      username: 'string_algorithms_guru',
      avatar_url: undefined,
    },
    tags: ['String', 'KMP', 'Rabin-Karp', 'Z-algorithm'],
    upvotes: 198,
    replies_count: 41,
    is_pinned: false,
    created_at: '2024-01-05T12:15:00Z',
  },
  {
    id: '12',
    title: 'How to approach system design problems in coding interviews',
    content: 'System design is becoming more common in coding interviews. Here\'s my framework: 1. Clarify requirements, 2. Estimate scale, 3. Design high-level architecture, 4. Deep dive into components...',
    user: {
      username: 'system_designer',
      avatar_url: undefined,
    },
    tags: ['System Design', 'Interview', 'Architecture'],
    upvotes: 456,
    replies_count: 67,
    is_pinned: true,
    created_at: '2024-01-04T16:30:00Z',
  },
  {
    id: '13',
    title: 'Greedy algorithms - How to identify and prove correctness',
    content: 'Greedy algorithms make locally optimal choices. Key is proving the greedy choice property and optimal substructure. Examples: Activity selection, Huffman coding, Dijkstra...',
    user: {
      username: 'greedy_optimizer',
      avatar_url: undefined,
    },
    tags: ['Greedy', 'Algorithms', 'Proof'],
    upvotes: 134,
    replies_count: 19,
    is_pinned: false,
    created_at: '2024-01-03T10:45:00Z',
  },
  {
    id: '14',
    title: 'Debugging strategies for competitive programming',
    content: 'Common debugging techniques when your solution fails: 1. Test with small inputs, 2. Add print statements, 3. Check edge cases, 4. Verify algorithm correctness, 5. Look for integer overflow...',
    user: {
      username: 'debug_master',
      avatar_url: undefined,
    },
    tags: ['Debugging', 'Competitive Programming', 'Tips'],
    upvotes: 87,
    replies_count: 14,
    is_pinned: false,
    created_at: '2024-01-02T14:20:00Z',
  },
  {
    id: '15',
    title: 'Mathematics in competitive programming',
    content: 'Essential math topics: 1. Number theory (GCD, LCM, prime factorization), 2. Combinatorics (permutations, combinations), 3. Probability, 4. Linear algebra basics...',
    user: {
      username: 'math_competitive',
      avatar_url: undefined,
    },
    tags: ['Mathematics', 'Number Theory', 'Combinatorics'],
    upvotes: 267,
    replies_count: 52,
    is_pinned: false,
    created_at: '2024-01-01T11:00:00Z',
  }
];

// Helper functions
export const getDiscussionsByTag = (tag: string) => {
  return discussionsData.filter(discussion => discussion.tags.includes(tag));
};

export const getPinnedDiscussions = () => {
  return discussionsData.filter(discussion => discussion.is_pinned);
};

export const getDiscussionsByProblem = (problemTitle: string) => {
  return discussionsData.filter(discussion => discussion.problem_title === problemTitle);
};

export const getDiscussionsByContest = (contestTitle: string) => {
  return discussionsData.filter(discussion => discussion.contest_title === contestTitle);
};

export const getAllDiscussionTags = () => {
  const tags = new Set<string>();
  discussionsData.forEach(discussion => {
    discussion.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const searchDiscussions = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return discussionsData.filter(discussion => 
    discussion.title.toLowerCase().includes(lowercaseQuery) ||
    discussion.content.toLowerCase().includes(lowercaseQuery) ||
    discussion.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};