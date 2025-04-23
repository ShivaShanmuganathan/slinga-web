"use client";

import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";

export function Header() {
  const scrollToCalendar = () => {
    const element = document.getElementById('calendar');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useKeyboardShortcut('b', scrollToCalendar);

  return (
    <header className="sticky top-0 h-[var(--header-height)] z-50 p-0 bg-background/60 backdrop-blur">
      <div className="flex justify-between items-center container mx-auto p-2">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo className="w-auto" />
          <span className="font-semibold text-lg">{siteConfig.name}</span>
        </Link>
        <div className="hidden lg:block">
          <div
            onClick={scrollToCalendar}
            className="cursor-pointer"
          >
            <RainbowButton>
            <span className='absolute left-0 top-0 size-full rounded-xl border border-dashed border-black shadow-inner shadow-white/30 group-active:shadow-white/10'></span>
            <span className='absolute left-0 top-0 size-full rotate-180 rounded-md border-black shadow-inner shadow-black/30 group-active:shadow-black/10'></span>
            <strong>{siteConfig.cta}</strong>
              
            </RainbowButton>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <MobileDrawer />
        </div>
      </div>
      <hr className="absolute w-full bottom-0" />
    </header>
  );
}
