import { SignUpForm } from '@/components/signup-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Today
          </h1>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
}
