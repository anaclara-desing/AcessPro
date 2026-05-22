import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { Home } from './pages/Home';
import { Diagnostico } from './pages/Diagnostico';
import { Consultoria } from './pages/Consultoria';
import { Treinamentos } from './pages/Treinamentos';
import { Dashboard } from './pages/Dashboard';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'diagnostico', Component: Diagnostico },
      { path: 'consultoria', Component: Consultoria },
      { path: 'treinamentos', Component: Treinamentos },
      { path: 'dashboard', Component: Dashboard },
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: BlogPost },
      { path: '*', Component: NotFound },
    ],
  },
]);
