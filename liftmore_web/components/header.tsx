// components/Header.tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="w-full bg-slate-950 shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1>LiftMore</h1>
        </div>
        <div className="flex items-center">
          <div className="rounded-full max-w-9 min-w-9 max-h-9 min-h-9 bg-slate-800 overflow-clip">
            <Avatar>
              <AvatarImage src="pfp.jpeg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
