import { generateDailyQuote } from '@/ai/flows/generate-daily-quote';
import TodayClient from '@/components/today-client';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let quoteData = { quote: "The best way to predict the future is to create it." };
  try {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    
    quoteData = await generateDailyQuote({ date: formattedDate, mood: 'inspirational' });

  } catch (error) {
    console.error("Failed to generate quote:", error);
    // Fallback quote in case of an error
  }

  return <TodayClient initialQuote={quoteData.quote} />;
}
