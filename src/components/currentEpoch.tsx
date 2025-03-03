"use client";

import { useEffect, useState, useRef } from "react";
import ClipboardIcon from "@/icons/clipBoardIcon";

export default function CurrentEpoch() {
  const [epochData, setEpochData] = useState({
    epoch: 0,
    utcTime: "Loading...",
  });

  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setEpochData({
        epoch: Math.floor(now.getTime() / 1000),
        utcTime:
          now.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZone: "UTC",
            hour12: false,
          }) + " UTC",
      });

      requestRef.current = requestAnimationFrame(updateTime);
    };

    requestRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

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
          className="text-neutral hover:text-primary focus:text-primary transition-colors duration- cursor-pointer"
        >
          <ClipboardIcon className="size-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span>{epochData.utcTime || "Loading..."}</span>
        <button
          onClick={() => copyToClipboard(epochData.utcTime)}
          className="text-neutral hover:text-primary focus:text-primary transition-colors duration- cursor-pointer"
        >
          <ClipboardIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
