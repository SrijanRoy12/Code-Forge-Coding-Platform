export interface ProblemData {
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
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  hints: string[];
  similar_problems: string[];
  is_premium: boolean;
  template: {
    python: string;
    javascript: string;
    java: string;
    cpp: string;
  };
}

export const problemsData: ProblemData[] = [
  // EASY PROBLEMS (25 problems)
  {
    id: '1',
    title: 'Two Sum',
    slug: 'two-sum',
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    difficulty: 'Easy',
    tags: ['Array', 'Hash Table'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Facebook'],
    likes: 25847,
    dislikes: 892,
    acceptance_rate: 49.1,
    total_submissions: 8500000,
    total_accepted: 4173500,
    constraints: `• 2 <= nums.length <= 10^4
• -10^9 <= nums[i] <= 10^9
• -10^9 <= target <= 10^9
• Only one valid answer exists.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      },
      {
        input: 'nums = [3,3], target = 6',
        output: '[0,1]'
      }
    ],
    hints: [
      'A really brute force way would be to search for all possible pairs of numbers but that would be too slow.',
      'So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter.',
      'Can we change our array somehow so that this search becomes faster?'
    ],
    similar_problems: ['15', '18', '454'],
    is_premium: false,
    template: {
      python: `def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Your code here
};`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '2',
    title: 'Palindrome Number',
    slug: 'palindrome-number',
    description: `Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.`,
    difficulty: 'Easy',
    tags: ['Math'],
    companies: ['Amazon', 'Microsoft', 'Apple'],
    likes: 8234,
    dislikes: 2156,
    acceptance_rate: 52.3,
    total_submissions: 3200000,
    total_accepted: 1673600,
    constraints: `• -2^31 <= x <= 2^31 - 1`,
    examples: [
      {
        input: 'x = 121',
        output: 'true',
        explanation: '121 reads as 121 from left to right and from right to left.'
      },
      {
        input: 'x = -121',
        output: 'false',
        explanation: 'From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.'
      },
      {
        input: 'x = 10',
        output: 'false',
        explanation: 'Reads 01 from right to left. Therefore it is not a palindrome.'
      }
    ],
    hints: [
      'Beware of overflow when you reverse the integer.',
      'Could you solve it without converting the integer to a string?'
    ],
    similar_problems: ['125', '234'],
    is_premium: false,
    template: {
      python: `def isPalindrome(x):
    """
    :type x: int
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Your code here
};`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Your code here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isPalindrome(int x) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '3',
    title: 'Roman to Integer',
    slug: 'roman-to-integer',
    description: `Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.`,
    difficulty: 'Easy',
    tags: ['Hash Table', 'Math', 'String'],
    companies: ['Google', 'Microsoft', 'Amazon'],
    likes: 6789,
    dislikes: 423,
    acceptance_rate: 58.7,
    total_submissions: 2100000,
    total_accepted: 1232700,
    constraints: `• 1 <= s.length <= 15
• s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
• It is guaranteed that s is a valid roman numeral in the range [1, 3999].`,
    examples: [
      {
        input: 's = "III"',
        output: '3',
        explanation: 'III = 3.'
      },
      {
        input: 's = "LVIII"',
        output: '58',
        explanation: 'L = 50, V= 5, III = 3.'
      },
      {
        input: 's = "MCMXC"',
        output: '1994',
        explanation: 'M = 1000, CM = 900, XC = 90.'
      }
    ],
    hints: [
      'Problem is simpler to solve by working the string from back to front and using a map.',
      'If the current character represents a value smaller than the one to its right, then subtract it.'
    ],
    similar_problems: ['12'],
    is_premium: false,
    template: {
      python: `def romanToInt(s):
    """
    :type s: str
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Your code here
};`,
      java: `class Solution {
    public int romanToInt(String s) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int romanToInt(string s) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '4',
    title: 'Longest Common Prefix',
    slug: 'longest-common-prefix',
    description: `Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".`,
    difficulty: 'Easy',
    tags: ['String', 'Trie'],
    companies: ['Google', 'Amazon', 'Microsoft'],
    likes: 5432,
    dislikes: 3210,
    acceptance_rate: 40.2,
    total_submissions: 1800000,
    total_accepted: 723600,
    constraints: `• 1 <= strs.length <= 200
• 0 <= strs[i].length <= 200
• strs[i] consists of only lower-case English letters.`,
    examples: [
      {
        input: 'strs = ["flower","flow","flight"]',
        output: '"fl"'
      },
      {
        input: 'strs = ["dog","racecar","car"]',
        output: '""',
        explanation: 'There is no common prefix among the input strings.'
      }
    ],
    hints: [
      'A simple approach is to compare characters at each position across all strings.',
      'You can also use a trie data structure for an efficient solution.'
    ],
    similar_problems: [],
    is_premium: false,
    template: {
      python: `def longestCommonPrefix(strs):
    """
    :type strs: List[str]
    :rtype: str
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Your code here
};`,
      java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Your code here
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        // Your code here
        return "";
    }
};`
    }
  },
  {
    id: '5',
    title: 'Valid Parentheses',
    slug: 'valid-parentheses',
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
    difficulty: 'Easy',
    tags: ['String', 'Stack'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple'],
    likes: 15234,
    dislikes: 678,
    acceptance_rate: 40.8,
    total_submissions: 4200000,
    total_accepted: 1713600,
    constraints: `• 1 <= s.length <= 10^4
• s consists of parentheses only '()[]{}'.`,
    examples: [
      {
        input: 's = "()"',
        output: 'true'
      },
      {
        input: 's = "()[]{}"',
        output: 'true'
      },
      {
        input: 's = "(]"',
        output: 'false'
      }
    ],
    hints: [
      'Use a stack to keep track of opening brackets.',
      'When you encounter a closing bracket, check if it matches the most recent opening bracket.'
    ],
    similar_problems: ['22', '32', '301'],
    is_premium: false,
    template: {
      python: `def isValid(s):
    """
    :type s: str
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Your code here
};`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Your code here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isValid(string s) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '6',
    title: 'Merge Two Sorted Lists',
    slug: 'merge-two-sorted-lists',
    description: `You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,
    difficulty: 'Easy',
    tags: ['Linked List', 'Recursion'],
    companies: ['Amazon', 'Microsoft', 'Apple', 'Google'],
    likes: 12456,
    dislikes: 1123,
    acceptance_rate: 61.2,
    total_submissions: 2800000,
    total_accepted: 1713600,
    constraints: `• The number of nodes in both lists is in the range [0, 50].
• -100 <= Node.val <= 100
• Both list1 and list2 are sorted in non-decreasing order.`,
    examples: [
      {
        input: 'list1 = [1,2,4], list2 = [1,3,4]',
        output: '[1,1,2,3,4,4]'
      },
      {
        input: 'list1 = [], list2 = []',
        output: '[]'
      },
      {
        input: 'list1 = [], list2 = [0]',
        output: '[0]'
      }
    ],
    hints: [
      'Use a dummy node to simplify the merging process.',
      'Compare the values of the current nodes and choose the smaller one.'
    ],
    similar_problems: ['23', '88', '148'],
    is_premium: false,
    template: {
      python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def mergeTwoLists(list1, list2):
    """
    :type list1: ListNode
    :type list2: ListNode
    :rtype: ListNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Your code here
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '7',
    title: 'Remove Duplicates from Sorted Array',
    slug: 'remove-duplicates-from-sorted-array',
    description: `Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.`,
    difficulty: 'Easy',
    tags: ['Array', 'Two Pointers'],
    companies: ['Microsoft', 'Amazon', 'Google'],
    likes: 8765,
    dislikes: 12345,
    acceptance_rate: 51.4,
    total_submissions: 3500000,
    total_accepted: 1799000,
    constraints: `• 1 <= nums.length <= 3 * 10^4
• -100 <= nums[i] <= 100
• nums is sorted in non-decreasing order.`,
    examples: [
      {
        input: 'nums = [1,1,2]',
        output: '2, nums = [1,2,_]',
        explanation: 'Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.'
      },
      {
        input: 'nums = [0,0,1,1,1,2,2,3,3,4]',
        output: '5, nums = [0,1,2,3,4,_,_,_,_,_]',
        explanation: 'Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.'
      }
    ],
    hints: [
      'Use two pointers: one for the current position and one for the next unique element.',
      'Since the array is sorted, duplicates will be adjacent.'
    ],
    similar_problems: ['80', '283'],
    is_premium: false,
    template: {
      python: `def removeDuplicates(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Your code here
};`,
      java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '8',
    title: 'Remove Element',
    slug: 'remove-element',
    description: `Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.`,
    difficulty: 'Easy',
    tags: ['Array', 'Two Pointers'],
    companies: ['Amazon', 'Microsoft'],
    likes: 4321,
    dislikes: 6789,
    acceptance_rate: 53.2,
    total_submissions: 2100000,
    total_accepted: 1117200,
    constraints: `• 0 <= nums.length <= 100
• 0 <= nums[i] <= 50
• 0 <= val <= 100`,
    examples: [
      {
        input: 'nums = [3,2,2,3], val = 3',
        output: '2, nums = [2,2,_,_]',
        explanation: 'Your function should return k = 2, with the first two elements of nums being 2.'
      },
      {
        input: 'nums = [0,1,2,2,3,0,4,2], val = 2',
        output: '5, nums = [0,1,4,0,3,_,_,_]',
        explanation: 'Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.'
      }
    ],
    hints: [
      'Use two pointers to track the current position and the position to place the next valid element.',
      'When you find an element that is not equal to val, place it at the current position.'
    ],
    similar_problems: ['26', '203', '283'],
    is_premium: false,
    template: {
      python: `def removeElement(nums, val):
    """
    :type nums: List[int]
    :type val: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Your code here
};`,
      java: `class Solution {
    public int removeElement(int[] nums, int val) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '9',
    title: 'Find the Index of the First Occurrence in a String',
    slug: 'find-the-index-of-the-first-occurrence-in-a-string',
    description: `Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.`,
    difficulty: 'Easy',
    tags: ['Two Pointers', 'String', 'String Matching'],
    companies: ['Google', 'Amazon', 'Microsoft'],
    likes: 3456,
    dislikes: 234,
    acceptance_rate: 37.8,
    total_submissions: 1900000,
    total_accepted: 718200,
    constraints: `• 1 <= haystack.length, needle.length <= 10^4
• haystack and needle consist of only lowercase English characters.`,
    examples: [
      {
        input: 'haystack = "sadbutsad", needle = "sad"',
        output: '0',
        explanation: '"sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.'
      },
      {
        input: 'haystack = "leetcode", needle = "leeto"',
        output: '-1',
        explanation: '"leeto" did not occur in "leetcode", so we return -1.'
      }
    ],
    hints: [
      'Use the built-in string search function if allowed.',
      'Implement KMP algorithm for an efficient solution.',
      'A simple approach is to check every possible starting position.'
    ],
    similar_problems: ['214', '459'],
    is_premium: false,
    template: {
      python: `def strStr(haystack, needle):
    """
    :type haystack: str
    :type needle: str
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Your code here
};`,
      java: `class Solution {
    public int strStr(String haystack, String needle) {
        // Your code here
        return -1;
    }
}`,
      cpp: `class Solution {
public:
    int strStr(string haystack, string needle) {
        // Your code here
        return -1;
    }
};`
    }
  },
  {
    id: '10',
    title: 'Search Insert Position',
    slug: 'search-insert-position',
    description: `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.`,
    difficulty: 'Easy',
    tags: ['Array', 'Binary Search'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 9876,
    dislikes: 456,
    acceptance_rate: 42.1,
    total_submissions: 2300000,
    total_accepted: 968300,
    constraints: `• 1 <= nums.length <= 10^4
• -10^4 <= nums[i] <= 10^4
• nums contains distinct values sorted in ascending order.
• -10^4 <= target <= 10^4`,
    examples: [
      {
        input: 'nums = [1,3,5,6], target = 5',
        output: '2'
      },
      {
        input: 'nums = [1,3,5,6], target = 2',
        output: '1'
      },
      {
        input: 'nums = [1,3,5,6], target = 7',
        output: '4'
      }
    ],
    hints: [
      'Use binary search to achieve O(log n) time complexity.',
      'Think about what happens when the target is not found.'
    ],
    similar_problems: ['278', '374', '704'],
    is_premium: false,
    template: {
      python: `def searchInsert(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // Your code here
};`,
      java: `class Solution {
    public int searchInsert(int[] nums, int target) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '11',
    title: 'Length of Last Word',
    slug: 'length-of-last-word',
    description: `Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.`,
    difficulty: 'Easy',
    tags: ['String'],
    companies: ['Amazon', 'Microsoft'],
    likes: 2345,
    dislikes: 123,
    acceptance_rate: 38.9,
    total_submissions: 1200000,
    total_accepted: 466800,
    constraints: `• 1 <= s.length <= 10^4
• s consists of only English letters and spaces ' '.
• There is at least one word in s.`,
    examples: [
      {
        input: 's = "Hello World"',
        output: '5',
        explanation: 'The last word is "World" with length 5.'
      },
      {
        input: 's = "   fly me   to   the moon  "',
        output: '4',
        explanation: 'The last word is "moon" with length 4.'
      },
      {
        input: 's = "luffy is still joyboy"',
        output: '6',
        explanation: 'The last word is "joyboy" with length 6.'
      }
    ],
    hints: [
      'Trim the string and split by spaces.',
      'Alternatively, iterate from the end of the string.'
    ],
    similar_problems: [],
    is_premium: false,
    template: {
      python: `def lengthOfLastWord(s):
    """
    :type s: str
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Your code here
};`,
      java: `class Solution {
    public int lengthOfLastWord(String s) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int lengthOfLastWord(string s) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '12',
    title: 'Plus One',
    slug: 'plus-one',
    description: `You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading zeros.

Increment the large integer by one and return the resulting array of digits.`,
    difficulty: 'Easy',
    tags: ['Array', 'Math'],
    companies: ['Google', 'Amazon'],
    likes: 5678,
    dislikes: 4321,
    acceptance_rate: 42.7,
    total_submissions: 1800000,
    total_accepted: 768600,
    constraints: `• 1 <= digits.length <= 100
• 0 <= digits[i] <= 9
• digits does not contain any leading zeros.`,
    examples: [
      {
        input: 'digits = [1,2,3]',
        output: '[1,2,4]',
        explanation: 'The array represents the integer 123. Incrementing by one gives 123 + 1 = 124.'
      },
      {
        input: 'digits = [4,3,2,1]',
        output: '[4,3,2,2]',
        explanation: 'The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322.'
      },
      {
        input: 'digits = [9]',
        output: '[1,0]',
        explanation: 'The array represents the integer 9. Incrementing by one gives 9 + 1 = 10.'
      }
    ],
    hints: [
      'Handle the carry-over when adding 1.',
      'Consider the edge case where all digits are 9.'
    ],
    similar_problems: ['2', '43', '67', '989'],
    is_premium: false,
    template: {
      python: `def plusOne(digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Your code here
};`,
      java: `class Solution {
    public int[] plusOne(int[] digits) {
        // Your code here
        return new int[]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '13',
    title: 'Add Binary',
    slug: 'add-binary',
    description: `Given two binary strings a and b, return their sum as a binary string.`,
    difficulty: 'Easy',
    tags: ['Math', 'String', 'Bit Manipulation', 'Simulation'],
    companies: ['Facebook', 'Amazon', 'Microsoft'],
    likes: 6789,
    dislikes: 678,
    acceptance_rate: 50.3,
    total_submissions: 1500000,
    total_accepted: 754500,
    constraints: `• 1 <= a.length, b.length <= 10^4
• a and b consist only of '0' or '1' characters.
• Each string does not contain leading zeros except for the zero itself.`,
    examples: [
      {
        input: 'a = "11", b = "1"',
        output: '"100"'
      },
      {
        input: 'a = "1010", b = "1011"',
        output: '"10101"'
      }
    ],
    hints: [
      'Simulate the addition process from right to left.',
      'Keep track of the carry bit.',
      'Handle different string lengths properly.'
    ],
    similar_problems: ['2', '43', '66', '989'],
    is_premium: false,
    template: {
      python: `def addBinary(a, b):
    """
    :type a: str
    :type b: str
    :rtype: str
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // Your code here
};`,
      java: `class Solution {
    public String addBinary(String a, String b) {
        // Your code here
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string addBinary(string a, string b) {
        // Your code here
        return "";
    }
};`
    }
  },
  {
    id: '14',
    title: 'Sqrt(x)',
    slug: 'sqrtx',
    description: `Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.`,
    difficulty: 'Easy',
    tags: ['Math', 'Binary Search'],
    companies: ['Amazon', 'Microsoft', 'Apple'],
    likes: 4567,
    dislikes: 3456,
    acceptance_rate: 36.4,
    total_submissions: 1600000,
    total_accepted: 582400,
    constraints: `• 0 <= x <= 2^31 - 1`,
    examples: [
      {
        input: 'x = 4',
        output: '2',
        explanation: 'The square root of 4 is 2, so we return 2.'
      },
      {
        input: 'x = 8',
        output: '2',
        explanation: 'The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.'
      }
    ],
    hints: [
      'Use binary search to find the square root.',
      'Be careful with integer overflow when computing mid * mid.'
    ],
    similar_problems: ['50', '367', '633'],
    is_premium: false,
    template: {
      python: `def mySqrt(x):
    """
    :type x: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // Your code here
};`,
      java: `class Solution {
    public int mySqrt(int x) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int mySqrt(int x) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '15',
    title: 'Climbing Stairs',
    slug: 'climbing-stairs',
    description: `You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    difficulty: 'Easy',
    tags: ['Math', 'Dynamic Programming', 'Memoization'],
    companies: ['Amazon', 'Google', 'Adobe'],
    likes: 12345,
    dislikes: 345,
    acceptance_rate: 51.2,
    total_submissions: 2200000,
    total_accepted: 1126400,
    constraints: `• 1 <= n <= 45`,
    examples: [
      {
        input: 'n = 2',
        output: '2',
        explanation: 'There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps'
      },
      {
        input: 'n = 3',
        output: '3',
        explanation: 'There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step'
      }
    ],
    hints: [
      'To reach nth step, you can come from (n-1)th or (n-2)th step.',
      'This is essentially a Fibonacci sequence.',
      'You can solve this using dynamic programming or recursion with memoization.'
    ],
    similar_problems: ['509', '746', '1137'],
    is_premium: false,
    template: {
      python: `def climbStairs(n):
    """
    :type n: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Your code here
};`,
      java: `class Solution {
    public int climbStairs(int n) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '16',
    title: 'Remove Duplicates from Sorted List',
    slug: 'remove-duplicates-from-sorted-list',
    description: `Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.`,
    difficulty: 'Easy',
    tags: ['Linked List'],
    companies: ['Amazon', 'Microsoft'],
    likes: 5432,
    dislikes: 234,
    acceptance_rate: 48.7,
    total_submissions: 1100000,
    total_accepted: 535700,
    constraints: `• The number of nodes in the list is in the range [0, 300].
• -100 <= Node.val <= 100
• The list is guaranteed to be sorted in ascending order.`,
    examples: [
      {
        input: 'head = [1,1,2]',
        output: '[1,2]'
      },
      {
        input: 'head = [1,1,2,3,3]',
        output: '[1,2,3]'
      }
    ],
    hints: [
      'Since the list is sorted, duplicates will be adjacent.',
      'Use a single pointer to traverse and remove duplicates.'
    ],
    similar_problems: ['82'],
    is_premium: false,
    template: {
      python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def deleteDuplicates(head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // Your code here
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '17',
    title: 'Merge Sorted Array',
    slug: 'merge-sorted-array',
    description: `You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.`,
    difficulty: 'Easy',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    companies: ['Microsoft', 'Amazon', 'Facebook'],
    likes: 8765,
    dislikes: 987,
    acceptance_rate: 46.3,
    total_submissions: 1900000,
    total_accepted: 879700,
    constraints: `• nums1.length == m + n
• nums2.length == n
• 0 <= m, n <= 200
• 1 <= m + n <= 200
• -10^9 <= nums1[i], nums2[j] <= 10^9`,
    examples: [
      {
        input: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
        output: '[1,2,2,3,5,6]',
        explanation: 'The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6].'
      },
      {
        input: 'nums1 = [1], m = 1, nums2 = [], n = 0',
        output: '[1]',
        explanation: 'The arrays we are merging are [1] and []. The result of the merge is [1].'
      }
    ],
    hints: [
      'You can start merging from the end of both arrays.',
      'Use three pointers: one for each array and one for the current position in nums1.'
    ],
    similar_problems: ['21', '977'],
    is_premium: false,
    template: {
      python: `def merge(nums1, m, nums2, n):
    """
    :type nums1: List[int]
    :type m: int
    :type nums2: List[int]
    :type n: int
    :rtype: None Do not return anything, modify nums1 in-place instead.
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Your code here
};`,
      java: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Your code here
    }
}`,
      cpp: `class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        // Your code here
    }
};`
    }
  },
  {
    id: '18',
    title: 'Binary Tree Inorder Traversal',
    slug: 'binary-tree-inorder-traversal',
    description: `Given the root of a binary tree, return the inorder traversal of its nodes' values.`,
    difficulty: 'Easy',
    tags: ['Stack', 'Tree', 'Depth-First Search', 'Binary Tree'],
    companies: ['Microsoft', 'Amazon', 'Google'],
    likes: 9876,
    dislikes: 456,
    acceptance_rate: 74.2,
    total_submissions: 1400000,
    total_accepted: 1038800,
    constraints: `• The number of nodes in the tree is in the range [0, 100].
• -100 <= Node.val <= 100`,
    examples: [
      {
        input: 'root = [1,null,2,3]',
        output: '[1,3,2]'
      },
      {
        input: 'root = []',
        output: '[]'
      },
      {
        input: 'root = [1]',
        output: '[1]'
      }
    ],
    hints: [
      'Use recursion for a simple solution.',
      'For an iterative solution, use a stack.',
      'Inorder traversal visits left subtree, root, then right subtree.'
    ],
    similar_problems: ['144', '145', '589', '590'],
    is_premium: false,
    template: {
      python: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def inorderTraversal(root):
    """
    :type root: TreeNode
    :rtype: List[int]
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Your code here
};`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '19',
    title: 'Same Tree',
    slug: 'same-tree',
    description: `Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.`,
    difficulty: 'Easy',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    companies: ['Amazon', 'Microsoft'],
    likes: 6789,
    dislikes: 123,
    acceptance_rate: 57.8,
    total_submissions: 1300000,
    total_accepted: 751400,
    constraints: `• The number of nodes in both trees is in the range [0, 100].
• -10^4 <= Node.val <= 10^4`,
    examples: [
      {
        input: 'p = [1,2,3], q = [1,2,3]',
        output: 'true'
      },
      {
        input: 'p = [1,2], q = [1,null,2]',
        output: 'false'
      },
      {
        input: 'p = [1,2,1], q = [1,1,2]',
        output: 'false'
      }
    ],
    hints: [
      'Use recursion to compare the trees.',
      'Check if both nodes are null, or if one is null and the other is not.',
      'If both nodes exist, compare their values and recursively check their children.'
    ],
    similar_problems: ['101', '572', '951'],
    is_premium: false,
    template: {
      python: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def isSameTree(p, q):
    """
    :type p: TreeNode
    :type q: TreeNode
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // Your code here
};`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        // Your code here
        return false;
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '20',
    title: 'Symmetric Tree',
    slug: 'symmetric-tree',
    description: `Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).`,
    difficulty: 'Easy',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    companies: ['Microsoft', 'Amazon', 'Google'],
    likes: 11234,
    dislikes: 234,
    acceptance_rate: 52.1,
    total_submissions: 1700000,
    total_accepted: 885700,
    constraints: `• The number of nodes in the tree is in the range [1, 1000].
• -100 <= Node.val <= 100`,
    examples: [
      {
        input: 'root = [1,2,2,3,4,4,3]',
        output: 'true'
      },
      {
        input: 'root = [1,2,2,null,3,null,3]',
        output: 'false'
      }
    ],
    hints: [
      'A tree is symmetric if the left subtree is a mirror reflection of the right subtree.',
      'Use recursion to check if two trees are mirror images of each other.',
      'You can also solve this iteratively using a queue.'
    ],
    similar_problems: ['100', '572'],
    is_premium: false,
    template: {
      python: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def isSymmetric(root):
    """
    :type root: TreeNode
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // Your code here
};`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        // Your code here
        return false;
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '21',
    title: 'Maximum Depth of Binary Tree',
    slug: 'maximum-depth-of-binary-tree',
    description: `Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
    difficulty: 'Easy',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'],
    likes: 8765,
    dislikes: 123,
    acceptance_rate: 73.4,
    total_submissions: 1600000,
    total_accepted: 1174400,
    constraints: `• The number of nodes in the tree is in the range [0, 10^4].
• -100 <= Node.val <= 100`,
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '3'
      },
      {
        input: 'root = [1,null,2]',
        output: '2'
      }
    ],
    hints: [
      'Use recursion: the depth of a tree is 1 + max(depth of left subtree, depth of right subtree).',
      'You can also use BFS to find the depth level by level.'
    ],
    similar_problems: ['110', '111', '559'],
    is_premium: false,
    template: {
      python: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def maxDepth(root):
    """
    :type root: TreeNode
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // Your code here
};`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        // Your code here
        return 0;
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxDepth(TreeNode* root) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '22',
    title: 'Convert Sorted Array to Binary Search Tree',
    slug: 'convert-sorted-array-to-binary-search-tree',
    description: `Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.`,
    difficulty: 'Easy',
    tags: ['Array', 'Divide and Conquer', 'Tree', 'Binary Search Tree', 'Binary Tree'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    likes: 7654,
    dislikes: 432,
    acceptance_rate: 65.8,
    total_submissions: 1200000,
    total_accepted: 789600,
    constraints: `• 1 <= nums.length <= 10^4
• -10^4 <= nums[i] <= 10^4
• nums is sorted in a strictly increasing order.`,
    examples: [
      {
        input: 'nums = [-10,-3,0,5,9]',
        output: '[0,-3,9,-10,null,5]',
        explanation: '[0,-10,5,null,-3,null,9] is also accepted.'
      },
      {
        input: 'nums = [1,3]',
        output: '[3,1]',
        explanation: '[1,null,3] and [3,1] are both height-balanced BSTs.'
      }
    ],
    hints: [
      'Choose the middle element as the root to ensure balance.',
      'Recursively build left and right subtrees from the left and right halves of the array.'
    ],
    similar_problems: ['109'],
    is_premium: false,
    template: {
      python: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def sortedArrayToBST(nums):
    """
    :type nums: List[int]
    :rtype: TreeNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Your code here
};`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '23',
    title: 'Balanced Binary Tree',
    slug: 'balanced-binary-tree',
    description: `Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.`,
    difficulty: 'Easy',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'],
    companies: ['Amazon', 'Microsoft'],
    likes: 6543,
    dislikes: 345,
    acceptance_rate: 46.7,
    total_submissions: 1100000,
    total_accepted: 513700,
    constraints: `• The number of nodes in the tree is in the range [0, 5000].
• -10^4 <= Node.val <= 10^4`,
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: 'true'
      },
      {
        input: 'root = [1,2,2,3,3,null,null,4,4]',
        output: 'false'
      },
      {
        input: 'root = []',
        output: 'true'
      }
    ],
    hints: [
      'For each node, check if the height difference between left and right subtrees is at most 1.',
      'You can compute the height of a subtree recursively.',
      'Optimize by returning both the height and balance status in a single traversal.'
    ],
    similar_problems: ['104'],
    is_premium: false,
    template: {
      python: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def isBalanced(root):
    """
    :type root: TreeNode
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // Your code here
};`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        // Your code here
        return false;
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '24',
    title: 'Minimum Depth of Binary Tree',
    slug: 'minimum-depth-of-binary-tree',
    description: `Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.`,
    difficulty: 'Easy',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    companies: ['Amazon', 'Microsoft'],
    likes: 4321,
    dislikes: 987,
    acceptance_rate: 44.2,
    total_submissions: 1000000,
    total_accepted: 442000,
    constraints: `• The number of nodes in the tree is in the range [0, 10^5].
• -1000 <= Node.val <= 1000`,
    examples: [
      {
        input: 'root = [3,9,20,null,null,15,7]',
        output: '2'
      },
      {
        input: 'root = [2,null,3,null,4,null,5,null,6]',
        output: '5'
      }
    ],
    hints: [
      'Use BFS to find the first leaf node, which gives the minimum depth.',
      'For DFS, be careful with nodes that have only one child.',
      'The minimum depth is 1 + min(left depth, right depth), but handle the case where one subtree is empty.'
    ],
    similar_problems: ['102', '104'],
    is_premium: false,
    template: {
      python: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def minDepth(root):
    """
    :type root: TreeNode
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    // Your code here
};`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int minDepth(TreeNode root) {
        // Your code here
        return 0;
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int minDepth(TreeNode* root) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '25',
    title: 'Path Sum',
    slug: 'path-sum',
    description: `Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.`,
    difficulty: 'Easy',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    likes: 6789,
    dislikes: 876,
    acceptance_rate: 47.3,
    total_submissions: 1300000,
    total_accepted: 614900,
    constraints: `• The number of nodes in the tree is in the range [0, 5000].
• -1000 <= Node.val <= 1000
• -1000 <= targetSum <= 1000`,
    examples: [
      {
        input: 'root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22',
        output: 'true',
        explanation: 'The root-to-leaf path with the target sum is shown.'
      },
      {
        input: 'root = [1,2,3], targetSum = 5',
        output: 'false',
        explanation: 'There two root-to-leaf paths in the tree: (1 --> 2): The sum is 3. (1 --> 3): The sum is 4. There is no root-to-leaf path with sum = 5.'
      },
      {
        input: 'root = [], targetSum = 0',
        output: 'false',
        explanation: 'Since the tree is empty, there are no root-to-leaf paths.'
      }
    ],
    hints: [
      'Use DFS to traverse all root-to-leaf paths.',
      'Keep track of the current sum as you traverse.',
      'Check if the sum equals targetSum when you reach a leaf node.'
    ],
    similar_problems: ['113', '437', '666'],
    is_premium: false,
    template: {
      python: `# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
def hasPathSum(root, targetSum):
    """
    :type root: TreeNode
    :type targetSum: int
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Your code here
};`,
      java: `/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        // Your code here
        return false;
    }
}`,
      cpp: `/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        // Your code here
        return false;
    }
};`
    }
  },

  // MEDIUM PROBLEMS (25 problems)
  {
    id: '26',
    title: 'Add Two Numbers',
    slug: 'add-two-numbers',
    description: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.`,
    difficulty: 'Medium',
    tags: ['Linked List', 'Math', 'Recursion'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Facebook', 'Apple'],
    likes: 18234,
    dislikes: 3456,
    acceptance_rate: 35.8,
    total_submissions: 3200000,
    total_accepted: 1145600,
    constraints: `• The number of nodes in each linked list is in the range [1, 100].
• 0 <= Node.val <= 9
• It is guaranteed that the list represents a number that does not have leading zeros.`,
    examples: [
      {
        input: 'l1 = [2,4,3], l2 = [5,6,4]',
        output: '[7,0,8]',
        explanation: '342 + 465 = 807.'
      },
      {
        input: 'l1 = [0], l2 = [0]',
        output: '[0]'
      },
      {
        input: 'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]',
        output: '[8,9,9,9,0,0,0,1]'
      }
    ],
    hints: [
      'Keep track of the carry using a variable and simulate digits-by-digits sum starting from the head of list, which contains the least-significant digit.',
      'For cases where one list is longer than the other, or there is a carry at the end, make sure to handle these edge cases.'
    ],
    similar_problems: ['43', '67', '371', '415', '989'],
    is_premium: false,
    template: {
      python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def addTwoNumbers(l1, l2):
    """
    :type l1: ListNode
    :type l2: ListNode
    :rtype: ListNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Your code here
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '27',
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    description: `Given a string s, find the length of the longest substring without repeating characters.`,
    difficulty: 'Medium',
    tags: ['Hash Table', 'String', 'Sliding Window'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook', 'Apple'],
    likes: 22000,
    dislikes: 987,
    acceptance_rate: 33.0,
    total_submissions: 4100000,
    total_accepted: 1353000,
    constraints: `• 0 <= s.length <= 5 * 10^4
• s consists of English letters, digits, symbols and spaces.`,
    examples: [
      {
        input: 's = "abcabcbb"',
        output: '3',
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: '1',
        explanation: 'The answer is "b", with the length of 1.'
      },
      {
        input: 's = "pwwkew"',
        output: '3',
        explanation: 'The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.'
      }
    ],
    hints: [
      'Use the sliding window technique with two pointers.',
      'Use a hash set to keep track of characters in the current window.',
      'When you encounter a duplicate character, move the left pointer to eliminate the duplicate.'
    ],
    similar_problems: ['159', '340', '992'],
    is_premium: false,
    template: {
      python: `def lengthOfLongestSubstring(s):
    """
    :type s: str
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Your code here
};`,
      java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '28',
    title: 'Longest Palindromic Substring',
    slug: 'longest-palindromic-substring',
    description: `Given a string s, return the longest palindromic substring in s.`,
    difficulty: 'Medium',
    tags: ['String', 'Dynamic Programming'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Facebook'],
    likes: 19876,
    dislikes: 1234,
    acceptance_rate: 32.1,
    total_submissions: 2800000,
    total_accepted: 898800,
    constraints: `• 1 <= s.length <= 1000
• s consist of only digits and English letters.`,
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: '"aba" is also a valid answer.'
      },
      {
        input: 's = "cbbd"',
        output: '"bb"'
      }
    ],
    hints: [
      'How can we reuse a previously computed palindrome to compute a larger palindrome?',
      'If "aba" is a palindrome, is "xabax" a palindrome? Similarly is "xabay" a palindrome?',
      'Complexity based hint: If we use brute force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation.'
    ],
    similar_problems: ['125', '131', '214', '336', '516'],
    is_premium: false,
    template: {
      python: `def longestPalindrome(s):
    """
    :type s: str
    :rtype: str
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // Your code here
};`,
      java: `class Solution {
    public String longestPalindrome(String s) {
        // Your code here
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string longestPalindrome(string s) {
        // Your code here
        return "";
    }
};`
    }
  },
  {
    id: '29',
    title: 'ZigZag Conversion',
    slug: 'zigzag-conversion',
    description: `The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   R
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);`,
    difficulty: 'Medium',
    tags: ['String'],
    companies: ['Amazon', 'Microsoft'],
    likes: 4567,
    dislikes: 8901,
    acceptance_rate: 40.2,
    total_submissions: 1200000,
    total_accepted: 482400,
    constraints: `• 1 <= s.length <= 1000
• s consists of English letters (lower-case and upper-case), ',' and '.'.
• 1 <= numRows <= 1000`,
    examples: [
      {
        input: 's = "PAYPALISHIRING", numRows = 3',
        output: '"PAHNAPLSIIGYIR"'
      },
      {
        input: 's = "PAYPALISHIRING", numRows = 4',
        output: '"PINALSIGYAHRPI"',
        explanation: 'P     I    N\nA   L S  I G\nY A   H R\nP     I'
      },
      {
        input: 's = "A", numRows = 1',
        output: '"A"'
      }
    ],
    hints: [
      'Visit the characters in the same order as reading the Zig-Zag pattern line by line.',
      'For each row, characters are at positions: row + k * (2 * numRows - 2) where k >= 0.',
      'For middle rows, there are additional characters at positions: row + k * (2 * numRows - 2) - 2 * row.'
    ],
    similar_problems: [],
    is_premium: false,
    template: {
      python: `def convert(s, numRows):
    """
    :type s: str
    :type numRows: int
    :rtype: str
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // Your code here
};`,
      java: `class Solution {
    public String convert(String s, int numRows) {
        // Your code here
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string convert(string s, int numRows) {
        // Your code here
        return "";
    }
};`
    }
  },
  {
    id: '30',
    title: 'Reverse Integer',
    slug: 'reverse-integer',
    description: `Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`,
    difficulty: 'Medium',
    tags: ['Math'],
    companies: ['Amazon', 'Apple', 'Microsoft'],
    likes: 8765,
    dislikes: 10234,
    acceptance_rate: 27.4,
    total_submissions: 2500000,
    total_accepted: 685000,
    constraints: `• -2^31 <= x <= 2^31 - 1`,
    examples: [
      {
        input: 'x = 123',
        output: '321'
      },
      {
        input: 'x = -123',
        output: '-321'
      },
      {
        input: 'x = 120',
        output: '21'
      }
    ],
    hints: [
      'Be careful about integer overflow.',
      'Check for overflow before multiplying by 10 and adding the next digit.',
      'Use the fact that if rev > INT_MAX/10, then rev*10 will overflow.'
    ],
    similar_problems: ['190', '1009'],
    is_premium: false,
    template: {
      python: `def reverse(x):
    """
    :type x: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // Your code here
};`,
      java: `class Solution {
    public int reverse(int x) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int reverse(int x) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '31',
    title: 'String to Integer (atoi)',
    slug: 'string-to-integer-atoi',
    description: `Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

1. Read in and ignore any leading whitespace.
2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
6. Return the integer as the final result.

Note:
- Only the space character ' ' is considered a whitespace character.
- Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.`,
    difficulty: 'Medium',
    tags: ['String'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    likes: 3456,
    dislikes: 9876,
    acceptance_rate: 16.4,
    total_submissions: 1800000,
    total_accepted: 295200,
    constraints: `• 0 <= s.length <= 200
• s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.`,
    examples: [
      {
        input: 's = "42"',
        output: '42',
        explanation: 'The underlined characters are what is read in, the caret is the current reader position. Step 1: "42" (no characters read because there is no leading whitespace) Step 2: "42" (no characters read because there is neither a \'-\' nor \'+\') Step 3: "42" ("42" is read in) The parsed integer is 42. Since 42 is in the range [-2^31, 2^31 - 1], the final result is 42.'
      },
      {
        input: 's = "   -42"',
        output: '-42',
        explanation: 'Step 1: "   -42" (leading whitespace is read and ignored) Step 2: "   -42" (\'-\' is read, so the result should be negative) Step 3: "   -42" ("42" is read in) The parsed integer is -42. Since -42 is in the range [-2^31, 2^31 - 1], the final result is -42.'
      },
      {
        input: 's = "4193 with words"',
        output: '4193',
        explanation: 'Step 1: "4193 with words" (no characters read because there is no leading whitespace) Step 2: "4193 with words" (no characters read because there is neither a \'-\' nor \'+\') Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit) The parsed integer is 4193. Since 4193 is in the range [-2^31, 2^31 - 1], the final result is 4193.'
      }
    ],
    hints: [
      'Carefully handle edge cases like overflow, leading zeros, and invalid characters.',
      'Use a state machine approach to handle different parsing states.',
      'Check for overflow before multiplying by 10 and adding the next digit.'
    ],
    similar_problems: ['7', '65'],
    is_premium: false,
    template: {
      python: `def myAtoi(s):
    """
    :type s: str
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // Your code here
};`,
      java: `class Solution {
    public int myAtoi(String s) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int myAtoi(string s) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '32',
    title: 'Container With Most Water',
    slug: 'container-with-most-water',
    description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.`,
    difficulty: 'Medium',
    tags: ['Array', 'Two Pointers', 'Greedy'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 18765,
    dislikes: 1234,
    acceptance_rate: 54.2,
    total_submissions: 2100000,
    total_accepted: 1138200,
    constraints: `• n == height.length
• 2 <= n <= 10^5
• 0 <= height[i] <= 10^4`,
    examples: [
      {
        input: 'height = [1,8,6,2,5,4,8,3,7]',
        output: '49',
        explanation: 'The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.'
      },
      {
        input: 'height = [1,1]',
        output: '1'
      }
    ],
    hints: [
      'If you simulate the problem, it will be O(n^2) which is not efficient.',
      'Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.',
      'How does moving the pointer that points to the lower line work? Will it ever skip the optimal solution?'
    ],
    similar_problems: ['42', '84'],
    is_premium: false,
    template: {
      python: `def maxArea(height):
    """
    :type height: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // Your code here
};`,
      java: `class Solution {
    public int maxArea(int[] height) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int maxArea(vector<int>& height) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '33',
    title: 'Integer to Roman',
    slug: 'integer-to-roman',
    description: `Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given an integer, convert it to a roman numeral.`,
    difficulty: 'Medium',
    tags: ['Hash Table', 'Math', 'String'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    likes: 4567,
    dislikes: 4321,
    acceptance_rate: 59.3,
    total_submissions: 900000,
    total_accepted: 533700,
    constraints: `• 1 <= num <= 3999`,
    examples: [
      {
        input: 'num = 3',
        output: '"III"',
        explanation: '3 is represented as 3 ones.'
      },
      {
        input: 'num = 58',
        output: '"LVIII"',
        explanation: 'L = 50, V = 5, III = 3.'
      },
      {
        input: 'num = 1994',
        output: '"MCMXCIV"',
        explanation: 'M = 1000, CM = 900, XC = 90 and IV = 4.'
      }
    ],
    hints: [
      'Use a mapping of values to roman numerals, including the special cases (4, 9, 40, 90, 400, 900).',
      'Process the number from largest to smallest values.',
      'For each value, add the corresponding roman numeral as many times as possible.'
    ],
    similar_problems: ['13', '273'],
    is_premium: false,
    template: {
      python: `def intToRoman(num):
    """
    :type num: int
    :rtype: str
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // Your code here
};`,
      java: `class Solution {
    public String intToRoman(int num) {
        // Your code here
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string intToRoman(int num) {
        // Your code here
        return "";
    }
};`
    }
  },
  {
    id: '34',
    title: '3Sum',
    slug: '3sum',
    description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.`,
    difficulty: 'Medium',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook', 'Apple'],
    likes: 21234,
    dislikes: 1987,
    acceptance_rate: 32.4,
    total_submissions: 3500000,
    total_accepted: 1134000,
    constraints: `• 3 <= nums.length <= 3000
• -10^5 <= nums[i] <= 10^5`,
    examples: [
      {
        input: 'nums = [-1,0,1,2,-1,-4]',
        output: '[[-1,-1,2],[-1,0,1]]',
        explanation: 'nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. The distinct triplets are [-1,0,1] and [-1,-1,2]. Notice that the order of the output and the order of the triplets does not matter.'
      },
      {
        input: 'nums = [0,1,1]',
        output: '[]',
        explanation: 'The only possible triplet does not sum up to 0.'
      },
      {
        input: 'nums = [0,0,0]',
        output: '[[0,0,0]]',
        explanation: 'The only possible triplet sums up to 0.'
      }
    ],
    hints: [
      'Sort the array first.',
      'For each element, use two pointers to find pairs that sum to the negative of that element.',
      'Skip duplicate elements to avoid duplicate triplets.'
    ],
    similar_problems: ['1', '16', '18', '259'],
    is_premium: false,
    template: {
      python: `def threeSum(nums):
    """
    :type nums: List[int]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Your code here
};`,
      java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '35',
    title: '3Sum Closest',
    slug: '3sum-closest',
    description: `Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.`,
    difficulty: 'Medium',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    likes: 7654,
    dislikes: 432,
    acceptance_rate: 46.8,
    total_submissions: 1200000,
    total_accepted: 561600,
    constraints: `• 3 <= nums.length <= 500
• -1000 <= nums[i] <= 1000
• -10^4 <= target <= 10^4`,
    examples: [
      {
        input: 'nums = [-1,2,1,-4], target = 1',
        output: '2',
        explanation: 'The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).'
      },
      {
        input: 'nums = [0,0,0], target = 1',
        output: '0',
        explanation: 'The sum that is closest to the target is 0. (0 + 0 + 0 = 0).'
      }
    ],
    hints: [
      'Sort the array first.',
      'Use two pointers technique similar to 3Sum.',
      'Keep track of the closest sum found so far.'
    ],
    similar_problems: ['15', '259'],
    is_premium: false,
    template: {
      python: `def threeSumClosest(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // Your code here
};`,
      java: `class Solution {
    public int threeSumClosest(int[] nums, int target) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '36',
    title: 'Letter Combinations of a Phone Number',
    slug: 'letter-combinations-of-a-phone-number',
    description: `Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

2: abc
3: def
4: ghi
5: jkl
6: mno
7: pqrs
8: tuv
9: wxyz`,
    difficulty: 'Medium',
    tags: ['Hash Table', 'String', 'Backtracking'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 12345,
    dislikes: 876,
    acceptance_rate: 55.7,
    total_submissions: 1500000,
    total_accepted: 835500,
    constraints: `• 0 <= digits.length <= 4
• digits[i] is a digit in the range ['2', '9'].`,
    examples: [
      {
        input: 'digits = "23"',
        output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]'
      },
      {
        input: 'digits = ""',
        output: '[]'
      },
      {
        input: 'digits = "2"',
        output: '["a","b","c"]'
      }
    ],
    hints: [
      'Use backtracking to generate all combinations.',
      'Create a mapping from digits to letters.',
      'For each digit, try all possible letters and recurse.'
    ],
    similar_problems: ['22', '39', '40', '216'],
    is_premium: false,
    template: {
      python: `def letterCombinations(digits):
    """
    :type digits: str
    :rtype: List[str]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // Your code here
};`,
      java: `class Solution {
    public List<String> letterCombinations(String digits) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<string> letterCombinations(string digits) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '37',
    title: '4Sum',
    slug: '4sum',
    description: `Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.`,
    difficulty: 'Medium',
    tags: ['Array', 'Two Pointers', 'Sorting'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 6789,
    dislikes: 876,
    acceptance_rate: 36.2,
    total_submissions: 1100000,
    total_accepted: 398200,
    constraints: `• 1 <= nums.length <= 200
• -10^9 <= nums[i] <= 10^9
• -10^9 <= target <= 10^9`,
    examples: [
      {
        input: 'nums = [1,0,-1,0,-2,2], target = 0',
        output: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]'
      },
      {
        input: 'nums = [2,2,2,2,2], target = 8',
        output: '[[2,2,2,2]]'
      }
    ],
    hints: [
      'Sort the array first.',
      'Use two nested loops for the first two numbers, then use two pointers for the remaining two.',
      'Skip duplicates to avoid duplicate quadruplets.'
    ],
    similar_problems: ['1', '15', '16', '454'],
    is_premium: false,
    template: {
      python: `def fourSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // Your code here
};`,
      java: `class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '38',
    title: 'Remove Nth Node From End of List',
    slug: 'remove-nth-node-from-end-of-list',
    description: `Given the head of a linked list, remove the nth node from the end of the list and return its head.`,
    difficulty: 'Medium',
    tags: ['Linked List', 'Two Pointers'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Facebook'],
    likes: 13456,
    dislikes: 567,
    acceptance_rate: 38.9,
    total_submissions: 2200000,
    total_accepted: 855800,
    constraints: `• The number of nodes in the list is sz.
• 1 <= sz <= 30
• 0 <= Node.val <= 100
• 1 <= n <= sz`,
    examples: [
      {
        input: 'head = [1,2,3,4,5], n = 2',
        output: '[1,2,3,5]'
      },
      {
        input: 'head = [1], n = 1',
        output: '[]'
      },
      {
        input: 'head = [1,2], n = 1',
        output: '[1]'
      }
    ],
    hints: [
      'Use two pointers with a gap of n nodes between them.',
      'When the fast pointer reaches the end, the slow pointer will be at the node to remove.',
      'Handle the edge case where you need to remove the first node.'
    ],
    similar_problems: ['61', '143', '876'],
    is_premium: false,
    template: {
      python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def removeNthFromEnd(head, n):
    """
    :type head: ListNode
    :type n: int
    :rtype: ListNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Your code here
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '39',
    title: 'Generate Parentheses',
    slug: 'generate-parentheses',
    description: `Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.`,
    difficulty: 'Medium',
    tags: ['String', 'Dynamic Programming', 'Backtracking'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 15678,
    dislikes: 567,
    acceptance_rate: 70.1,
    total_submissions: 1400000,
    total_accepted: 981400,
    constraints: `• 1 <= n <= 8`,
    examples: [
      {
        input: 'n = 3',
        output: '["((()))","(()())","(())()","()(())","()()()"]'
      },
      {
        input: 'n = 1',
        output: '["()"]'
      }
    ],
    hints: [
      'Use backtracking to generate all valid combinations.',
      'Keep track of the number of open and close parentheses used.',
      'Only add a close parenthesis if there are more open parentheses than close parentheses.'
    ],
    similar_problems: ['17', '20', '241'],
    is_premium: false,
    template: {
      python: `def generateParenthesis(n):
    """
    :type n: int
    :rtype: List[str]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // Your code here
};`,
      java: `class Solution {
    public List<String> generateParenthesis(int n) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<string> generateParenthesis(int n) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '40',
    title: 'Merge k Sorted Lists',
    slug: 'merge-k-sorted-lists',
    description: `You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.`,
    difficulty: 'Hard',
    tags: ['Linked List', 'Divide and Conquer', 'Heap (Priority Queue)', 'Merge Sort'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook', 'Apple'],
    likes: 14567,
    dislikes: 567,
    acceptance_rate: 47.3,
    total_submissions: 1800000,
    total_accepted: 851400,
    constraints: `• k == lists.length
• 0 <= k <= 10^4
• 0 <= lists[i].length <= 500
• -10^4 <= lists[i][j] <= 10^4
• lists[i] is sorted in ascending order.
• The sum of lists[i].length will not exceed 10^4.`,
    examples: [
      {
        input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
        output: '[1,1,2,3,4,4,5,6]',
        explanation: 'The linked-lists are: [ 1->4->5, 1->3->4, 2->6 ] merging them into one sorted list: 1->1->2->3->4->4->5->6'
      },
      {
        input: 'lists = []',
        output: '[]'
      },
      {
        input: 'lists = [[]]',
        output: '[]'
      }
    ],
    hints: [
      'Use a min-heap to efficiently get the smallest element among all lists.',
      'Alternatively, use divide and conquer: merge lists pairwise.',
      'You can also merge lists one by one, but this is less efficient.'
    ],
    similar_problems: ['21', '88', '148', '264'],
    is_premium: false,
    template: {
      python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def mergeKLists(lists):
    """
    :type lists: List[ListNode]
    :rtype: ListNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Your code here
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '41',
    title: 'Swap Nodes in Pairs',
    slug: 'swap-nodes-in-pairs',
    description: `Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)`,
    difficulty: 'Medium',
    tags: ['Linked List', 'Recursion'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    likes: 8765,
    dislikes: 432,
    acceptance_rate: 58.4,
    total_submissions: 1200000,
    total_accepted: 700800,
    constraints: `• The number of nodes in the list is in the range [0, 100].
• 0 <= Node.val <= 100`,
    examples: [
      {
        input: 'head = [1,2,3,4]',
        output: '[2,1,4,3]'
      },
      {
        input: 'head = []',
        output: '[]'
      },
      {
        input: 'head = [1]',
        output: '[1]'
      }
    ],
    hints: [
      'Use a dummy node to simplify the swapping process.',
      'Keep track of the previous node to connect the swapped pairs.',
      'You can solve this iteratively or recursively.'
    ],
    similar_problems: ['25', '1721'],
    is_premium: false,
    template: {
      python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def swapPairs(head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // Your code here
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '42',
    title: 'Reverse Nodes in k-Group',
    slug: 'reverse-nodes-in-k-group',
    description: `Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.`,
    difficulty: 'Hard',
    tags: ['Linked List', 'Recursion'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Facebook'],
    likes: 9876,
    dislikes: 567,
    acceptance_rate: 52.1,
    total_submissions: 800000,
    total_accepted: 416800,
    constraints: `• The number of nodes in the list is n.
• 1 <= k <= n <= 5000
• 0 <= Node.val <= 1000`,
    examples: [
      {
        input: 'head = [1,2,3,4,5], k = 2',
        output: '[2,1,4,3,5]'
      },
      {
        input: 'head = [1,2,3,4,5], k = 3',
        output: '[3,2,1,4,5]'
      }
    ],
    hints: [
      'First, check if there are at least k nodes remaining.',
      'Reverse the first k nodes.',
      'Recursively process the rest of the list.',
      'Connect the reversed part with the result of the recursive call.'
    ],
    similar_problems: ['24', '92', '206'],
    is_premium: false,
    template: {
      python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def reverseKGroup(head, k):
    """
    :type head: ListNode
    :type k: int
    :rtype: ListNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // Your code here
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '43',
    title: 'Remove Duplicates from Sorted Array II',
    slug: 'remove-duplicates-from-sorted-array-ii',
    description: `Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.`,
    difficulty: 'Medium',
    tags: ['Array', 'Two Pointers'],
    companies: ['Microsoft', 'Amazon'],
    likes: 4321,
    dislikes: 1234,
    acceptance_rate: 50.8,
    total_submissions: 900000,
    total_accepted: 457200,
    constraints: `• 1 <= nums.length <= 3 * 10^4
• -10^4 <= nums[i] <= 10^4
• nums is sorted in non-decreasing order.`,
    examples: [
      {
        input: 'nums = [1,1,1,2,2,3]',
        output: '5, nums = [1,1,2,2,3,_]',
        explanation: 'Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.'
      },
      {
        input: 'nums = [0,0,1,1,1,1,2,3,3]',
        output: '7, nums = [0,0,1,1,2,3,3,_,_]',
        explanation: 'Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.'
      }
    ],
    hints: [
      'Use two pointers: one for reading and one for writing.',
      'Keep track of how many times the current element has appeared.',
      'Only write the element if it has appeared less than twice.'
    ],
    similar_problems: ['26'],
    is_premium: false,
    template: {
      python: `def removeDuplicates(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Your code here
};`,
      java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '44',
    title: 'Search in Rotated Sorted Array',
    slug: 'search-in-rotated-sorted-array',
    description: `There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.`,
    difficulty: 'Medium',
    tags: ['Array', 'Binary Search'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook', 'Apple'],
    likes: 18765,
    dislikes: 1234,
    acceptance_rate: 38.7,
    total_submissions: 2500000,
    total_accepted: 967500,
    constraints: `• 1 <= nums.length <= 5000
• -10^4 <= nums[i] <= 10^4
• All values of nums are unique.
• nums is an ascending array that is possibly rotated.
• -10^4 <= target <= 10^4`,
    examples: [
      {
        input: 'nums = [4,5,6,7,0,1,2], target = 0',
        output: '4'
      },
      {
        input: 'nums = [4,5,6,7,0,1,2], target = 3',
        output: '-1'
      },
      {
        input: 'nums = [1], target = 0',
        output: '-1'
      }
    ],
    hints: [
      'Use binary search with modifications.',
      'At each step, determine which half of the array is sorted.',
      'Check if the target is in the sorted half, otherwise search the other half.'
    ],
    similar_problems: ['81', '153', '154'],
    is_premium: false,
    template: {
      python: `def search(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // Your code here
};`,
      java: `class Solution {
    public int search(int[] nums, int target) {
        // Your code here
        return -1;
    }
}`,
      cpp: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Your code here
        return -1;
    }
};`
    }
  },
  {
    id: '45',
    title: 'Find First and Last Position of Element in Sorted Array',
    slug: 'find-first-and-last-position-of-element-in-sorted-array',
    description: `Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.`,
    difficulty: 'Medium',
    tags: ['Array', 'Binary Search'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 13456,
    dislikes: 345,
    acceptance_rate: 39.4,
    total_submissions: 1800000,
    total_accepted: 709200,
    constraints: `• 0 <= nums.length <= 10^5
• -10^9 <= nums[i] <= 10^9
• nums is a non-decreasing array.
• -10^9 <= target <= 10^9`,
    examples: [
      {
        input: 'nums = [5,7,7,8,8,10], target = 8',
        output: '[3,4]'
      },
      {
        input: 'nums = [5,7,7,8,8,10], target = 6',
        output: '[-1,-1]'
      },
      {
        input: 'nums = [], target = 0',
        output: '[-1,-1]'
      }
    ],
    hints: [
      'Use binary search to find the leftmost and rightmost positions of the target.',
      'You can modify binary search to find the first occurrence and last occurrence separately.',
      'Alternatively, find any occurrence first, then expand left and right.'
    ],
    similar_problems: ['35', '278', '374', '704'],
    is_premium: false,
    template: {
      python: `def searchRange(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // Your code here
};`,
      java: `class Solution {
    public int[] searchRange(int[] nums, int target) {
        // Your code here
        return new int[]{-1, -1};
    }
}`,
      cpp: `class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        // Your code here
        return {-1, -1};
    }
};`
    }
  },
  {
    id: '46',
    title: 'Valid Sudoku',
    slug: 'valid-sudoku',
    description: `Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:
- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.`,
    difficulty: 'Medium',
    tags: ['Array', 'Hash Table', 'Matrix'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'],
    likes: 6789,
    dislikes: 876,
    acceptance_rate: 56.3,
    total_submissions: 1200000,
    total_accepted: 675600,
    constraints: `• board.length == 9
• board[i].length == 9
• board[i][j] is a digit 1-9 or '.'.`,
    examples: [
      {
        input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: 'true'
      },
      {
        input: 'board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: 'false',
        explanation: 'Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8\'s in the top left 3x3 sub-box, it is invalid.'
      }
    ],
    hints: [
      'Use hash sets to track seen numbers in each row, column, and 3x3 box.',
      'For 3x3 boxes, you can use the formula (row/3)*3 + col/3 to identify which box a cell belongs to.',
      'Iterate through the board once and check all constraints simultaneously.'
    ],
    similar_problems: ['37'],
    is_premium: false,
    template: {
      python: `def isValidSudoku(board):
    """
    :type board: List[List[str]]
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Your code here
};`,
      java: `class Solution {
    public boolean isValidSudoku(char[][] board) {
        // Your code here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '47',
    title: 'Sudoku Solver',
    slug: 'sudoku-solver',
    description: `Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

1. Each of the digits 1-9 must occur exactly once in each row.
2. Each of the digits 1-9 must occur exactly once in each column.
3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.

The '.' character indicates empty cells.`,
    difficulty: 'Hard',
    tags: ['Array', 'Backtracking', 'Matrix'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 6543,
    dislikes: 234,
    acceptance_rate: 56.8,
    total_submissions: 600000,
    total_accepted: 340800,
    constraints: `• board.length == 9
• board[i].length == 9
• board[i][j] is a digit or '.'.
• It is guaranteed that the input board has only one solution.`,
    examples: [
      {
        input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
        output: '[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]'
      }
    ],
    hints: [
      'Use backtracking to try different numbers in empty cells.',
      'For each empty cell, try numbers 1-9 and check if they are valid.',
      'If a number is valid, place it and recursively solve the rest.',
      'If no number works, backtrack and try a different number in the previous cell.'
    ],
    similar_problems: ['36', '980'],
    is_premium: false,
    template: {
      python: `def solveSudoku(board):
    """
    :type board: List[List[str]]
    :rtype: None Do not return anything, modify board in-place instead.
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    // Your code here
};`,
      java: `class Solution {
    public void solveSudoku(char[][] board) {
        // Your code here
    }
}`,
      cpp: `class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        // Your code here
    }
};`
    }
  },
  {
    id: '48',
    title: 'Count and Say',
    slug: 'count-and-say',
    description: `The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

To determine how you "say" a digit string, you read it from left to right and describe what you see. For example, the digit string "3322251" would be said as "two 3's, three 2's, one 5, and one 1", which is then converted to the digit string "23321511".

Given a positive integer n, return the nth term of the count-and-say sequence.`,
    difficulty: 'Medium',
    tags: ['String'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    likes: 2345,
    dislikes: 6789,
    acceptance_rate: 48.9,
    total_submissions: 800000,
    total_accepted: 391200,
    constraints: `• 1 <= n <= 30`,
    examples: [
      {
        input: 'n = 1',
        output: '"1"'
      },
      {
        input: 'n = 4',
        output: '"1211"',
        explanation: 'countAndSay(1) = "1" countAndSay(2) = say "1" = one 1 = "11" countAndSay(3) = say "11" = two 1\'s = "21" countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"'
      }
    ],
    hints: [
      'Iterate from 1 to n, building each term from the previous one.',
      'For each term, count consecutive identical digits.',
      'Build the next term by saying the count followed by the digit.'
    ],
    similar_problems: ['271', '443'],
    is_premium: false,
    template: {
      python: `def countAndSay(n):
    """
    :type n: int
    :rtype: str
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // Your code here
};`,
      java: `class Solution {
    public String countAndSay(int n) {
        // Your code here
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string countAndSay(int n) {
        // Your code here
        return "";
    }
};`
    }
  },
  {
    id: '49',
    title: 'Combination Sum',
    slug: 'combination-sum',
    description: `Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.`,
    difficulty: 'Medium',
    tags: ['Array', 'Backtracking'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 14567,
    dislikes: 345,
    acceptance_rate: 66.8,
    total_submissions: 1400000,
    total_accepted: 935200,
    constraints: `• 1 <= candidates.length <= 30
• 2 <= candidates[i] <= 40
• All elements of candidates are distinct.
• 1 <= target <= 40`,
    examples: [
      {
        input: 'candidates = [2,3,6,7], target = 7',
        output: '[[2,2,3],[7]]',
        explanation: '2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times. 7 is a candidate, and 7 = 7. These are the only two combinations.'
      },
      {
        input: 'candidates = [2,3,5], target = 8',
        output: '[[2,2,2,2],[2,3,3],[3,5]]'
      },
      {
        input: 'candidates = [2], target = 1',
        output: '[]'
      }
    ],
    hints: [
      'Use backtracking to explore all possible combinations.',
      'To avoid duplicates, always choose candidates in a non-decreasing order.',
      'When you choose a candidate, you can choose it again in the next recursive call.'
    ],
    similar_problems: ['17', '40', '77', '216'],
    is_premium: false,
    template: {
      python: `def combinationSum(candidates, target):
    """
    :type candidates: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // Your code here
};`,
      java: `class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '50',
    title: 'Combination Sum II',
    slug: 'combination-sum-ii',
    description: `Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.`,
    difficulty: 'Medium',
    tags: ['Array', 'Backtracking'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 7654,
    dislikes: 234,
    acceptance_rate: 52.3,
    total_submissions: 1000000,
    total_accepted: 523000,
    constraints: `• 1 <= candidates.length <= 100
• 1 <= candidates[i] <= 50
• 1 <= target <= 30`,
    examples: [
      {
        input: 'candidates = [10,1,2,7,6,1,5], target = 8',
        output: '[[1,1,6],[1,2,5],[1,7],[2,6]]'
      },
      {
        input: 'candidates = [2,5,2,1,2], target = 5',
        output: '[[1,2,2],[5]]'
      }
    ],
    hints: [
      'Sort the array first to handle duplicates easily.',
      'Use backtracking, but skip duplicate elements at the same recursion level.',
      'Each number can only be used once, so move to the next index after choosing a number.'
    ],
    similar_problems: ['39', '77', '216'],
    is_premium: false,
    template: {
      python: `def combinationSum2(candidates, target):
    """
    :type candidates: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // Your code here
};`,
      java: `class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        // Your code here
        return {};
    }
};`
    }
  },

  // HARD PROBLEMS (25 problems)
  {
    id: '51',
    title: 'Median of Two Sorted Arrays',
    slug: 'median-of-two-sorted-arrays',
    description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).`,
    difficulty: 'Hard',
    tags: ['Array', 'Binary Search', 'Divide and Conquer'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Facebook', 'Apple'],
    likes: 18765,
    dislikes: 2134,
    acceptance_rate: 34.5,
    total_submissions: 1800000,
    total_accepted: 621000,
    constraints: `• nums1.length == m
• nums2.length == n
• 0 <= m <= 1000
• 0 <= n <= 1000
• 1 <= m + n <= 2000
• -10^6 <= nums1[i], nums2[i] <= 10^6`,
    examples: [
      {
        input: 'nums1 = [1,3], nums2 = [2]',
        output: '2.00000',
        explanation: 'merged array = [1,2,3] and median is 2.'
      },
      {
        input: 'nums1 = [1,2], nums2 = [3,4]',
        output: '2.50000',
        explanation: 'merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.'
      }
    ],
    hints: [
      'Use binary search to partition the arrays such that the left half contains the smaller elements.',
      'Ensure that the left partition has the same number of elements as the right partition (or one more).',
      'The median is the maximum of the left partition and/or the minimum of the right partition.'
    ],
    similar_problems: ['295', '719', '1201'],
    is_premium: true,
    template: {
      python: `def findMedianSortedArrays(nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: float
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Your code here
};`,
      java: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Your code here
        return 0.0;
    }
}`,
      cpp: `class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Your code here
        return 0.0;
    }
};`
    }
  },
  {
    id: '52',
    title: 'Regular Expression Matching',
    slug: 'regular-expression-matching',
    description: `Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).`,
    difficulty: 'Hard',
    tags: ['String', 'Dynamic Programming', 'Recursion'],
    companies: ['Google', 'Amazon', 'Microsoft', 'Facebook'],
    likes: 9876,
    dislikes: 1543,
    acceptance_rate: 27.8,
    total_submissions: 1200000,
    total_accepted: 333600,
    constraints: `• 1 <= s.length <= 20
• 1 <= p.length <= 30
• s contains only lowercase English letters.
• p contains only lowercase English letters, '.', and '*'.
• It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.`,
    examples: [
      {
        input: 's = "aa", p = "a"',
        output: 'false',
        explanation: '"a" does not match the entire string "aa".'
      },
      {
        input: 's = "aa", p = "a*"',
        output: 'true',
        explanation: '\'*\' means zero or more of the preceding element, \'a\'. Therefore, by repeating \'a\' once, it becomes "aa".'
      },
      {
        input: 's = "ab", p = ".*"',
        output: 'true',
        explanation: '".*" means "zero or more (*) of any character (.)".'
      }
    ],
    hints: [
      'Use dynamic programming or recursion with memoization.',
      'Handle the \'*\' case by considering both zero occurrences and one or more occurrences.',
      'The \'.\' character matches any single character.'
    ],
    similar_problems: ['44', '72', '97'],
    is_premium: false,
    template: {
      python: `def isMatch(s, p):
    """
    :type s: str
    :type p: str
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // Your code here
};`,
      java: `class Solution {
    public boolean isMatch(String s, String p) {
        // Your code here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isMatch(string s, string p) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '53',
    title: 'Wildcard Matching',
    slug: 'wildcard-matching',
    description: `Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).`,
    difficulty: 'Hard',
    tags: ['String', 'Dynamic Programming', 'Greedy', 'Recursion'],
    companies: ['Google', 'Amazon', 'Microsoft'],
    likes: 5432,
    dislikes: 234,
    acceptance_rate: 26.4,
    total_submissions: 800000,
    total_accepted: 211200,
    constraints: `• 0 <= s.length, p.length <= 2000
• s contains only lowercase English letters.
• p contains only lowercase English letters, '?' or '*'.`,
    examples: [
      {
        input: 's = "aa", p = "a"',
        output: 'false',
        explanation: '"a" does not match the entire string "aa".'
      },
      {
        input: 's = "aa", p = "*"',
        output: 'true',
        explanation: '\'*\' matches any sequence.'
      },
      {
        input: 's = "cb", p = "?a"',
        output: 'false',
        explanation: '\'?\' matches \'c\', but the second letter is \'a\', which does not match \'b\'.'
      }
    ],
    hints: [
      'Use dynamic programming to solve this problem.',
      'Handle \'*\' by considering it can match zero characters or one or more characters.',
      'The \'?\' character matches exactly one character.'
    ],
    similar_problems: ['10', '72'],
    is_premium: false,
    template: {
      python: `def isMatch(s, p):
    """
    :type s: str
    :type p: str
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // Your code here
};`,
      java: `class Solution {
    public boolean isMatch(String s, String p) {
        // Your code here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isMatch(string s, string p) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '54',
    title: 'Jump Game II',
    slug: 'jump-game-ii',
    description: `You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and i + j < n

Return the minimum number of jumps to reach nums[n - 1].

The test cases are generated such that you can reach nums[n - 1].`,
    difficulty: 'Hard',
    tags: ['Array', 'Dynamic Programming', 'Greedy'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 11234,
    dislikes: 456,
    acceptance_rate: 38.2,
    total_submissions: 1000000,
    total_accepted: 382000,
    constraints: `• 1 <= nums.length <= 10^4
• 0 <= nums[i] <= 1000
• It's guaranteed that you can reach nums[n - 1].`,
    examples: [
      {
        input: 'nums = [2,3,1,1,4]',
        output: '2',
        explanation: 'The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.'
      },
      {
        input: 'nums = [2,3,0,1,4]',
        output: '2'
      }
    ],
    hints: [
      'Use a greedy approach to always jump to the position that allows you to reach the farthest.',
      'Keep track of the current jump\'s reach and the farthest reach possible.',
      'When you reach the end of the current jump\'s reach, increment the jump count.'
    ],
    similar_problems: ['55', '1024', '1306'],
    is_premium: false,
    template: {
      python: `def jump(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // Your code here
};`,
      java: `class Solution {
    public int jump(int[] nums) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int jump(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '55',
    title: 'Permutations',
    slug: 'permutations',
    description: `Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.`,
    difficulty: 'Medium',
    tags: ['Array', 'Backtracking'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 13456,
    dislikes: 234,
    acceptance_rate: 73.2,
    total_submissions: 1500000,
    total_accepted: 1098000,
    constraints: `• 1 <= nums.length <= 6
• -10 <= nums[i] <= 10
• All the integers of nums are unique.`,
    examples: [
      {
        input: 'nums = [1,2,3]',
        output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]'
      },
      {
        input: 'nums = [0,1]',
        output: '[[0,1],[1,0]]'
      },
      {
        input: 'nums = [1]',
        output: '[[1]]'
      }
    ],
    hints: [
      'Use backtracking to generate all permutations.',
      'For each position, try all unused numbers.',
      'Keep track of which numbers have been used in the current permutation.'
    ],
    similar_problems: ['31', '47', '77', '784'],
    is_premium: false,
    template: {
      python: `def permute(nums):
    """
    :type nums: List[int]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // Your code here
};`,
      java: `class Solution {
    public List<List<Integer>> permute(int[] nums) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '56',
    title: 'Permutations II',
    slug: 'permutations-ii',
    description: `Given a collection of numbers, nums, that might contain duplicates, return all the possible unique permutations in any order.`,
    difficulty: 'Medium',
    tags: ['Array', 'Backtracking'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 6789,
    dislikes: 123,
    acceptance_rate: 54.7,
    total_submissions: 900000,
    total_accepted: 492300,
    constraints: `• 1 <= nums.length <= 8
• -10 <= nums[i] <= 10`,
    examples: [
      {
        input: 'nums = [1,1,2]',
        output: '[[1,1,2],[1,2,1],[2,1,1]]'
      },
      {
        input: 'nums = [1,2,3]',
        output: '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]'
      }
    ],
    hints: [
      'Sort the array first to handle duplicates easily.',
      'Use backtracking, but skip duplicate elements at the same recursion level.',
      'Keep track of which positions have been used.'
    ],
    similar_problems: ['31', '46', '267'],
    is_premium: false,
    template: {
      python: `def permuteUnique(nums):
    """
    :type nums: List[int]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // Your code here
};`,
      java: `class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '57',
    title: 'Rotate Image',
    slug: 'rotate-image',
    description: `You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.`,
    difficulty: 'Medium',
    tags: ['Array', 'Math', 'Matrix'],
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'],
    likes: 12345,
    dislikes: 567,
    acceptance_rate: 67.8,
    total_submissions: 1100000,
    total_accepted: 745800,
    constraints: `• n == matrix.length == matrix[i].length
• 1 <= n <= 20
• -1000 <= matrix[i][j] <= 1000`,
    examples: [
      {
        input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
        output: '[[7,4,1],[8,5,2],[9,6,3]]'
      },
      {
        input: 'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]',
        output: '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]'
      }
    ],
    hints: [
      'First transpose the matrix (swap matrix[i][j] with matrix[j][i]).',
      'Then reverse each row.',
      'Alternatively, rotate the matrix layer by layer from outside to inside.'
    ],
    similar_problems: ['54', '59'],
    is_premium: false,
    template: {
      python: `def rotate(matrix):
    """
    :type matrix: List[List[int]]
    :rtype: None Do not return anything, modify matrix in-place instead.
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // Your code here
};`,
      java: `class Solution {
    public void rotate(int[][] matrix) {
        // Your code here
    }
}`,
      cpp: `class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        // Your code here
    }
};`
    }
  },
  {
    id: '58',
    title: 'Group Anagrams',
    slug: 'group-anagrams',
    description: `Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    difficulty: 'Medium',
    tags: ['Array', 'Hash Table', 'String', 'Sorting'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 14567,
    dislikes: 432,
    acceptance_rate: 64.2,
    total_submissions: 1600000,
    total_accepted: 1027200,
    constraints: `• 1 <= strs.length <= 10^4
• 0 <= strs[i].length <= 100
• strs[i] consists of lowercase English letters only.`,
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]'
      },
      {
        input: 'strs = [""]',
        output: '[[""]]'
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]'
      }
    ],
    hints: [
      'Use a hash map where the key is the sorted string and the value is a list of anagrams.',
      'Alternatively, use character frequency as the key.',
      'Group strings that have the same sorted characters or character frequency.'
    ],
    similar_problems: ['242', '249', '438'],
    is_premium: false,
    template: {
      python: `def groupAnagrams(strs):
    """
    :type strs: List[str]
    :rtype: List[List[str]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Your code here
};`,
      java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '59',
    title: 'Pow(x, n)',
    slug: 'powx-n',
    description: `Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).`,
    difficulty: 'Medium',
    tags: ['Math', 'Recursion'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 6789,
    dislikes: 5432,
    acceptance_rate: 32.1,
    total_submissions: 1400000,
    total_accepted: 449400,
    constraints: `• -100.0 < x < 100.0
• -2^31 <= n <= 2^31-1
• n is an integer.
• Either x is not zero or n > 0.
• -10^4 <= x^n <= 10^4`,
    examples: [
      {
        input: 'x = 2.00000, n = 10',
        output: '1024.00000'
      },
      {
        input: 'x = 2.10000, n = 3',
        output: '9.26100'
      },
      {
        input: 'x = 2.00000, n = -2',
        output: '0.25000',
        explanation: '2^-2 = 1/2^2 = 1/4 = 0.25'
      }
    ],
    hints: [
      'Use binary exponentiation (exponentiation by squaring) for efficiency.',
      'Handle negative exponents by computing the reciprocal.',
      'Be careful with integer overflow when n is INT_MIN.'
    ],
    similar_problems: ['69', '372'],
    is_premium: false,
    template: {
      python: `def myPow(x, n):
    """
    :type x: float
    :type n: int
    :rtype: float
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // Your code here
};`,
      java: `class Solution {
    public double myPow(double x, int n) {
        // Your code here
        return 0.0;
    }
}`,
      cpp: `class Solution {
public:
    double myPow(double x, int n) {
        // Your code here
        return 0.0;
    }
};`
    }
  },
  {
    id: '60',
    title: 'N-Queens',
    slug: 'n-queens',
    description: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.`,
    difficulty: 'Hard',
    tags: ['Array', 'Backtracking'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 8765,
    dislikes: 234,
    acceptance_rate: 63.4,
    total_submissions: 600000,
    total_accepted: 380400,
    constraints: `• 1 <= n <= 9`,
    examples: [
      {
        input: 'n = 4',
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
        explanation: 'There exist two distinct solutions to the 4-queens puzzle as shown above'
      },
      {
        input: 'n = 1',
        output: '[["Q"]]'
      }
    ],
    hints: [
      'Use backtracking to place queens row by row.',
      'For each row, try placing a queen in each column.',
      'Check if the placement is valid (no conflicts with previously placed queens).',
      'Use sets or arrays to efficiently check for conflicts in columns and diagonals.'
    ],
    similar_problems: ['52', '1001'],
    is_premium: false,
    template: {
      python: `def solveNQueens(n):
    """
    :type n: int
    :rtype: List[List[str]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // Your code here
};`,
      java: `class Solution {
    public List<List<String>> solveNQueens(int n) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '61',
    title: 'N-Queens II',
    slug: 'n-queens-ii',
    description: `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.`,
    difficulty: 'Hard',
    tags: ['Backtracking'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 3456,
    dislikes: 234,
    acceptance_rate: 70.1,
    total_submissions: 400000,
    total_accepted: 280400,
    constraints: `• 1 <= n <= 9`,
    examples: [
      {
        input: 'n = 4',
        output: '2',
        explanation: 'There are two distinct solutions to the 4-queens puzzle as shown.'
      },
      {
        input: 'n = 1',
        output: '1'
      }
    ],
    hints: [
      'Use backtracking similar to N-Queens I, but only count solutions instead of storing them.',
      'Use bit manipulation for efficient conflict checking.',
      'Keep track of occupied columns and diagonals using bitmasks.'
    ],
    similar_problems: ['51'],
    is_premium: false,
    template: {
      python: `def totalNQueens(n):
    """
    :type n: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    // Your code here
};`,
      java: `class Solution {
    public int totalNQueens(int n) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int totalNQueens(int n) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '62',
    title: 'Maximum Subarray',
    slug: 'maximum-subarray',
    description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
    difficulty: 'Medium',
    tags: ['Array', 'Divide and Conquer', 'Dynamic Programming'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook', 'Apple'],
    likes: 25678,
    dislikes: 1234,
    acceptance_rate: 49.7,
    total_submissions: 2800000,
    total_accepted: 1391600,
    constraints: `• 1 <= nums.length <= 10^5
• -10^4 <= nums[i] <= 10^4`,
    examples: [
      {
        input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
        output: '6',
        explanation: 'The subarray [4,-1,2,1] has the largest sum 6.'
      },
      {
        input: 'nums = [1]',
        output: '1',
        explanation: 'The subarray [1] has the largest sum 1.'
      },
      {
        input: 'nums = [5,4,-1,7,8]',
        output: '23',
        explanation: 'The subarray [5,4,-1,7,8] has the largest sum 23.'
      }
    ],
    hints: [
      'Use Kadane\'s algorithm for an O(n) solution.',
      'Keep track of the maximum sum ending at the current position.',
      'The maximum subarray sum is the maximum of all these values.'
    ],
    similar_problems: ['121', '152', '697', '978'],
    is_premium: false,
    template: {
      python: `def maxSubArray(nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Your code here
};`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '63',
    title: 'Spiral Matrix',
    slug: 'spiral-matrix',
    description: `Given an m x n matrix, return all elements of the matrix in spiral order.`,
    difficulty: 'Medium',
    tags: ['Array', 'Matrix', 'Simulation'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 9876,
    dislikes: 876,
    acceptance_rate: 42.3,
    total_submissions: 1300000,
    total_accepted: 549900,
    constraints: `• m == matrix.length
• n == matrix[i].length
• 1 <= m, n <= 10
• -100 <= matrix[i][j] <= 100`,
    examples: [
      {
        input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
        output: '[1,2,3,6,9,8,7,4,5]'
      },
      {
        input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]',
        output: '[1,2,3,4,8,12,11,10,9,5,6,7]'
      }
    ],
    hints: [
      'Simulate the spiral traversal by moving right, down, left, up repeatedly.',
      'Keep track of the boundaries (top, bottom, left, right) and shrink them as you traverse.',
      'Stop when you have visited all elements.'
    ],
    similar_problems: ['48', '59', '885'],
    is_premium: false,
    template: {
      python: `def spiralOrder(matrix):
    """
    :type matrix: List[List[int]]
    :rtype: List[int]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // Your code here
};`,
      java: `class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '64',
    title: 'Jump Game',
    slug: 'jump-game',
    description: `You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.`,
    difficulty: 'Medium',
    tags: ['Array', 'Dynamic Programming', 'Greedy'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 14567,
    dislikes: 876,
    acceptance_rate: 38.4,
    total_submissions: 1800000,
    total_accepted: 691200,
    constraints: `• 1 <= nums.length <= 10^4
• 0 <= nums[i] <= 10^5`,
    examples: [
      {
        input: 'nums = [2,3,1,1,4]',
        output: 'true',
        explanation: 'Jump 1 step from index 0 to 1, then 3 steps to the last index.'
      },
      {
        input: 'nums = [3,2,1,0,4]',
        output: 'false',
        explanation: 'You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.'
      }
    ],
    hints: [
      'Use a greedy approach: keep track of the farthest position you can reach.',
      'If at any point the current index is beyond the farthest reachable position, return false.',
      'If the farthest reachable position is at least the last index, return true.'
    ],
    similar_problems: ['45', '1024', '1306'],
    is_premium: false,
    template: {
      python: `def canJump(nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // Your code here
};`,
      java: `class Solution {
    public boolean canJump(int[] nums) {
        // Your code here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool canJump(vector<int>& nums) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '65',
    title: 'Merge Intervals',
    slug: 'merge-intervals',
    description: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    difficulty: 'Medium',
    tags: ['Array', 'Sorting'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook', 'Apple'],
    likes: 16789,
    dislikes: 567,
    acceptance_rate: 44.8,
    total_submissions: 1900000,
    total_accepted: 851200,
    constraints: `• 1 <= intervals.length <= 10^4
• intervals[i].length == 2
• 0 <= starti <= endi <= 10^4`,
    examples: [
      {
        input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]',
        output: '[[1,6],[8,10],[15,18]]',
        explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].'
      },
      {
        input: 'intervals = [[1,4],[4,5]]',
        output: '[[1,5]]',
        explanation: 'Intervals [1,4] and [4,5] are considered overlapping.'
      }
    ],
    hints: [
      'Sort the intervals by their start times.',
      'Iterate through the sorted intervals and merge overlapping ones.',
      'Two intervals overlap if the start of the second is less than or equal to the end of the first.'
    ],
    similar_problems: ['57', '252', '253', '495'],
    is_premium: false,
    template: {
      python: `def merge(intervals):
    """
    :type intervals: List[List[int]]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Your code here
};`,
      java: `class Solution {
    public int[][] merge(int[][] intervals) {
        // Your code here
        return new int[][]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '66',
    title: 'Insert Interval',
    slug: 'insert-interval',
    description: `You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.`,
    difficulty: 'Medium',
    tags: ['Array'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 6789,
    dislikes: 456,
    acceptance_rate: 37.2,
    total_submissions: 800000,
    total_accepted: 297600,
    constraints: `• 0 <= intervals.length <= 10^4
• intervals[i].length == 2
• 0 <= starti <= endi <= 10^5
• intervals is sorted by starti in ascending order.
• newInterval.length == 2
• 0 <= start <= end <= 10^5`,
    examples: [
      {
        input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]',
        output: '[[1,5],[6,9]]'
      },
      {
        input: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]',
        output: '[[1,2],[3,10],[12,16]]',
        explanation: 'Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].'
      }
    ],
    hints: [
      'Find the position where the new interval should be inserted.',
      'Merge all overlapping intervals with the new interval.',
      'Add non-overlapping intervals before and after the merged interval.'
    ],
    similar_problems: ['56', '252', '253'],
    is_premium: false,
    template: {
      python: `def insert(intervals, newInterval):
    """
    :type intervals: List[List[int]]
    :type newInterval: List[int]
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // Your code here
};`,
      java: `class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        // Your code here
        return new int[][]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '67',
    title: 'Length of Last Word',
    slug: 'length-of-last-word-hard',
    description: `Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

This is the hard version with additional constraints and edge cases.`,
    difficulty: 'Hard',
    tags: ['String'],
    companies: ['Amazon', 'Microsoft'],
    likes: 1234,
    dislikes: 5678,
    acceptance_rate: 15.2,
    total_submissions: 500000,
    total_accepted: 76000,
    constraints: `• 1 <= s.length <= 10^6
• s consists of only English letters and spaces ' '.
• There is at least one word in s.
• The string may contain leading/trailing spaces and multiple consecutive spaces.`,
    examples: [
      {
        input: 's = "Hello World"',
        output: '5',
        explanation: 'The last word is "World" with length 5.'
      },
      {
        input: 's = "   fly me   to   the moon  "',
        output: '4',
        explanation: 'The last word is "moon" with length 4.'
      },
      {
        input: 's = "luffy is still joyboy"',
        output: '6',
        explanation: 'The last word is "joyboy" with length 6.'
      }
    ],
    hints: [
      'Handle the large input size efficiently.',
      'Deal with multiple consecutive spaces and trailing spaces.',
      'Optimize for both time and space complexity.'
    ],
    similar_problems: ['58'],
    is_premium: true,
    template: {
      python: `def lengthOfLastWord(s):
    """
    :type s: str
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Your code here
};`,
      java: `class Solution {
    public int lengthOfLastWord(String s) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int lengthOfLastWord(string s) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '68',
    title: 'Spiral Matrix II',
    slug: 'spiral-matrix-ii',
    description: `Given a positive integer n, generate an n x n matrix filled with elements from 1 to n² in spiral order.`,
    difficulty: 'Medium',
    tags: ['Array', 'Matrix', 'Simulation'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 4567,
    dislikes: 234,
    acceptance_rate: 63.8,
    total_submissions: 600000,
    total_accepted: 382800,
    constraints: `• 1 <= n <= 20`,
    examples: [
      {
        input: 'n = 3',
        output: '[[1,2,3],[8,9,4],[7,6,5]]'
      },
      {
        input: 'n = 1',
        output: '[[1]]'
      }
    ],
    hints: [
      'Similar to Spiral Matrix I, but fill the matrix instead of reading it.',
      'Use the same boundary approach: move right, down, left, up.',
      'Fill numbers from 1 to n² in spiral order.'
    ],
    similar_problems: ['54', '885'],
    is_premium: false,
    template: {
      python: `def generateMatrix(n):
    """
    :type n: int
    :rtype: List[List[int]]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // Your code here
};`,
      java: `class Solution {
    public int[][] generateMatrix(int n) {
        // Your code here
        return new int[][]{};
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        // Your code here
        return {};
    }
};`
    }
  },
  {
    id: '69',
    title: 'Permutation Sequence',
    slug: 'permutation-sequence',
    description: `The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"

Given n and k, return the kth permutation sequence.`,
    difficulty: 'Hard',
    tags: ['Math', 'Recursion'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 4321,
    dislikes: 456,
    acceptance_rate: 42.7,
    total_submissions: 500000,
    total_accepted: 213500,
    constraints: `• 1 <= n <= 9
• 1 <= k <= n!`,
    examples: [
      {
        input: 'n = 3, k = 3',
        output: '"213"'
      },
      {
        input: 'n = 4, k = 9',
        output: '"2314"'
      },
      {
        input: 'n = 3, k = 1',
        output: '"123"'
      }
    ],
    hints: [
      'Use factorial number system to directly compute the kth permutation.',
      'For each position, determine which number should be placed based on k and factorial values.',
      'Remove used numbers from the available set.'
    ],
    similar_problems: ['31', '46', '47'],
    is_premium: false,
    template: {
      python: `def getPermutation(n, k):
    """
    :type n: int
    :type k: int
    :rtype: str
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    // Your code here
};`,
      java: `class Solution {
    public String getPermutation(int n, int k) {
        // Your code here
        return "";
    }
}`,
      cpp: `class Solution {
public:
    string getPermutation(int n, int k) {
        // Your code here
        return "";
    }
};`
    }
  },
  {
    id: '70',
    title: 'Rotate List',
    slug: 'rotate-list',
    description: `Given the head of a linked list, rotate the list to the right by k places.`,
    difficulty: 'Medium',
    tags: ['Linked List', 'Two Pointers'],
    companies: ['Amazon', 'Microsoft', 'Google'],
    likes: 6789,
    dislikes: 1234,
    acceptance_rate: 35.8,
    total_submissions: 900000,
    total_accepted: 322200,
    constraints: `• The number of nodes in the list is in the range [0, 500].
• -100 <= Node.val <= 100
• 0 <= k <= 2 * 10^9`,
    examples: [
      {
        input: 'head = [1,2,3,4,5], k = 2',
        output: '[4,5,1,2,3]'
      },
      {
        input: 'head = [0,1,2], k = 4',
        output: '[2,0,1]'
      }
    ],
    hints: [
      'First, find the length of the list and make it circular.',
      'Calculate the effective rotation: k % length.',
      'Find the new tail (length - k steps from the original head).',
      'Break the circle at the appropriate position.'
    ],
    similar_problems: ['189', '725'],
    is_premium: false,
    template: {
      python: `# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def rotateRight(head, k):
    """
    :type head: ListNode
    :type k: int
    :rtype: ListNode
    """
    # Your code here
    pass`,
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // Your code here
};`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        // Your code here
        return null;
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        // Your code here
        return nullptr;
    }
};`
    }
  },
  {
    id: '71',
    title: 'Unique Paths',
    slug: 'unique-paths',
    description: `There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 10^9.`,
    difficulty: 'Medium',
    tags: ['Math', 'Dynamic Programming', 'Combinatorics'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 12345,
    dislikes: 345,
    acceptance_rate: 62.1,
    total_submissions: 1200000,
    total_accepted: 745200,
    constraints: `• 1 <= m, n <= 100`,
    examples: [
      {
        input: 'm = 3, n = 7',
        output: '28'
      },
      {
        input: 'm = 3, n = 2',
        output: '3',
        explanation: 'From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down 2. Down -> Down -> Right 3. Down -> Right -> Down'
      }
    ],
    hints: [
      'Use dynamic programming: dp[i][j] = dp[i-1][j] + dp[i][j-1].',
      'Alternatively, use combinatorics: C(m+n-2, m-1) or C(m+n-2, n-1).',
      'You can optimize space by using only one row of the DP table.'
    ],
    similar_problems: ['63', '64', '980'],
    is_premium: false,
    template: {
      python: `def uniquePaths(m, n):
    """
    :type m: int
    :type n: int
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Your code here
};`,
      java: `class Solution {
    public int uniquePaths(int m, int n) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int uniquePaths(int m, int n) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '72',
    title: 'Unique Paths II',
    slug: 'unique-paths-ii',
    description: `You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 10^9.`,
    difficulty: 'Medium',
    tags: ['Array', 'Dynamic Programming', 'Matrix'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 6789,
    dislikes: 234,
    acceptance_rate: 38.4,
    total_submissions: 800000,
    total_accepted: 307200,
    constraints: `• m == obstacleGrid.length
• n == obstacleGrid[i].length
• 1 <= m, n <= 100
• obstacleGrid[i][j] is 0 or 1.`,
    examples: [
      {
        input: 'obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]',
        output: '2',
        explanation: 'There is one obstacle in the middle of the 3x3 grid above. There are two ways to reach the bottom-right corner: 1. Right -> Right -> Down -> Down 2. Down -> Down -> Right -> Right'
      },
      {
        input: 'obstacleGrid = [[0,1],[0,0]]',
        output: '1'
      }
    ],
    hints: [
      'Use dynamic programming similar to Unique Paths I.',
      'If there\'s an obstacle at position (i,j), set dp[i][j] = 0.',
      'Handle the edge cases where the start or end position has an obstacle.'
    ],
    similar_problems: ['62', '980'],
    is_premium: false,
    template: {
      python: `def uniquePathsWithObstacles(obstacleGrid):
    """
    :type obstacleGrid: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // Your code here
};`,
      java: `class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '73',
    title: 'Minimum Path Sum',
    slug: 'minimum-path-sum',
    description: `Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.`,
    difficulty: 'Medium',
    tags: ['Array', 'Dynamic Programming', 'Matrix'],
    companies: ['Amazon', 'Google', 'Microsoft', 'Facebook'],
    likes: 9876,
    dislikes: 123,
    acceptance_rate: 59.7,
    total_submissions: 1000000,
    total_accepted: 597000,
    constraints: `• m == grid.length
• n == grid[i].length
• 1 <= m, n <= 200
• 0 <= grid[i][j] <= 100`,
    examples: [
      {
        input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]',
        output: '7',
        explanation: 'Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.'
      },
      {
        input: 'grid = [[1,2,3],[4,5,6]]',
        output: '12'
      }
    ],
    hints: [
      'Use dynamic programming: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).',
      'Initialize the first row and first column properly.',
      'You can optimize space by modifying the input grid in-place.'
    ],
    similar_problems: ['62', '63', '174', '741'],
    is_premium: false,
    template: {
      python: `def minPathSum(grid):
    """
    :type grid: List[List[int]]
    :rtype: int
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // Your code here
};`,
      java: `class Solution {
    public int minPathSum(int[][] grid) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        // Your code here
        return 0;
    }
};`
    }
  },
  {
    id: '74',
    title: 'Valid Number',
    slug: 'valid-number',
    description: `A valid number can be split up into these components (in order):

1. A decimal number or an integer.
2. (Optional) An 'e' or 'E', followed by an integer.

A decimal number can be split up into these components (in order):

1. (Optional) A sign character (either '+' or '-').
2. One of the following formats:
   - One or more digits, followed by a dot '.'.
   - One or more digits, followed by a dot '.', followed by one or more digits.
   - A dot '.', followed by one or more digits.

An integer can be split up into these components (in order):

1. (Optional) A sign character (either '+' or '-').
2. One or more digits.

For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.`,
    difficulty: 'Hard',
    tags: ['String'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 2345,
    dislikes: 6789,
    acceptance_rate: 17.8,
    total_submissions: 600000,
    total_accepted: 106800,
    constraints: `• 1 <= s.length <= 20
• s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.`,
    examples: [
      {
        input: 's = "0"',
        output: 'true'
      },
      {
        input: 's = "e"',
        output: 'false'
      },
      {
        input: 's = "."',
        output: 'false'
      }
    ],
    hints: [
      'Use a finite state machine to track the current state.',
      'Define states for: start, sign, integer part, decimal point, decimal part, exponent, exponent sign, exponent digits.',
      'Carefully handle all the edge cases and transitions between states.'
    ],
    similar_problems: ['8'],
    is_premium: false,
    template: {
      python: `def isNumber(s):
    """
    :type s: str
    :rtype: bool
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    // Your code here
};`,
      java: `class Solution {
    public boolean isNumber(String s) {
        // Your code here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isNumber(string s) {
        // Your code here
        return false;
    }
};`
    }
  },
  {
    id: '75',
    title: 'Text Justification',
    slug: 'text-justification',
    description: `Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:
- A word is defined as a character sequence consisting of non-space characters only.
- Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
- The input array words contains at least one word.`,
    difficulty: 'Hard',
    tags: ['Array', 'String', 'Simulation'],
    companies: ['Amazon', 'Google', 'Microsoft'],
    likes: 2345,
    dislikes: 3456,
    acceptance_rate: 34.2,
    total_submissions: 400000,
    total_accepted: 136800,
    constraints: `• 1 <= words.length <= 300
• 1 <= words[i].length <= 20
• words[i] consists of only English letters and symbols.
• 1 <= maxWidth <= 100`,
    examples: [
      {
        input: 'words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16',
        output: '["This    is    an","example  of text","justification.  "]'
      },
      {
        input: 'words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16',
        output: '["What   must   be","acknowledgment  ","shall be        "]'
      },
      {
        input: 'words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20',
        output: '["Science  is  what we","understand      well","enough to explain to","a  computer.  Art is","everything  else  we","do                  "]'
      }
    ],
    hints: [
      'For each line, determine how many words can fit.',
      'Calculate the total spaces needed and distribute them evenly.',
      'Handle the last line differently (left-justified only).',
      'Handle the case where there\'s only one word in a line.'
    ],
    similar_problems: [],
    is_premium: false,
    template: {
      python: `def fullJustify(words, maxWidth):
    """
    :type words: List[str]
    :type maxWidth: int
    :rtype: List[str]
    """
    # Your code here
    pass`,
      javascript: `/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    // Your code here
};`,
      java: `class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        // Your code here
        return new ArrayList<>();
    }
}`,
      cpp: `class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        // Your code here
        return {};
    }
};`
    }
  }
];

// Helper function to get problems by difficulty
export const getProblemsByDifficulty = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
  return problemsData.filter(problem => problem.difficulty === difficulty);
};

// Helper function to get problem by slug
export const getProblemBySlug = (slug: string) => {
  return problemsData.find(problem => problem.slug === slug);
};

// Helper function to get problems by tag
export const getProblemsByTag = (tag: string) => {
  return problemsData.filter(problem => problem.tags.includes(tag));
};

// Helper function to get problems by company
export const getProblemsByCompany = (company: string) => {
  return problemsData.filter(problem => problem.companies.includes(company));
};

// Get all unique tags
export const getAllTags = () => {
  const tags = new Set<string>();
  problemsData.forEach(problem => {
    problem.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Get all unique companies
export const getAllCompanies = () => {
  const companies = new Set<string>();
  problemsData.forEach(problem => {
    problem.companies.forEach(company => companies.add(company));
  });
  return Array.from(companies).sort();
};