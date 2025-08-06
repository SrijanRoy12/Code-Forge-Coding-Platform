import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Problems } from './pages/Problems';
import { ProblemDetail } from './pages/ProblemDetail';
import { Contests } from './pages/Contests';
import { Discuss } from './pages/Discuss';
import { Login } from './pages/Auth/Login';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="problems" element={<Problems />} />
            <Route path="problems/:slug" element={<ProblemDetail />} />
            <Route path="contests" element={<Contests />} />
            <Route path="discuss" element={<Discuss />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;