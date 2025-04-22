export interface StackIcon {
  name: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  tags: string[];
  industryTags: string[];
  stackIcons: StackIcon[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Crypto Unicorns',
    slug: '/blog/crypto-unicorns',
    imageUrl: '/cu.jpg',
    tags: [
      'No-code Development',
      'Motion Design',
      'Website',
      'Branding',
      'Copywriting',
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
    title: 'Neo Olympus',
    slug: '/blog/neo-olympus',
    imageUrl: '/neo-olympus.png',
    tags: [
      'No-code Development',
      'Motion Design',
      'Website',
      'Branding',
      'Copywriting',
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