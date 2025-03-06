"use client";

import { DATE_FORMAT_ISO_8601_MILLISECONDS } from "@/utils/formattedDates/formatedDates";
import { createContext, useContext, useState, ReactNode } from "react";

export interface DateFormatContextType {
  dateFormat: string;
  setDateFormat: (dateFormat: string) => void;
}

const DateFormatContext = createContext<DateFormatContextType | undefined>(
  undefined
);

export function DateFormatProvider({ children }: { children: ReactNode }) {
  const [dateFormat, setDateFormat] = useState(
    DATE_FORMAT_ISO_8601_MILLISECONDS.format
  );

  return (
    <DateFormatContext.Provider value={{ dateFormat, setDateFormat }}>
      {children}
    </DateFormatContext.Provider>
  );
}

export function useDateFormat() {
  const context = useContext(DateFormatContext);
  if (!context) {
    throw new Error("useDateFormat must be used within a DateFormatProvider");
  }
  return context;
}
