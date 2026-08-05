"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import BookDemoDialog from "@/components/BookDemoDialog";

type DemoDialogContextValue = {
  openDemo: () => void;
};

const DemoDialogContext = createContext<DemoDialogContextValue | null>(null);

export function DemoDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openDemo = useCallback(() => setOpen(true), []);
  const value = useMemo(() => ({ openDemo }), [openDemo]);

  return (
    <DemoDialogContext.Provider value={value}>
      {children}
      <BookDemoDialog open={open} onOpenChange={setOpen} />
    </DemoDialogContext.Provider>
  );
}

export function useDemoDialog() {
  const ctx = useContext(DemoDialogContext);
  if (!ctx) {
    throw new Error("useDemoDialog must be used within DemoDialogProvider");
  }
  return ctx;
}
