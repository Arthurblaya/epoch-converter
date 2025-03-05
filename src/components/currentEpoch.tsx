"use client";

import { useEffect, useState, useRef } from "react";
import { formatInTimeZone } from "date-fns-tz";
import { useTimeZone } from "@/context/timeZoneContext";
import CopyButton from "./copyButton";
import { useDateFormat } from "@/context/dateFormatContext";

export default function CurrentEpoch() {
  const { dateFormat } = useDateFormat();
  const { timeZone } = useTimeZone();
  const [epochData, setEpochData] = useState({
    epoch: 0,
    localTime: "Loading...",
    utcTime: "Loading...",
  });

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setEpochData({
        epoch: Math.floor(now.getTime() / 1000),
        utcTime: formatInTimeZone(now, "UTC", dateFormat),
        localTime: formatInTimeZone(now, timeZone, dateFormat),
      });

      requestRef.current = requestAnimationFrame(updateTime);
    };

    requestRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [timeZone, dateFormat]);

  return (
    <div className="flex flex-col gap-1 text-lg">
      <div className="flex items-center gap-2">
        <span>
          The current <span className="text-secondary">Unix epoch time</span> is
        </span>
        <span className="font-bold">{epochData.epoch || "Loading..."}</span>

        <CopyButton text={epochData.epoch.toString()} size="size-5" />
      </div>

      <div className="flex flex-col gap-1 text-sm">
        <div className="flex items-center gap-2">
          <span>{epochData.utcTime || "Loading..."}</span>
          <CopyButton text={epochData.utcTime} size="size-5" />
        </div>

        {timeZone && timeZone !== "UTC" && timeZone !== "Etc/GMT+0" && (
          <div className="flex items-center gap-2">
            <span>{epochData.localTime || "Loading..."}</span>
            <CopyButton text={epochData.localTime} size="size-5" />
          </div>
        )}
      </div>
    </div>
  );
}
