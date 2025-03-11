import DynamicConverters from "@/features/converters/components/dynamicConverters";
import DocsProgrammingWithEpoch from "@/features/seo/components/programmingWithEpoch";
import WhatIsEpoch from "@/features/seo/components/whatIsEpoch";
import { consoleFont } from "@/lib/fonts/inconsolata";
import DocsConvertHumanDateToEpoch from "@/features/seo/components/convertHumanDateToEpoch";
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
      </div>
    </div>
  );
}
