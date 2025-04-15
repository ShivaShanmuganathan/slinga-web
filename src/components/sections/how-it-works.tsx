import Features from "@/components/features-vertical";
import { Section } from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Tell Me What You're Building",
    content:
      "Whether it's a DeFi protocol, an NFT game, or something completely new, share your vision. We'll align on scope, priorities, and what success looks like.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Build the Core Contracts",
    content: "From architecture to deployment, I handle every part of the smart contract lifecycle — following best practices in gas optimization, upgradability, and security.",
    image: "/dashboard.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Test, Ship, and Support",
    content:
      "Your contracts are rigorously tested, audited-ready, and shipped to mainnet. I support integrations, upgrades, and documentation so you're launch-ready.",
    image: "/dashboard.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <div >
      <Section title="The Process" subtitle="Here’s what working together looks like">
        <div className="border overflow-hidden relative text-center py-16 mx-auto">
          <Features data={data} />
        </div>
      </Section>
    </div>
  );
}
