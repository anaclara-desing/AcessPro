import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { AccessibilityToolbar } from './AccessibilityToolbar';
import { AccessibilityProvider } from '../contexts/AccessibilityContext';

export function RootLayout() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <AccessibilityToolbar />
      </div>
    </AccessibilityProvider>
  );
}
