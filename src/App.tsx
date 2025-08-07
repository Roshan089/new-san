import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import LibraryPage from './pages/LibraryPage';
import DonatePage from './pages/DonatePage';
import DevoteesPage from './pages/DevoteesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogEditor from './components/admin/BlogEditor';
import AuthGuard from './components/admin/AuthGuard';
import './i18n';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <div className="font-body text-navy-900 dark:text-silver-100 dark:bg-black flex flex-col min-h-screen transition-colors duration-300">
            <Header />
            <motion.main 
              className="flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                <Route path="/blog" element={<BlogsPage />} />
                <Route path="/blog/:slug" element={<BlogDetailPage />} />
                <Route path="/library" element={<LibraryPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/devotees" element={<DevoteesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route path="/admin" element={<AuthGuard><AdminLayout /></AuthGuard>}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="blogs/new" element={<BlogEditor />} />
                  <Route path="blogs/:id/edit" element={<BlogEditor />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </motion.main>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;