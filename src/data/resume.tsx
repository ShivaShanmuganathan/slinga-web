import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shiva Shanmuganathan",
  initials: "SS",
  url: "https://slinga.xyz",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Smart Contract Engineer specializing in Web3 and blockchain technology. Building secure and scalable decentralized applications.",
  summary:
    "With over 3 years of experience in blockchain development, I specialize in smart contract development, security auditing, and DeFi protocol implementation. I have a proven track record of building secure and efficient smart contracts, conducting thorough audits, and implementing complex DeFi protocols.",
  avatarUrl: "/me.png",
  skills: [
    "Solidity",
    "Smart Contracts",
    "DeFi",
    "Web3.js",
    "Ethers.js",
    "Hardhat",
    "Foundry",
    "React",
    "Next.js",
    "TypeScript",
    "Security Auditing"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shanshiva@outlook.com",
    tel: "+91 6379928505",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShivaShanmuganathan/",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shiva-shanmuganathan/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/shanshiva1",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shanshiva@outlook.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Crypto Unicorns",
      href: "https://cryptounicorns.fun",
      badges: ["Remote"],
      location: "Remote",
      title: "Smart Contract Engineer",
      logoUrl: "/cu-logo.png",
      start: "2022",
      end: "Present",
      description:
        "Lead smart contract development for The Dark Forest tournament series. Implemented complex game mechanics and reward systems using the Diamond Standard. Built secure staking and farming contracts managing over $100M in TVL.",
    },
    {
      company: "Freelance",
      badges: ["Remote"],
      href: "#",
      location: "Remote",
      title: "Smart Contract Engineer",
      start: "2021",
      end: "2022",
      description:
        "Developed and audited smart contracts for various DeFi protocols and NFT projects. Implemented staking, farming, and reward distribution systems. Conducted security audits and code reviews.",
    }
  ],
  education: [
    {
      school: "Anna University",
      href: "https://www.annauniv.edu/",
      degree: "Bachelor of Engineering in Computer Science",
      logoUrl: "/au-logo.png",
      start: "2017",
      end: "2021",
    }
  ],
  projects: [
    {
      title: "Shadowforge",
      href: "https://github.com/Laguna-Games/cu-osc-shadowforge",
      dates: "2022 - Present",
      active: true,
      description:
        "Core smart contract framework powering Crypto Unicorns' Dark Forest tournament series. Built using the Diamond Standard for upgradeable contracts. Manages complex game mechanics and reward distribution.",
      technologies: [
        "Solidity",
        "Diamond Standard",
        "Hardhat",
        "TypeScript",
        "Web3.js"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Laguna-Games/cu-osc-shadowforge",
          icon: <Icons.github className="size-3" />,
        }
      ]
    },
    {
      title: "DeFi Protocols",
      href: "#",
      dates: "2021 - 2022",
      active: false,
      description:
        "Developed various DeFi protocols including lending platforms, AMMs, and yield farming systems. Implemented secure staking and reward distribution mechanisms.",
      technologies: [
        "Solidity",
        "Web3.js",
        "Hardhat",
        "React",
        "TypeScript"
      ]
    }
  ]
} as const;
