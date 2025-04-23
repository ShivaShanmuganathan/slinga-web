"use client";

import { animate, useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function BeamInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turn = useMotionValue(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const email = inputRef.current?.value;
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to join waitlist");

      toast.success("Successfully joined the waitlist!");
      if (inputRef.current) inputRef.current.value = "";
    } catch (error) {
      toast.error("Failed to join waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    animate(turn, 1, {
      ease: "linear",
      duration: 5,
      repeat: Infinity,
    });
  }, [turn]);

  const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #a78bfa00 75%, #FF5733 100%)`;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onClick={() => inputRef.current?.focus()}
      className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-gradient-to-br from-background/20 to-background/5 py-1.5 pl-6 pr-1.5"
    >
      <input
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
        className="w-full bg-transparent font-medium text-foreground placeholder:text-muted-foreground focus:outline-none"
        name="email"
      />

      <button
        className={cn(
          "group relative shrink-0 rounded-full",
          "bg-gradient-to-br from-primary to-primary-foreground",
          "px-6 py-3 text-primary-foreground font-semibold",
          "transition-all duration-300",
          "hover:shadow-lg hover:shadow-primary/25",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        disabled={isSubmitting}
        onClick={(e) => e.stopPropagation()}
      >
        <span className="absolute inset-0 rounded-full border border-primary/50 opacity-50" />
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </button>

      <div className="pointer-events-none absolute inset-0 z-10 rounded-full">
        <motion.div
          style={{ backgroundImage }}
          className="absolute -inset-[1px] rounded-full border border-transparent bg-origin-border [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        />
      </div>
    </form>
  );
} 