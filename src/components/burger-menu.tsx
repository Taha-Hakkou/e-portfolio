"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open menu"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-primary/20 rounded-md shadow-lg py-1 z-10">
          <Link href="/" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/projects" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  )
}
