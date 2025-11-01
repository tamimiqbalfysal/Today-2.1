'use client';

import { useFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Bell, Home, Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const { auth } = useFirebase();
  const router = useRouter();

  const handleSignOut = async () => {
    await auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
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
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.push('/home')}>
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
            </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Right Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:max-w-xs">
            <SheetHeader>
              <SheetTitle>Right Panel</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <p>This is the right drawer content.</p>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <div className="grid grid-cols-1 gap-4">
              <Card>
                  <CardContent className="h-64 p-6">
                    {/* Placeholder for content */}
                  </CardContent>
              </Card>
              <Card>
                  <CardContent className="h-64 p-6">
                    {/* Placeholder for content */}
                  </CardContent>
              </Card>
          </div>
      </main>
      <div className="fixed bottom-4 right-4">
          <Button size="icon" variant="default" className="relative h-12 w-12 rounded-full shadow-lg">
              <Bell className="h-6 w-6" />
              <Badge className="absolute -top-1 -right-1 h-6 w-6 justify-center rounded-full">
                  20
              </Badge>
              <span className="sr-only">Notifications</span>
          </Button>
      </div>
    </div>
  );
}
