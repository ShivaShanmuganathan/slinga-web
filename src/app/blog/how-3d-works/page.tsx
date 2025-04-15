import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { Blog } from "@/components/sections/blog";
import Image from "next/image";
import { Suspense } from "react";
import { InteractiveDemo } from "./interactive-demo";

export default function How3DWorks() {
  return (
    <article className="relative">
      {/* Hero Section */}
      <Section>
        <div className="border-x border-t">
          <div className="px-4 py-10 sm:px-6 lg:px-8 pb-24">
            <div className="mx-auto max-w-3xl text-base leading-7">
              <p className="text-base font-semibold leading-7 text-primary">3D Animation</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                How to Create Stunning 3D Card Effects with CSS Perspective
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground">
                Learn how to create immersive 3D card animations using CSS perspective and transform properties.
                This tutorial will guide you through building interactive cards that respond to user movement.
              </p>

              {/* Interactive Demo */}
              <div className="mt-10 max-w-2xl">
                <InteractiveDemo />
              </div>

              {/* Article Content */}
              <div className="mt-10 max-w-2xl">
                <h2 className="mt-16 text-2xl font-bold tracking-tight">Understanding CSS Perspective</h2>
                <p className="mt-6">
                  CSS perspective is a powerful property that enables the creation of 3D transformations. 
                  It determines the distance between the z=0 plane and the user, affecting how 3D transformations are perceived.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Key Components</h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">1.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Perspective Property
                      </strong>{" "}
                      Set the perspective property on the container to create the 3D space.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">2.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Transform Style
                      </strong>{" "}
                      Use transform-style: preserve-3d to maintain 3D positioning of child elements.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-primary">3.</span>
                    <span>
                      <strong className="font-semibold text-gray-900 dark:text-white">
                        Mouse Tracking
                      </strong>{" "}
                      Implement mouse event listeners to update transformations based on cursor position.
                    </span>
                  </li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Implementation Details</h2>
                <p className="mt-6">
                  The 3D card effect is achieved through a combination of CSS properties and React state management.
                  We use mouse events to calculate the rotation angles based on cursor position relative to the card center.
                </p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight">Performance Considerations</h2>
                <p className="mt-6">
                  To ensure smooth animations, we utilize CSS transforms which are hardware-accelerated.
                  The calculations are optimized to prevent unnecessary re-renders and maintain consistent frame rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      <div className="mb-24">
        {/* <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Related Articles</h2> */}
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading related articles...</div>}>
          {/* @ts-expect-error Async Server Component */}
          <Blog />
        </Suspense>
      </div>
    </article>
  );
} 