import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-8xl font-bold text-gray-100 mb-4">404</div>
        <h1 className="text-2xl font-bold text-primary mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Try navigating back to our homepage.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link href="/products" className="btn-outline">
            <ArrowLeft className="w-4 h-4" />
            View Products
          </Link>
        </div>
      </div>
    </div>
  );
}
