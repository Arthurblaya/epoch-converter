import CurrentEpoch from "@/components/currentEpoch";
import EpochConverter from "@/features/converters/components/epochConverter";
import HumanReadableConverter from "@/features/converters/components/humanReadableConverter";
import HumanReadableConverterString from "@/features/converters/components/humanReadableConverterString";
import LogConverter from "@/features/converters/components/logConverter";
import SpreadSheetConverter from "@/features/converters/components/spreadSheetConverter";
import { consoleFont } from "@/lib/fonts/inconsolata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Timestamp Converter",
};

export default function Home() {
  return (
    <div className="p-4">
      <div className="min-h-screen container mx-auto flex flex-col max-w-screen-xl gap-4">
        <h1 className={`${consoleFont.className} text-primary text-3xl`}>
          Epoch & Unix Timestamp Conversion Utilities
        </h1>
        <CurrentEpoch />
        <EpochConverter />
        <HumanReadableConverter />
        <HumanReadableConverterString />
        <LogConverter />
        <SpreadSheetConverter />
      </div>
    </div>
  );
}
