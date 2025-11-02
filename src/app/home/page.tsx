'use client';

import { useFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Bell } from 'lucide-react';
import { Header } from '@/components/header';

export default function HomePage() {
  const { auth } = useFirebase();
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Header />
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
          
      </main>
      <div className="fixed bottom-4 right-4">
        <div className="relative">
          <Bell className="h-16 w-16 text-foreground" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-foreground">
            20
          </span>
          <span className="sr-only">Notifications</span>
        </div>
      </div>
    </div>
  );
}
