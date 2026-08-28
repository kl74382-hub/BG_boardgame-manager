'use client';

import React, { useEffect, useState } from 'react';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { LogPlayModal } from '@/components/plays/LogPlayModal';
import { ensureSeedData } from '@/lib/db';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLogPlayOpen, setIsLogPlayOpen] = useState(false);
  const [targetGameId, setTargetGameId] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Ensure initial database seeds are loaded
    ensureSeedData();
  }, []);

  const handleOpenLogPlay = (gameId?: string) => {
    setTargetGameId(gameId);
    setIsLogPlayOpen(true);
  };

  return (
    <html lang="ko" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col md:flex-row antialiased selection:bg-indigo-500 selection:text-white">
        
        {/* Navigation Sidebar & Mobile Bottom Bar */}
        <Navbar onOpenLogPlay={() => handleOpenLogPlay()} />

        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 pb-20 md:pb-8 min-h-screen flex flex-col">
          {children}
        </main>

        {/* Global Log Play Modal */}
        <LogPlayModal
          isOpen={isLogPlayOpen}
          onClose={() => {
            setIsLogPlayOpen(false);
            setTargetGameId(undefined);
          }}
          initialGameId={targetGameId}
        />
      </body>
    </html>
  );
}
