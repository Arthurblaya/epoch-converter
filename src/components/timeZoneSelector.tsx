"use client";

import { useTimeZone } from "@/context/timeZoneContext";

const timeZones = [
  "UTC",
  ...Array.from(
    { length: 25 },
    (_, i) => `Etc/GMT${i - 12 > 0 ? "-" : "+"}${Math.abs(i - 12)}`
  ),
  "Europe/Madrid",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "Asia/Tokyo",
  "Asia/Dubai",
  "Australia/Sydney",
];

function TimeZoneSelector({ className }: { className?: string }) {
  const { timeZone, setTimeZone } = useTimeZone();

  return (
    <select
      value={timeZone}
      onChange={(e) => setTimeZone(e.target.value)}
      className={className + " select w-25"}
    >
      {timeZones.map((tz) => (
        <option key={tz} value={tz}>
          {tz.startsWith("Etc/GMT")
            ? tz.replace("Etc/", "")
            : tz.replace("_", " ")}
        </option>
      ))}
    </select>
  );
}

export default TimeZoneSelector;
