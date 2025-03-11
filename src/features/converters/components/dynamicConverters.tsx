"use client";

import dynamic from "next/dynamic";
import CurrentEpoch from "../../../components/currentEpoch";
import HumanReadableConverterString from "./humanReadableConverterString";
import LogConverter from "./logConverter";
import SpreadSheetConverter from "./spreadSheetConverter";

const EpochConverter = dynamic(() => import("@/features/converters/components/epochConverter"), {
  ssr: false,
});

const HumanReadableConverter = dynamic(
  () => import("@/features/converters/components/humanReadableConverter"),
  { ssr: false }
);

export default function DynamicConverters() {
  return (
    <>
      <CurrentEpoch />
      <EpochConverter />
      <HumanReadableConverter />
      <HumanReadableConverterString />
      <LogConverter />
      <SpreadSheetConverter />
    </>
  );
}
