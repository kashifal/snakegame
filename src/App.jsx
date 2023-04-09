import React, { lazy, Suspense } from 'react';

const Icon = lazy(() => import('./components/Mobile.jsx'));



export default function App() {
  return (
    <div className="min-h-screen py-8 w-screen flex items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <Icon />
      </Suspense>
    </div>
  );
}

