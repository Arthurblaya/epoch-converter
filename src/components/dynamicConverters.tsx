"use client";

import dynamic from "next/dynamic";

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
      <EpochConverter />
      <HumanReadableConverter />
    </>
  );
}
