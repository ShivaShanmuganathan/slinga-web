import { Section } from "@/components/section";
import Blog from "@/components/sections/blog";
import Image from "next/image";
import { Suspense } from "react";

export default function CUFarmLoop() {
  return (
    <article className="relative">
      {/* Hero Section */}
      <Section>
        <div className="border-x border-t">
          <div className="px-4 py-10 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-base leading-7">
              <p className="text-base font-semibold leading-7 text-primary">Case Study</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Crypto Unicorns: The Revolutionary Farm Economy
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                A deep dive into how Crypto Unicorns built a sustainable and engaging farm economy that drives the entire game ecosystem.
              </p>

              {/* Hero Image */}
              <div className="mt-10 max-w-2xl">
                <Image
                  src="/cu-farm-loop.webp"
                  alt="Crypto Unicorns Farm Economy"
                  width={800}
                  height={400}
                  className="rounded-xl"
                />
              </div>

              {/* Article Content */}
              <div className="mt-10 max-w-2xl">
                <h2 className="mt-16 text-2xl font-bold tracking-tight">🚜 The Farm Economy</h2>
                <p className="mt-6">
                  Crypto Unicorn&apos;s farm economy serves as the foundation of its entire ecosystem, creating a perfect balance between casual gameplay and economic incentives.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💻 Technical Implementation</h2>
                <p className="mt-6">
                  The farm economy is powered by diamond standard smart contracts:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><a href="https://github.com/Laguna-Games/cu-osc-unicorns" className="text-primary hover:underline">Crypto Unicorns</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-land" className="text-primary hover:underline">Land</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-public" className="text-primary hover:underline">CU Token</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-unim" className="text-primary hover:underline">UNIM Token</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-shadowcorns" className="text-primary hover:underline">Shadowcorns</a></li>
                  <li><a href="https://github.com/Laguna-Games/cu-osc-game-bank" className="text-primary hover:underline">Game Bank</a></li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🌾 The Farming Mechanics</h2>
                <p className="mt-6">
                  Crypto Unicorns&apos; farming system is built on three core pillars:
                </p>

                <h3 className="mt-8 text-xl font-semibold">1. Land Development</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-land.png"
                    alt="Crypto Unicorns Land NFT"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  The land NFTs are yield generating properties that form the backbone of the game&apos;s economic model.
                  These lands serve as production centers where players deploy their Unicorn NFTs to perform actions such as farming, gathering, crafting, and questing.
                </p>
                <p className="mt-4">
                  Each land comes with resource potential, and players can boost productivity by upgrading buildings using materials and tokens like $UNIM and $CU.
                </p>

                <h3 className="mt-8 text-xl font-semibold">2. Unicorn Management</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-breeding.png"
                    alt="Crypto Unicorns Breeding"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>Breeding:</strong> Players can breed their Unicorns to create new generations</li>
                  <li><strong>Training:</strong> Unicorns can be trained to increase their farming efficiency</li>
                  <li><strong>Farming:</strong> Planting seedbags and harvesting to produce berries, codex pages, and $UNIM</li>
                  <li><strong>Crafting:</strong> Combining raw materials like berries and building resources to generate outputs like potions, scrolls, and quest items</li>
                  <li><strong>Questing:</strong> Using crafted items to complete class quests and unlock lootboxes, which yield further rewards and higher-tier materials</li>
                  <li><strong>Gathering:</strong> A sink mechanism to recycle excess outputs back into the ecosystem</li>
                  <li><strong>Special Abilities:</strong> Each Unicorn has unique genes that affect farming outcomes</li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold">3. Resource Generation</h3>
                <div className="mt-8">
                  <Image
                    src="/cu-token.png"
                    alt="Crypto Unicorns Token"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-4">
                  Players can grow various resources on their land:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>Crypto Unicorn Currency ($CU):</strong> The primary in-game currency</li>
                  <li><strong>Unicorn Milk ($UNIM):</strong> A premium resource used for breeding and upgrades</li>
                  <li><strong>Special Crops:</strong> Seasonal and event-specific resources</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">💰 Economic Impact</h2>
                <p className="mt-6">
                  The farm economy has had significant economic implications:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li><strong>$45M in Digital Asset Sales:</strong> Including land NFTs and farming-related items</li>
                  <li><strong>2,000+ ETH in Land Sales:</strong> Demonstrating the value of virtual real estate</li>
                  <li><strong>90%+ User Retention:</strong> Proving the sustainability of the economic model</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🤝 Social Play: Tribes & Collaboration</h2>
                <p className="mt-6">
                  Players can form Tribes, pooling materials to complete global goals or unlock tribe-specific crafting and events. 
                  Tribe mechanics enhance cooperation and introduce a new layer of strategy to the farming loop.
                </p>
                <div className="mt-8">
                  <Image
                    src="/cu-land-tribe.png"
                    alt="Crypto Unicorns Land Tribe"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🧙‍♂️ PvP Integration: Shadowcorn Raids</h2>
                <div className="mt-8">
                  <Image
                    src="/shadowcorns.jpeg"
                    alt="Shadowcorns"
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
                <p className="mt-6">
                  For a darker twist, players who own Shadowcorn NFTs can breed minions and raid Unicorn lands. 
                  This introduces an adversarial layer, tying the farming economy with factional PvP and creating resource pressure and burn mechanisms.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏦 Game Bank: The Economic Core</h2>
                <p className="mt-6">
                  The Game Bank is the central smart contract vault that underpins the entire Crypto Unicorns economy. 
                  It manages key in-game assets such as $RBW, $UNIM, Dark Marks, Lootboxes, Keystones and crafting materials.
                </p>
                <p className="mt-4">
                  Interoperable Across Gameplay Modules:
                </p>
                <ul className="mt-4 space-y-2 list-disc pl-6 marker:text-white">
                  <li>Farming</li>
                  <li>Crafting</li>
                  <li>Questing</li>
                  <li>PvP (Shadowforge)</li>
                  <li>Marketplace</li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">🏁 Conclusion</h2>
                <p className="mt-6">
                  Crypto Unicorns&apos; farm economy represents a perfect blend of traditional farming simulation mechanics with blockchain technology. 
                  It has created a sustainable economic model that keeps players engaged while providing real value through its tokenomics and GameFi systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      <div className="mb-24">
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading related articles...</div>}>
          <Blog />
        </Suspense>
      </div>
    </article>
  );
} 