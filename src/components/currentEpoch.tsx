"use client";

import { useEffect, useState, useRef } from "react";
import { formatInTimeZone } from "date-fns-tz";
import ClipboardIcon from "@/icons/clipBoardIcon";
import { useTimeZone } from "@/context/timeZoneContext";

export default function CurrentEpoch() {
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
        utcTime: formatInTimeZone(
          now,
          "UTC",
          "EEEE, MMMM d, yyyy HH:mm:ss XXX"
        ),
        localTime: formatInTimeZone(
          now,
          timeZone,
          "EEEE, MMMM d, yyyy HH:mm:ss XXX"
        ),
      });

      requestRef.current = requestAnimationFrame(updateTime);
    };

    requestRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [timeZone]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col gap-1 text-lg">
      <div className="flex items-center gap-2">
        <span>
          The current <span className="text-secondary">Unix epoch time</span> is
        </span>
        <span className="font-bold">{epochData.epoch || "Loading..."}</span>
        <button
          onClick={() => copyToClipboard(epochData.epoch.toString())}
          className="text-neutral hover:text-primary focus:text-primary transition-colors duration-400 cursor-pointer"
        >
          <ClipboardIcon className="size-5" />
        </button>
      </div>

      <div className="flex flex-col gap-1 text-sm">
        <div className="flex items-center gap-2">
          <span>{epochData.utcTime || "Loading..."}</span>
          <button
            onClick={() => copyToClipboard(epochData.utcTime)}
            className="text-neutral hover:text-primary focus:text-primary transition-colors duration- cursor-pointer"
          >
            <ClipboardIcon className="size-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span>{epochData.localTime || "Loading..."}</span>
          <button
            onClick={() => copyToClipboard(epochData.localTime)}
            className="text-neutral hover:text-primary focus:text-primary transition-colors duration- cursor-pointer"
          >
            <ClipboardIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
