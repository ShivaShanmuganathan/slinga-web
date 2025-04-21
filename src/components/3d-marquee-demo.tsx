"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    { src: "/marquee/cu-airdrop.jpeg", link: "/blog/cu-assets" },
    { src: "/marquee/cu-farm-loop.webp", link: "/blog/cu-farm-loop" },
    { src: "/marquee/cu-game-24.webp", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-26.webp", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-29.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-31.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-32.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-37.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-jousting-banner.jpeg", link: "/blog/cu-battle-loop" },
    { src: "/marquee/cu-land-tribe.png", link: "/blog/cu-farm-loop" },
    { src: "/marquee/cu-marketplace-bundles.jpeg", link: "/blog/cu-trading-systems" },
    { src: "/marquee/cu-migration.jpeg", link: "/blog/cu-assets" },
    { src: "/marquee/cu-poster.jpeg", link: "/blog/cu-assets" },
    { src: "/marquee/cu-staking.jpeg", link: "/blog/cu-assets" },
    { src: "/marquee/shadowcorns.jpeg", link: "/blog/cu-twlight" },
    { src: "/marquee/twilight-tactics.jpeg", link: "/blog/cu-twlight" },
    { src: "/marquee/unicorn-party.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-airdrop.jpeg", link: "/blog/cu-assets" },
    { src: "/marquee/cu-farm-loop.webp", link: "/blog/cu-farm-loop" },
    { src: "/marquee/cu-game-24.webp", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-26.webp", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-29.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-31.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-32.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-game-37.jpeg", link: "/blog/cu-2p-loop" },
    { src: "/marquee/cu-jousting-banner.jpeg", link: "/blog/cu-battle-loop" },
    { src: "/marquee/cu-land-tribe.png", link: "/blog/cu-farm-loop" },
    { src: "/marquee/cu-marketplace-bundles.jpeg", link: "/blog/cu-trading-systems" },
    { src: "/marquee/cu-migration.jpeg", link: "/blog/cu-assets" },
    { src: "/marquee/cu-poster.jpeg", link: "/blog/cu-assets" },
    { src: "/marquee/cu-staking.jpeg", link: "/blog/cu-assets" },
    { src: "/marquee/shadowcorns.jpeg", link: "/blog/cu-twlight" },
    { src: "/marquee/twilight-tactics.jpeg", link: "/blog/cu-twlight" },
    { src: "/marquee/unicorn-party.jpeg", link: "/blog/cu-2p-loop" },
  ];
  return (
    <div className="mx-auto bg-gray-950/5 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
