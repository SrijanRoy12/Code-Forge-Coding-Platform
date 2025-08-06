import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Star, BookOpen, MessageSquare, Play } from 'lucide-react';
import { CodeEditor } from '../components/CodeEditor/CodeEditor';
import { ProgrammingLanguage } from '../types';
import { getProblemBySlug } from '../data/problems';

export const ProblemDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<'description' | 'editorial' | 'solutions' | 'discuss'>('description');
  const [language, setLanguage] = useState<ProgrammingLanguage>('python');
  const [code, setCode] = useState('');
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const problem = getProblemBySlug(slug || '');

  React.useEffect(() => {
    if (problem && problem.template) {
      setCode(problem.template[language] || '');
    }
  }, [problem, language]);

  const handleLanguageChange = (newLanguage: ProgrammingLanguage) => {
    setLanguage(newLanguage);
    if (problem && problem.template) {
      setCode(problem.template[newLanguage] || '');
    }
  };

  const handleRun = async () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      setTestResults([
        { input: '[2,7,11,15], 9', output: '[0,1]', expected: '[0,1]', passed: true },
        { input: '[3,2,4], 6', output: '[1,2]', expected: '[1,2]', passed: true },
        { input: '[3,3], 6', output: '[0,1]', expected: '[0,1]', passed: true },
      ]);
      setIsRunning(false);
    }, 2000);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  const handleReset = () => {
    if (problem && problem.template) {
      setCode(problem.template[language] || '');
    }
    setTestResults([]);
  };

  const tabs = [
    { id: 'description', label: 'Description', icon: BookOpen },
    { id: 'editorial', label: 'Editorial', icon: Star },
    { id: 'solutions', label: 'Solutions', icon: Play },
    { id: 'discuss', label: 'Discuss', icon: MessageSquare },
  ];

  if (!problem) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Problem Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            The problem you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Left Panel - Problem Description */}
      <div className="w-1/2 flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'description' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Problem Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {problem.title}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-success-500 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{problem.likes?.toLocaleString() || 'N/A'}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-error-500 transition-colors">
                      <ThumbsDown className="h-4 w-4" />
                      <span>{problem.dislikes?.toLocaleString() || 'N/A'}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${{
                    Easy: 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300',
                    Medium: 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300',
                    Hard: 'bg-error-100 text-error-700 dark:bg-error-900 dark:text-error-300',
                  }[problem.difficulty]}`}>
                    {problem.difficulty}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    Acceptance: {problem.acceptance_rate?.toFixed(1) || 'N/A'}%
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {problem.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem Description */}
              <div className="prose dark:prose-invert max-w-none">
                <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                  {problem.description}
                </div>
              </div>

              {/* Examples */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Examples
                </h3>
                <div className="space-y-4">
                  {problem.examples.map((example, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">Input:</span>
                          <code className="ml-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                            {example.input}
                          </code>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">Output:</span>
                          <code className="ml-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                            {example.output}
                          </code>
                        </div>
                        {example.explanation && (
                          <div>
                            <span className="font-medium text-gray-900 dark:text-white">Explanation:</span>
                            <span className="ml-2 text-gray-600 dark:text-gray-400">
                              {example.explanation}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Constraints */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Constraints
                </h3>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line font-mono">
                    {problem.constraints}
                  </pre>
                </div>
              </div>

              {/* Hints */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Hints
                </h3>
                <div className="space-y-3">
                  {problem.hints.map((hint, index) => (
                    <details key={index} className="group">
                      <summary className="cursor-pointer text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                        Hint {index + 1}
                      </summary>
                      <div className="mt-2 p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-sm text-gray-700 dark:text-gray-300">
                        {hint}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'editorial' && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Editorial Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                The editorial for this problem is being prepared.
              </p>
            </div>
          )}

          {activeTab === 'solutions' && (
            <div className="text-center py-12">
              <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Community Solutions
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Browse solutions shared by other users.
              </p>
            </div>
          )}

          {activeTab === 'discuss' && (
            <div className="text-center py-12">
              <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Join the Discussion
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Ask questions and share insights with the community.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Code Editor */}
      <div className="w-1/2 flex flex-col">
        <CodeEditor
          language={language}
          value={code}
          onChange={setCode}
          onRun={handleRun}
          onSubmit={handleSubmit}
          onReset={handleReset}
          isRunning={isRunning}
          isSubmitting={isSubmitting}
        />

        {/* Test Results */}
        {testResults.length > 0 && (
          <div className="h-1/3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Test Results
            </h3>
            <div className="space-y-3">
              {testResults.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    result.passed
                      ? 'bg-success-50 dark:bg-success-900/20 border-success-200 dark:border-success-800'
                      : 'bg-error-50 dark:bg-error-900/20 border-error-200 dark:border-error-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      Test Case {index + 1}
                    </span>
                    <span className={`text-sm font-medium ${
                      result.passed
                        ? 'text-success-600 dark:text-success-400'
                        : 'text-error-600 dark:text-error-400'
                    }`}>
                      {result.passed ? 'PASSED' : 'FAILED'}
                    </span>
                  </div>
                  <div className="text-sm space-y-1">
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Input:</span>
                      <code className="ml-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                        {result.input}
                      </code>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Output:</span>
                      <code className="ml-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                        {result.output}
                      </code>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700 dark:text-gray-300">Expected:</span>
                      <code className="ml-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                        {result.expected}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};