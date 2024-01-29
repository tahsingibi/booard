import React from 'react';
import Logo from '../ui/logo';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { GearIcon } from '@radix-ui/react-icons';

export default function Header() {
  return (
    <div className="bg-zinc-50 shadow shadow-zinc-100  flex items-center box-border py-2 px-3 justify-between max-h-14 h-full relative z-10 border-b border-zinc-200">
      <Logo />
      <Input className="max-w-xl bg-white" placeholder="Search in tasks..." />
      <div>
        <Button variant="outline" className="bg-white hover:bg-white/50">
          <GearIcon className="mr-2 h-4 w-4" />
          Manage
        </Button>
      </div>
    </div>
  );
}
