'use client';

import { useFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Home, Menu, Bell, Trash2, PlusCircle, Calendar } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function HomePage() {
  const { auth } = useFirebase();
  const router = useRouter();

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
    }
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Left Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <SheetHeader>
              <SheetTitle>Left Panel</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <p>This is the left drawer content.</p>
              <Button onClick={handleSignOut} variant="secondary" className="mt-4">
                Sign Out
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex-1 flex justify-center">
            <Button variant="ghost" size="icon" onClick={() => router.push('/home')}>
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
            </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Right Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-xs">
            <SheetHeader>
              <SheetTitle className="sr-only">Actions</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <div className="flex flex-col space-y-4">
                <Button variant="ghost" className="justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Today
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => router.push('/add')}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
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
