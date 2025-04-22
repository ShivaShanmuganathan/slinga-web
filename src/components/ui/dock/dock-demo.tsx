"use client";

import React from "react";
import { Dock, DockCard, DockDivider } from "@/components/ui/dock";
import { 
  HomeIcon, 
  FolderIcon, 
  ChatBubbleLeftIcon, 
  CalendarIcon, 
  Cog6ToothIcon 
} from "@heroicons/react/24/solid";

const DockDemo = () => {
  const items = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "files", icon: FolderIcon, label: "Files" },
    { id: "chat", icon: ChatBubbleLeftIcon, label: "Chat" },
    null,
    { id: "calendar", icon: CalendarIcon, label: "Calendar" },
    { id: "settings", icon: Cog6ToothIcon, label: "Settings" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <Dock className="backdrop-blur-md">
        {items.map((item, index) =>
          item ? (
            <DockCard key={item.id} id={item.id}>
              <div className="w-full h-full rounded-xl bg-white/10 dark:bg-black/20 backdrop-blur-md shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
            </DockCard>
          ) : (
            <DockDivider key={`divider-${index}`} />
          )
        )}
      </Dock>
    </div>
  );
};

export default DockDemo; 