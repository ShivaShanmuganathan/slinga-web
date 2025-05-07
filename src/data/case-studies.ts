import { Icons } from "@/components/icons";

export interface StackIcon {
  name: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  slug: string;
  imageUrl: string;
  description: string;
  metrics: string[];
  tags: string[];
  builtItems: string[];
  keywords: string[];
  industryTags: string[];
  stackIcons: StackIcon[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: '🦄 Crypto Unicorns',
    role: 'Smart Contract Architect – GameFi (Fully Onchain)',
    slug: '/blog/crypto-unicorns',
    imageUrl: '/cu.jpg',
    description: 'A modular ecosystem of NFT-powered farming, breeding, and PvP loops. I helped scale this protocol with fully onchain mechanics, Diamond Standard upgrades, and production systems tied to staking, land, and class-based battles.',
    metrics: [
      '$100M TVL',
      '$25M+ NFTs minted',
      '70%+ retention via reward mechanics'
    ],
    builtItems: [
      'Queue-based reward system',
      'Asset minting',
      'Staking',
      'Marketplace',
      'Shadowforge'
    ],
    tags: [
      'GameFi',
      'ERC-2535',
      'Modular Smart Contracts',
      'Onchain Economy'
    ],
    keywords: [
      'Fully Onchain Game',
      'Modular Smart Contracts',
      'NFT Infrastructure',
      'Diamond Standard'
    ],
    industryTags: [
      'Copyright Protection',
      'Anti-Piracy',
      'AI-Powered Brand Protection',
    ],
    stackIcons: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Framer', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
    ],
  },
  {
    id: '2',
    title: '🔴 Neo Olympus',
    role: 'Lead Solidity Engineer – DN404 GameFi Protocol',
    slug: '/blog/neo-olympus',
    imageUrl: '/neo-olympus.png',
    description: 'Led the development of an advanced, fully onchain strategy game built entirely on smart contracts. Architected and shipped the entire system solo — from DN404-powered Prime Core NFTs to Realm Forge emission logic, summoning altars, and reroll mechanisms.',
    metrics: [
    ],
    builtItems: [
      'Prime Core Mint',
      'Uniswap reroll logic',
      'MUD-integrated emissions',
      'Leaderboard system'
    ],
    tags: [
      'DN404',
      'Diamond Standard',
      'Onchain Game Economy',
      'Reroll Systems'
    ],
    keywords: [
      'DN404',
      'Diamond Standard',
      'Onchain Game Economy',
      'Reroll Systems',
      'Security-First Architecture'
    ],
    industryTags: [
      'GameFi',
      'Onchain Gaming',
      'Modular Architectures',
    ],
    stackIcons: [
      { name: 'Figma', icon: '🎨' },
      { name: 'Framer', icon: '⚡' },
    ],
  },
]; 