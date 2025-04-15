"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function InteractiveDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative bg-gray-50 dark:bg-gray-900 border rounded-xl p-6">
        <CardItem translateZ="100" className="w-full">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="400"
            width="600"
            className="w-full rounded-xl object-cover"
            alt="Forest path demonstrating 3D effect"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
} 