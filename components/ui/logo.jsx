import React from 'react';
import { CrumpledPaperIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      className="bg-black -mt-8 -mb-4 pt-9 pb-4 px-3 flex items-center justify-center text-white rounded-lg active:translate-y-[1px] "
      href="/"
    >
      <CrumpledPaperIcon className="w-8 h-8 m-auto" />
    </Link>
  );
}
