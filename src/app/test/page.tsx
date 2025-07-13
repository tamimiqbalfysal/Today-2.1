"use client";

import { useState, useRef } from 'react';
import { PostFeed } from '@/components/fintrack/recent-transactions';
import { Header } from '@/components/fintrack/header';
import type { Post } from '@/lib/types';

const mockPosts: Post[] = [
  {
    id: "1",
    authorId: "test-user-1",
    authorName: "John Doe",
    authorPhotoURL: "https://placehold.co/40x40/FF69B4/FFFFFF?text=J",
    content: "This is the first post in our scroll-snapped feed! Each post now takes up the full viewport and you can scroll smoothly between them.",
    timestamp: { toDate: () => new Date("2024-01-01T10:00:00Z") } as any,
    likes: [],
    comments: []
  },
  {
    id: "2",
    authorId: "test-user-2",
    authorName: "Jane Smith",
    authorPhotoURL: "https://placehold.co/40x40/4CAF50/FFFFFF?text=J",
    content: "Welcome to the second post! Notice how scrolling snaps perfectly to each post, creating a smooth, Instagram-like experience.",
    timestamp: { toDate: () => new Date("2024-01-01T11:00:00Z") } as any,
    likes: [],
    comments: []
  },
  {
    id: "3",
    authorId: "test-user-3",
    authorName: "Bob Johnson",
    authorPhotoURL: "https://placehold.co/40x40/2196F3/FFFFFF?text=B",
    content: "This is the third post demonstrating the full-screen centered layout. Each post is perfectly centered both horizontally and vertically on the screen.",
    timestamp: { toDate: () => new Date("2024-01-01T12:00:00Z") } as any,
    likes: [],
    comments: []
  },
  {
    id: "4",
    authorId: "test-user-4",
    authorName: "Alice Brown",
    authorPhotoURL: "https://placehold.co/40x40/FF5722/FFFFFF?text=A",
    content: "Fourth post here! The scroll snapping ensures that you always see exactly one post at a time, making the browsing experience much more focused and engaging.",
    timestamp: { toDate: () => new Date("2024-01-01T13:00:00Z") } as any,
    likes: [],
    comments: []
  }
];

export default function TestPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const currentScrollY = scrollContainerRef.current.scrollTop;
      // Simple header visibility logic
      setIsHeaderVisible(currentScrollY < 50);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header isVisible={isHeaderVisible} />
      <main className="flex-1 overflow-hidden">
        <PostFeed 
          posts={mockPosts} 
          scrollContainerRef={scrollContainerRef}
          onScroll={handleScroll}
          isFullScreen={true}
        />
      </main>
    </div>
  );
}