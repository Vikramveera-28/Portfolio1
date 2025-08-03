"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="#home" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold">Persona Portfolio</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="transition-colors hover:text-accent relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <div className="mb-8 flex justify-between items-center">
                    <Link href="#home" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <Code className="h-6 w-6 text-accent" />
                      <span className="font-bold">Persona Portfolio</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close Menu</span>
                    </Button>
                </div>
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  {navLinks.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="transition-colors hover:text-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
