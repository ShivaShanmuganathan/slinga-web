"use client";

import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { siteConfig } from "@/lib/config";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export function Header() {
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
          <Link
            href="/#calendar"
          >
            <RainbowButton>
              {siteConfig.cta}
            </RainbowButton>
          </Link>
          
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <MobileDrawer />
        </div>
      </div>
      <hr className="absolute w-full bottom-0" />
    </header>
  );
}
