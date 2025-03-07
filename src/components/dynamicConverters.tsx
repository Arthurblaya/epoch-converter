"use client";

import dynamic from "next/dynamic";
import CurrentEpoch from "./currentEpoch";
import HumanReadableConverterString from "./humanReadableConverterString";
import LogConverter from "./LogConverter";

const EpochConverter = dynamic(() => import("@/components/epochConverter"), {
  ssr: false,
});

const HumanReadableConverter = dynamic(
  () => import("@/components/humanReadableConverter"),
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
    </>
  );
}
