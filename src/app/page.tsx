import DynamicConverters from "@/components/dynamicConverters";
import DocsProgrammingWithEpoch from "@/components/docsProgrammingWithEpoch";
import WhatIsEpoch from "@/components/whatIsEpoch";
import { consoleFont } from "@/fonts/inconsolata";
import DocsConvertHumanDateToEpoch from "@/components/docsConvertHumanDateToEpoch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Epoch Converter",
};

export default function Home() {
  return (
    <div className="p-4">
      <div className="min-h-screen container mx-auto flex flex-col max-w-screen-xl gap-4">
        <h1 className={`${consoleFont.className} text-primary text-3xl`}>
          Epoch & Unix Time Conversion Utilities
        </h1>
        <DynamicConverters />
        <WhatIsEpoch />
        <DocsProgrammingWithEpoch />
        <DocsConvertHumanDateToEpoch />
      </div>
    </div>
  );
}
