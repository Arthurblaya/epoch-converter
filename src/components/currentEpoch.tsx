"use client";
import ClipboardIcon from "@/icons/clipBoardIcon";
import { useEffect, useState } from "react";

export default function CurrentEpoch() {
  const [epoch, setEpoch] = useState<number | null>(null);
  const [utcTime, setUtcTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const newEpoch = Math.floor(Date.now() / 1000);
      setEpoch(newEpoch);
      setUtcTime(
        new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "UTC",
          hour12: false,
        }) + " UTC"
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log(`Copied: ${text}`);
    });
  };

  return (
    <div className="flex flex-col gap-1 text-lg">
      <div className="flex items-center gap-2">
        <span>
          The current <span className="text-secondary">Unix epoch time</span> is
        </span>
        <span className="font-bold">{epoch !== null ? epoch : "Loading..."}</span>
        <button
          onClick={() => epoch !== null && copyToClipboard(epoch.toString())}
          className="text-gray-500 hover:text-primary focus:text-primary cursor-pointer"
        >
          <ClipboardIcon className="size-5" />
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span>{utcTime !== null ? utcTime : "Loading..."}</span>
        <button
          onClick={() => utcTime !== null && copyToClipboard(utcTime)}
          className="text-gray-500 hover:text-primary focus:text-primary cursor-pointer"
        >
          <ClipboardIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
