"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface TimeZoneContextType {
  timeZone: string;
  setTimeZone: (timeZone: string) => void;
}

const TimeZoneContext = createContext<TimeZoneContextType | undefined>(
  undefined
);

export function TimeZoneProvider({ children }: { children: ReactNode }) {
  const [timeZone, setTimeZone] = useState("UTC");

  return (
    <TimeZoneContext.Provider value={{ timeZone, setTimeZone }}>
      {children}
    </TimeZoneContext.Provider>
  );
}

export function useTimeZone() {
  const context = useContext(TimeZoneContext);
  if (!context) {
    throw new Error("useTimeZone must be used within a TimeZoneProvider");
  }
  return context;
}
