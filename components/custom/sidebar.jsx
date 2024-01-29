'use client';
import React from 'react';
import { AboutOpenner } from './about';
import { Button } from '../ui/button';
import {
  GearIcon,
  FileIcon,
  Pencil1Icon,
  ActivityLogIcon,
} from '@radix-ui/react-icons';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

const menus = [
  {
    id: uuid(),
    icon: <GearIcon />,
    name: 'Dashboard',
    link: '/',
  },

  {
    id: uuid(),
    icon: <Pencil1Icon />,
    name: 'Notes',
    link: '/#notes',
  },
  {
    id: uuid(),
    icon: <ActivityLogIcon />,
    name: 'Report',
    link: '/#report',
  },
];

const projects = [
  { id: uuid(), name: 'Project 1' },
  { id: uuid(), name: 'Project 2' },
  { id: uuid(), name: 'Project 3' },
];

export default function Sidebar() {
  return (
    <aside className="max-w-xs w-full p-4 bg-zinc-50 shadow shadow-zinc-100 border-r border-zinc-200 flex flex-col justify-between">
      <div className="sidebar grid gap-8">
        <div className="grid gap-0.5">
          <h4 className="text-lg my-2 font-semibold tracking-tight">Menu</h4>

          {menus.map(({ id, icon, name, link }) => (
            <Button
              variant="ghost"
              className="w-full justify-start flex gap-4 font-normal"
              key={id}
              asChild
            >
              <Link href={link}>
                {icon} {name}
              </Link>
            </Button>
          ))}
        </div>

        <div className="grid gap-0.5">
          <h4 className="text-lg my-2 font-semibold tracking-tight">
            Projects
          </h4>
          {projects.map(({ id, name }) => {
            const url = encodeURIComponent(name);

            return (
              <Button
                variant="ghost"
                className="w-full justify-start flex gap-4 font-normal"
                key={id}
                asChild
              >
                <Link href={url}>
                  <FileIcon />
                  {name}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
      <AboutOpenner />
    </aside>
  );
}
